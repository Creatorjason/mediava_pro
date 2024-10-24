"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Added phone state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // New state for role (User or Creative)
  const [portfolio, setPortfolio] = useState({
    linkedin: "",
    twitter: "",
    behance: "",
    instagram: "",
    facebook: "",
  });
  const [interview, setInterview] = useState(false); // Checkbox state for interview availability

  const handleSignUp = (e) => {
    e.preventDefault();
    // Logic for signing up goes here
    console.log({
      email,
      phone,
      password,
      confirmPassword,
      role,
      portfolio,
      interview,
    });
    // Redirect to home page after signing up
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="container max-w-md mx-auto py-16">
        {/* Back to Home Button */}
        <button
          className="mb-6 text-sm font-medium text-cyan-500 hover:underline"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>

        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSignUp}>
          {/* Role selection */}
          <div className="mb-6 flex justify-center space-x-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-full ${role === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setRole("user")}
            >
              User
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-full ${role === "creative" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setRole("creative")}
            >
              Creative
            </button>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="email">
              Email
            </label>
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
            <label className="block mb-2 font-bold" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Portfolio section for Creatives */}
          {role === "creative" && (
            <>
              <div className="mb-6">
                <label className="block mb-2 font-bold">Portfolio Links</label>
                <input
                  type="url"
                  placeholder="LinkedIn"
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
                  value={portfolio.linkedin}
                  onChange={(e) => setPortfolio({ ...portfolio, linkedin: e.target.value })}
                  required
                />
                <input
                  type="url"
                  placeholder="Twitter"
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
                  value={portfolio.twitter}
                  onChange={(e) => setPortfolio({ ...portfolio, twitter: e.target.value })}
                  required
                />
                <input
                  type="url"
                  placeholder="Behance (Optional)"
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
                  value={portfolio.behance}
                  onChange={(e) => setPortfolio({ ...portfolio, behance: e.target.value })}
                />
                <input
                  type="url"
                  placeholder="Instagram"
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
                  value={portfolio.instagram}
                  onChange={(e) => setPortfolio({ ...portfolio, instagram: e.target.value })}
                  required
                />
                <input
                  type="url"
                  placeholder="Facebook"
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
                  value={portfolio.facebook}
                  onChange={(e) => setPortfolio({ ...portfolio, facebook: e.target.value })}
                  required
                />
              </div>

              {/* Interview availability */}
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="interview"
                  checked={interview}
                  onChange={() => setInterview(!interview)}
                  className="mr-2"
                />
                <label className="text-gray-300" htmlFor="interview">
                  Available for a brief interview
                </label>
              </div>

              {/* Note for Creatives */}
              <p className="text-sm text-red-400">
                Please ensure your portfolio links are correct. Mediava will not reach back to you for an interview if incorrect details are provided.
              </p>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 font-bold rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button className="text-cyan-500 hover:underline" onClick={() => router.push("/signin")}>
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
