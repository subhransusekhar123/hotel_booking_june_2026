import HotelCard from "@/app/components/HotelCard";
import { hotels } from "@/app/hotels";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Find Your Perfect Stay
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </main>
  );
}