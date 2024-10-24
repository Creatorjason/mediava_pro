"use client"

import React from 'react'
import styles from "./page.module.css"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faFire } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'

const tools = [
  {
    title: 'Editing Factory',
    description: 'Upload your video, image or audio and get professional edits done remotely.',
    image: '/edit-factory.jpg', // Adjust path accordingly
    link: '/tool/video-edit-factory'
  }
]

const Page = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('tools')

  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="container mx-auto py-12 px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
            Available Tools
          </h1>

          {/* Grid layout that adjusts based on screen size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer p-4"
                onClick={() => router.push(tool.link)}
              >
                <Image
                  src={tool.image} // Fixed from 'service.image' to 'tool.image'
                  alt={tool.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="p-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-fuchsia-400">{tool.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

          
          <BottomNavBar />
    </>
  )
}

export default Page