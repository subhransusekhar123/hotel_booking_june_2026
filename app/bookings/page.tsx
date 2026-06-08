const bookings = [
  {
    id: 1,
    hotel: "Hotel Paradise",
    city: "Bangalore",
    checkIn: "2026-06-10",
    checkOut: "2026-06-12",
  },
  {
    id: 2,
    hotel: "Sea View Resort",
    city: "Goa",
    checkIn: "2026-07-01",
    checkOut: "2026-07-03",
  },
];

export default function BookingsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Bookings
      </h1>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border rounded-lg p-4 shadow"
          >
            <h2 className="text-xl font-semibold">
              {booking.hotel}
            </h2>

            <p>{booking.city}</p>

            <p>
              Check In: {booking.checkIn}
            </p>

            <p>
              Check Out: {booking.checkOut}
            </p>

            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded">
              Cancel Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}