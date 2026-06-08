import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">
        StayEase
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/bookings">Bookings</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}