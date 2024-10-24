"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Page = () => {
  const [mediaType, setMediaType] = useState('video'); // default to 'video'
  const [mediaFile, setMediaFile] = useState(null)
  const [details, setDetails] = useState('')
  const [urgency, setUrgency] = useState('normal')
  const [voiceNote, setVoiceNote] = useState(null)
  const router = useRouter()

  const handleMediaChange = (e) => {
    setMediaFile(e.target.files[0])
  }

  const handleVoiceNoteChange = (e) => {
    setVoiceNote(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process form submission (send to API, etc.)
    console.log({ mediaFile, details, urgency, voiceNote, mediaType })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="container max-w-lg lg:max-w-2xl mx-auto py-16">
        
        {/* Back Button */}
        <div className="mb-4">
          <button 
            className="flex items-center text-gray-300 hover:text-white" 
            onClick={() => router.back()}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span>Back</span>
          </button>
        </div>

        {/* Form */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cre Edit 🎥</h1>
        <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          
          {/* Media Type Selector */}
          <div className="flex justify-center mb-6">
            <button 
              type="button" 
              className={`px-4 py-2 rounded-l-full ${mediaType === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`} 
              onClick={() => setMediaType('video')}
            >
              Video
            </button>
            <button 
              type="button" 
              className={`px-4 py-2 ${mediaType === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`} 
              onClick={() => setMediaType('image')}
            >
              Image
            </button>
            <button 
              type="button" 
              className={`px-4 py-2 rounded-r-full ${mediaType === 'audio' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`} 
              onClick={() => setMediaType('audio')}
            >
              Audio
            </button>
          </div>

          {/* Media Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-bold text-base" htmlFor="mediaFile">Upload {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}</label>
            <input
              type="file"
              accept={mediaType === 'video' ? 'video/*' : mediaType === 'image' ? 'image/*' : 'audio/*'}
              id="mediaFile"
              onChange={handleMediaChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>

          {/* Details Input */}
          <div className="mb-6">
            <label className="block mb-2 font-bold text-base" htmlFor="details">What would you like done?</label>
            <textarea
              id="details"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe the edits you want..."
              required
            ></textarea>
          </div>

          {/* Voice Note Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-bold text-base" htmlFor="voiceNote">Upload Voice Note (Optional)</label>
            <input
              type="file"
              accept="audio/*"
              id="voiceNote"
              onChange={handleVoiceNoteChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Urgency Selector */}
          <div className="mb-6">
            <label className="block mb-2 font-bold text-base">Urgency</label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white"
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent (+ Cost)</option>
            </select>
            {urgency === 'urgent' && (
              <p className="text-sm text-red-500 mt-2">
                Urgency will increase the cost of editing.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-bold rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform"
          >
            Edit My {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page
