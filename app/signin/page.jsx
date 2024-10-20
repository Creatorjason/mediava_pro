"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct hook for app directory

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Logic for signing in goes here
    console.log({ email, password });
    // Redirect to home page after signing in
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="container max-w-md mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign In</h1>
        <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSignIn}>
          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button className="text-cyan-500 hover:underline" onClick={() => router.push("/signup")}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
