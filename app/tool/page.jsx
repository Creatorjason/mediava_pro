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
    title: 'creEdit',
    description: "Transform your raw video, images, or audio into professional masterpieces. Whether it's a quick touch-up or a full-scale edit, we handle it all remotely, so you can focus on what matters.",
    image: '/creedit.jpg', // Adjust path accordingly
    link: '/tool/cre-edit'
  },
  {
    title: 'creUI',
    description: "Design beautiful and intuitive user interfaces with our remote UI experts. Whether it's a sleek app design or a dynamic web interface, we bring your ideas to life while you focus on the bigger picture—without leaving your desk.",
    image: '/creui.jpg', // Adjust path accordingly
    link: '/tool/cre-ui'
  },
  {
    title: "creContent",
    description: "Stuck for ideas? We’ve got you covered! Collaborate with our content strategists to spark new ideas and streamline your content creation process—remotely, efficiently, and brilliantly.",
    image: "/crecontent.jpg", // Adjust path accordingly
    link: '/tool/cre-content'
  },
  {
    title: "creAudio",
    description: "Need a catchy jingle, voiceover, or that perfect sound mix? With our top-notch audio services, you'll get high-quality audio projects delivered remotely and always on time.",
    image: "/creaudio.jpg", // Adjust path accordingly
    link: "/tool/cre-audio"
  },
  {
    title: "creShots",
    description: "Get studio-quality shots from anywhere. Our mobile photography and cinematography experts will help you capture every moment, as if you had a full production crew right at home.",
    image: "/creshots.jpg", // Adjust path accordingly
    link: "/tool/cre-shots"
  },
  {
    title: "creArt",
    description: "Turn your artistic ideas into reality! Whether it's a painting, sculpture, or a digital masterpiece, we offer remote services to help bring your creations to life.",
    image: "/creart.jpg", // Adjust path accordingly
    link: "/tool/cre-art"
  },
  {
    title: "creBrand",
    description: "Elevate your brand effortlessly! From logo design to full-fledged brand strategies, our remote branding service ensures your business stands out—professionally, affordably, and always on time.",
    image: "/creBrand.jpg", // Adjust path accordingly
    link: "/tool/cre-brand"
  },
  {
    title: "cre3D",
    description: "Bring your 3D visions to life with our advanced 3D modeling and rendering services. From product designs to architectural visualizations, we create immersive and detailed 3D experiences—remotely and professionally.",
    image: "/cre3d.jpg", // Adjust path accordingly
    link: "/tool/cre-3d"
  },
  {
    title: "creDev",
    description: "Bring your 3D visions to life with our advanced 3D modeling and rendering services. From product designs to architectural visualizations, we create immersive and detailed 3D experiences—remotely and professionally.",
    image: "/cre3d.jpg", // Adjust path accordingly
    link: "/tool/cre-3d"
  },
  // create a functionality for users to link projects to each other
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
            Available Services
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

      <br />
      <br />
      <BottomNavBar />
    </>
  )
}

export default Page
