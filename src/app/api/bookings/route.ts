import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Booking from "@/models/Booking";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI!);
};

export async function GET() {
  try {
    let dbConnected = false;
    try {
      await connectDB();
      dbConnected = true;
    } catch (dbError) {
      console.warn("⚠️ Database connection failed, returning empty bookings:", dbError);
    }

    let bookings = [];
    if (dbConnected) {
      bookings = await Booking.find().sort({ createdAt: -1 });
    }

    return NextResponse.json({ success: true, bookings });
  } catch (error: any) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
