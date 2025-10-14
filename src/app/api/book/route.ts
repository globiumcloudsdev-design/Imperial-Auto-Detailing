import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getAdminEmailTemplate, getUserEmailTemplate } from "@/utils/email";

const resendKey = process.env.RESEND_EMAIL_SECRET_KEY;
const resend = resendKey ? new Resend(resendKey) : null;



interface BookingBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  date: string;
  timeSlot?: string;
  vehicles?: {
    make: string;
    model: string;
    year: string;
    color: string;
    size?: string;
    vehicleType?: string;
    selectedPackages: string[];
  }[];
  additionalServices?: string[];
  notes?: string;
  totalPrice?: number;
  promoCode?: string;
}

export async function POST(req: Request) {
  try {
    const body: BookingBody = await req.json();

    // ✅ Validate required fields
    if (!body.email || !body.firstName || !body.lastName || !body.date) {
      return NextResponse.json(
        { success: false, error: "Missing required booking details." },
        { status: 400 }
      );
    }

    // ✅ Ensure consistent date format
    const bookingDate = new Date(body.date);
    if (isNaN(bookingDate.getTime())) {
      return NextResponse.json(
        { success: false, error: "Invalid booking date format." },
        { status: 400 }
      );
    }
    if (bookingDate < new Date()) {
      return NextResponse.json(
        { success: false, error: "Booking date must be in the future." },
        { status: 400 }
      );
    }
    body.date = bookingDate.toISOString();

    // ✅ Load env vars safely
    const from = (process.env.FROM_EMAIL ?? "onboarding@resend.dev").trim();
    const admin = (process.env.ADMIN_EMAIL ?? "nomanirshad0324@gmail.com").trim();

    // Validate vehicles array if present
    if (!body.vehicles || !Array.isArray(body.vehicles) || body.vehicles.length === 0) {
      return NextResponse.json(
        { success: false, error: "At least one vehicle must be provided." },
        { status: 400 }
      );
    }

    // Validate each vehicle's required fields
    for (const vehicle of body.vehicles) {
      if (!vehicle.make || !vehicle.model || !vehicle.year || !vehicle.color || !vehicle.selectedPackages) {
        return NextResponse.json(
          { success: false, error: "Missing required vehicle details." },
          { status: 400 }
        );
      }
    }

    // Map body to Booking schema format
    const vehicleBookings = body.vehicles.map((vehicle, index) => ({
      id: `vehicle-${index + 1}`,
      serviceType: "car-detailing",
      variant: vehicle.vehicleType || "standard",
      mainService: "Exterior & Interior Detailing",
      package: vehicle.selectedPackages[0] || "Basic",
      additionalServices: body.additionalServices || [],
      vehicleType: vehicle.vehicleType || "car",
      vehicleMake: vehicle.make,
      vehicleModel: vehicle.model,
      vehicleYear: vehicle.year,
      vehicleColor: vehicle.color,
      vehicleLength: vehicle.size || "",
    }));

    const bookingData = {
      bookingId: `booking-${Date.now()}`,
      webName: "Imperial Auto Detailing",
      formData: {
        vehicleBookings,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone || "",
        address: body.address || "",
        city: body.city || "",
        state: body.state || "",
        zip: body.zip || "",
        date: body.date,
        timeSlot: body.timeSlot || "",
        notes: body.notes || "",
      },
      totalPrice: body.totalPrice || 0,
      discountedPrice: body.totalPrice || 0,
      discountApplied: !!body.promoCode,
      discountPercent: body.promoCode ? 10 : 0,
      promoCode: body.promoCode || "",
      submittedAt: new Date().toISOString(),
      vehicleCount: body.vehicles.length,
      status: "pending",
    };

    // Make API call to external service
    const externalResponse = await fetch("https://car-detailling-dashboard.vercel.app/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!externalResponse.ok) {
      throw new Error(`External API error: ${externalResponse.statusText}`);
    }

    const externalData = await externalResponse.json();

    // ✅ Send user confirmation email
    let userResult = null;
    let adminResult = null;
    let emailsSent = false;
    if (resend) {
      const userPromise = resend.emails.send({
        from,
        to: body.email.trim(),
        subject: "✅ Booking Confirmation - Imperial Auto Detailing",
        html: getUserEmailTemplate(body),
      });

      const adminPromise = resend.emails.send({
        from,
        to: admin,
        subject: `📩 New Booking - ${body.firstName} ${body.lastName}`,
        html: getAdminEmailTemplate(body),
      });

      [userResult, adminResult] = await Promise.all([userPromise, adminPromise]);
      emailsSent = true;
    } else {
      console.warn("⚠️ No Resend key, skipping emails");
    }

    return NextResponse.json({
      success: true,
      message: emailsSent ? "Booking processed and emails sent successfully." : "Booking processed successfully (emails not sent).",
      externalResponse: externalData,
      results: { user: userResult, admin: adminResult },
    });
  } catch (error: any) {
    console.error("❌ Booking creation error:", error);
    return NextResponse.json(
      { success: false, error: error.message ?? "Failed to create booking." },
      { status: 500 }
    );
  }
}
