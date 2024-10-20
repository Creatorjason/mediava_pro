"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation' // Correct import for app directory

const SignUp = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')  // Added phone state
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    // Logic for signing up goes here
    console.log({ email, phone, password, confirmPassword })  // Added phone in the log
    // Redirect to home page after signing up
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="container max-w-md mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSignUp}>
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

          {/* Phone number input field */}
          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="phone">Phone Number</label>
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
          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <button className="text-cyan-500 hover:underline" onClick={() => router.push('/signin')}>
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignUp
