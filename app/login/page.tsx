"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-black text-white py-3 rounded">
          Login
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}