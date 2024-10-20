"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation' // Correct import for app directory

const VerifyEmail = () => {
  const router = useRouter()
  const [verificationCode, setVerificationCode] = useState('')

  const handleVerification = (e) => {
    e.preventDefault()
    // Logic for verifying the code goes here
    console.log({ verificationCode })
    // Redirect to the dashboard or another page after successful verification
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="container max-w-md mx-auto py-16 relative">

        {/* Back button positioned in the top-left corner with padding adjustments */}
        {/* <button
          className="absolute top-6 left-6 px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
          onClick={() => router.back()}
        >
          Back
        </button> */}

        <h1 className="text-3xl font-bold mb-8 text-center">Verify Your Email</h1>
        <p className="text-center mb-4 text-gray-400">
          Please enter the verification code sent to your email.
        </p>

        <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleVerification}>
          <div className="mb-6">
            <label className="block mb-2 font-bold" htmlFor="verificationCode">Verification Code</label>
            <input
              type="text"
              id="verificationCode"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform"
          >
            Verify Email
          </button>
        </form>

        <p className="mt-4 text-center">
          Didn't receive a code?{' '}
          <button className="text-cyan-500 hover:underline" onClick={() => console.log('Resend Code')}>
            Resend Code
          </button>
        </p>
      </div>
    </div>
  )
}

export default VerifyEmail;
