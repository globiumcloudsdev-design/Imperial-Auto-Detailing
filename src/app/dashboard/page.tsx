"use client";

import { useEffect, useState } from "react";

interface Booking {
  _id: string;
  bookingId: string;
  webName: string;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    date: string;
    timeSlot: string;
  };
  totalPrice: number;
  status: string;
  submittedAt: string;
}

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBookings(data.bookings);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Bookings Dashboard</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Booking ID</th>
            <th className="border border-gray-300 p-2">Customer</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Time</th>
            <th className="border border-gray-300 p-2">Total Price</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="border border-gray-300 p-2">{booking.bookingId}</td>
              <td className="border border-gray-300 p-2">
                {booking.formData.firstName} {booking.formData.lastName}
              </td>
              <td className="border border-gray-300 p-2">{booking.formData.email}</td>
              <td className="border border-gray-300 p-2">{booking.formData.date}</td>
              <td className="border border-gray-300 p-2">{booking.formData.timeSlot}</td>
              <td className="border border-gray-300 p-2">${booking.totalPrice}</td>
              <td className="border border-gray-300 p-2">{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
