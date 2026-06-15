import Link from "next/link";

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-black">{hotel.name}</h2>

        <p className="text-gray-500">{hotel.city}</p>

        <div className="flex justify-between mt-2">
          <span className="text-black">⭐ {hotel.rating}</span>
          <span className="font-semibold text-black">₹{hotel.price}</span>
        </div>

        <Link
          href={`/hotel/${hotel._id}`}
          className="block mt-4 text-center bg-black text-white py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}