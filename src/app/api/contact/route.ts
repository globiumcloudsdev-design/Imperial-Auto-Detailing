import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getAdminEmailTemplate, getUserEmailTemplate } from "@/utils/email";

const resendKey = process.env.RESEND_EMAIL_SECRET_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required contact details." },
        { status: 400 }
      );
    }

    // Prepare data for external API
    const contactData = {
      name: body.name,
      email: body.email,
      message: body.message,
      webName: "Imperial Auto Detailing",
      status: "new",
    };

    // Make API call to external service
    const externalResponse = await fetch("https://car-detailling-dashboard.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (!externalResponse.ok) {
      throw new Error(`External API error: ${externalResponse.statusText}`);
    }

    const externalData = await externalResponse.json();

    // Load env vars safely
    const from = (process.env.FROM_EMAIL ?? "onboarding@resend.dev").trim();
    const admin = (process.env.ADMIN_EMAIL ?? "nomanirshad0324@gmail.com").trim();

    // Send confirmation emails
    let userResult = null;
    let adminResult = null;
    let emailsSent = false;
    if (resend) {
      const userPromise = resend.emails.send({
        from,
        to: body.email.trim(),
        subject: "Thank you for contacting Imperial Auto Detailing",
        html: `<p>Dear ${body.name},</p><p>Thank you for your inquiry. We have received your message and will get back to you soon.</p><p>Best regards,<br>Imperial Auto Detailing Team</p>`,
      });

      const adminPromise = resend.emails.send({
        from,
        to: admin,
        subject: `New Contact Inquiry from ${body.name}`,
        html: `<p>New contact inquiry:</p><p>Name: ${body.name}</p><p>Email: ${body.email}</p><p>Phone: ${body.phone || 'N/A'}</p><p>Message: ${body.message}</p>`,
      });

      [userResult, adminResult] = await Promise.all([userPromise, adminPromise]);
      emailsSent = true;
    } else {
      console.warn("⚠️ No Resend key, skipping emails");
    }

    return NextResponse.json({
      success: true,
      message: emailsSent ? "Inquiry submitted and emails sent successfully." : "Inquiry submitted successfully (emails not sent).",
      externalResponse: externalData,
      results: { user: userResult, admin: adminResult },
    });
  } catch (error: any) {
    console.error("❌ Contact submission error:", error);
    return NextResponse.json(
      { success: false, error: error.message ?? "Failed to submit inquiry." },
      { status: 500 }
    );
  }
}
