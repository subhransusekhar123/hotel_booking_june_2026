"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/bookings"
      );

      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center">
          No bookings found.
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {bookings.map((booking: any) => (
            <div
              key={booking._id}
              className="border rounded-xl p-6 shadow"
            >
              <h2 className="text-2xl font-bold">
                {booking.hotelId?.name}
              </h2>

              <p className="mt-2">
                👤 {booking.customerName}
              </p>

              <p>
                📅 Check In:{" "}
                {new Date(
                  booking.checkIn
                ).toLocaleDateString()}
              </p>

              <p>
                📅 Check Out:{" "}
                {new Date(
                  booking.checkOut
                ).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}