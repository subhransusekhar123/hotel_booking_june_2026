"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function HotelDetails() {
  const params = useParams();
  const router = useRouter();

  const [hotel, setHotel] = useState<any>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    fetchHotel();
  }, []);

  const fetchHotel = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/hotels/${params.id}`
      );

      setHotel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        router.push("/login");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/bookings",
        {
          customerName:customerName,
          hotelId:params.id,
          checkIn,
          checkOut,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Booking Successful");
      router.push("/bookings");
    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left Side */}
        <div>
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-4xl font-bold">
            {hotel.name}
          </h1>

          <p className="text-gray-500 mt-2">
            📍 {hotel.city}
          </p>

          <p className="mt-4 text-yellow-500">
            ⭐ {hotel.rating}
          </p>

          <p className="mt-4 text-gray-700">
            {hotel.description}
          </p>

          <p className="text-3xl font-bold mt-6">
            ₹{hotel.price}
            <span className="text-lg font-normal">
              {" "}
              / night
            </span>
          </p>

          {/* Booking Box */}
          <div className="border rounded-xl p-5 mt-8 shadow">

            <label className="block mb-2">
  Customer Name
</label>

<input
  type="text"
  placeholder="Enter your name"
  value={customerName}
  onChange={(e) =>
    setCustomerName(e.target.value)
  }
  className="w-full border p-3 rounded mb-4"
/>
            <h2 className="text-xl font-semibold mb-4">
              Book Your Stay
            </h2>

            <label className="block mb-2">
              Check In
            </label>

            <input
              type="date"
              value={checkIn}
              onChange={(e) =>
                setCheckIn(e.target.value)
              }
              className="w-full border p-3 rounded mb-4"
            />

            <label className="block mb-2">
              Check Out
            </label>

            <input
              type="date"
              value={checkOut}
              onChange={(e) =>
                setCheckOut(e.target.value)
              }
              className="w-full border p-3 rounded mb-4"
            />

            <button
              onClick={handleBooking}
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}