"use client"
import HotelCard from "@/app/components/HotelCard";
// import { hotels } from "@/app/hotels";

import { useEffect, useState } from "react";
import { getHotels } from "@/app/services/hotel";


export default function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const data = await getHotels();
      setHotels(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Find Your Perfect Stay
      </h1>

      <div className="grid md:grid-cols-3 gap-6 ">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </main>
  );
}