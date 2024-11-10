"use client";

import React from 'react';
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFire } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';

const tools = [
  {
    title: 'creEdit',
    description: "Transform your raw video, images, or audio into professional masterpieces. Whether it's a quick touch-up or a full-scale edit, we handle it all remotely, so you can focus on what matters.",
    image: '/creedit.jpg',
    link: '/tool/cre-edit'
  },
  {
    title: 'creUI',
    description: "Design beautiful and intuitive user interfaces with our remote UI experts. Whether it's a sleek app design or a dynamic web interface, we bring your ideas to life while you focus on the bigger picture—without leaving your desk.",
    image: '/creui.jpg',
    link: '/tool/cre-ui'
  },
  {
    title: "creContent",
    description: "Stuck for ideas? We’ve got you covered! Collaborate with our content strategists to spark new ideas and streamline your content creation process—remotely, efficiently, and brilliantly.",
    image: "/crecontent.jpg",
    link: '/tool/cre-content'
  },
  {
    title: "creAudio",
    description: "Need a catchy jingle, voiceover, or that perfect sound mix? With our top-notch audio services, you'll get high-quality audio projects delivered remotely and always on time.",
    image: "/creaudio.jpg",
    link: "/tool/cre-audio"
  },
  {
    title: "creInShots",
    description: "Get studio-quality shots from anywhere. Our mobile photography and cinematography experts will help you capture every moment, as if you had a full production crew right at home.",
    image: "/creshots.jpg",
    link: "/tool/cre-shots"
  },
  {
    title: "creArt",
    description: "Turn your artistic ideas into reality! Whether it's a painting, sculpture, or a digital masterpiece, we offer remote services to help bring your creations to life.",
    image: "/creart.jpg",
    link: "/tool/cre-art"
  },
  {
    title: "creBrand",
    description: "Elevate your brand effortlessly! From logo design to full-fledged brand strategies, our remote branding service ensures your business stands out—professionally, affordably, and always on time.",
    image: "/creBrand.jpg",
    link: "/tool/cre-brand"
  },
  {
    title: "cre3D",
    description: "Bring your 3D visions to life with our advanced 3D modeling and rendering services. From product designs to architectural visualizations, we create immersive and detailed 3D experiences—remotely and professionally.",
    image: "/cre3d.jpg",
    link: "/tool/cre-3d"
  },
  {
    title: "creDev",
    description: "Our expert developers are ready to bring your software projects to life, whether it’s web, mobile, or beyond. Your ideas, professionally coded and delivered on time.",
    image: "/dev.jpg",
    link: "/tool/cre-dev"
  },
  {
    title: "creCatering",
    description: "Indulge in seamless event catering with our gourmet service, tailored to bring exquisite dishes and a memorable dining experience to your table. From intimate gatherings to large events, we ensure top-notch presentation and flavors, delivered with elegance and precision.",
    image: "/catering.jpg",
    link: "/tool/cre-catering"
  },
  {
    title: "crePrint",
    description: "Bring your designs to life with our professional printing service. From high-quality documents to specialized 3D prints, we offer precision and quality you can rely on to meet all your personal or business printing needs.",
    image: "/print.jpg",
    link: "/tool/cre-print",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "creRegistration",
    description: "Streamline your administrative tasks with creRegistration. We offer efficient, organized registration services to handle forms, documentation, and processes smoothly, ensuring professionalism and reliability for every requirement.",
    image: "/reg.jpg",
    link: "/tool/cre-registration",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "creLaundry",
    description: "Enjoy pristine, freshly laundered clothes with creLaundry. Our professional laundry service takes care of everything from washing to folding, providing quality and convenience, so you can focus on what matters most.",
    image: "/laundry.jpg",
    link: "/tool/cre-laundry",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "creRepairs",
    description: "When things break, creRepairs is here to help. Our skilled technicians offer repair services for electronics, household items, and more, ensuring everything works smoothly and is built to last.",
    image: "/repairs.jpg",
    link: "/tool/cre-repairs",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "creTailoring",
    description: "Experience custom tailoring with creTailoring. Whether you need alterations or bespoke designs, our expert tailors bring your fashion ideas to life with precision, style, and perfect fits for every occasion.",
    image: "/tailor.jpg",
    link: "/tool/cre-tailoring",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "crePhotography",
    description: "Capture every moment beautifully with crePhotography. Our professional photographers and advanced editing services bring out the best in your photos, whether for personal portraits, events, or commercial projects.",
    image: "/photo.jpg",
    link: "/tool/cre-photography",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "creEvents",
    description: "Make your events unforgettable with creEvents. From planning to decor, we handle every detail to create a seamless, stylish, and enjoyable experience for your guests, tailored to your vision.",
    image: "/events.jpg",
    link: "/tool/cre-events",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "creGardens",
    description: "Transform your outdoor space with creGardens. Our gardening and landscaping experts design and maintain beautiful gardens, bringing greenery, flowers, and tranquility to your environment.",
    image: "/garden.jpg",
    link: "/tool/cre-gardens",
    comingSoon: true // Add comingSoon property here
  },
  {
    title: "creBeauty",
    description: "Enhance your beauty with creBeauty. From skincare consultations to makeup artistry, our experts help you achieve your desired look in a luxurious, comfortable setting.",
    image: "/beauty.jpg",
    link: "/tool/cre-beauty",
    comingSoon: true
  },
  {
    title: "creRide",
    description: "Get where you need to go with creRide. Our professional drivers offer safe, reliable, and comfortable transportation, whether for daily commutes or special events.",
    image: "/ride.jpg",
    link: "/tool/cre-ride",
    comingSoon: true
  },
  {
    title: "creDelivery",
    description: "Deliver anything, anytime with creDelivery. Our fast and dependable delivery service ensures your packages arrive securely and on time, whether across town or nationwide.",
    image: "/delivery.jpg",
    link: "/tool/cre-delivery",
    comingSoon: true
  },
  {
    title: "creHealth",
    description: "Take charge of your health with creHealth. Our healthcare professionals offer personalized wellness consultations, check-ups, and health monitoring to keep you at your best.",
    image: "/health.jpg",
    link: "/tool/cre-health",
    comingSoon: true
  },
  {
    title: "creApartments",
    description: "Find your perfect living space with creApartments. We offer high-quality apartments with modern amenities, ideal for comfortable and stylish living in prime locations.",
    image: "/apartments.jpg",
    link: "/tool/cre-apartments",
    comingSoon: true
  },
  {
    title: "creSecurity",
    description: "Protect your assets with creSecurity. Our professional security services provide you with peace of mind, offering trained personnel and top-notch safety solutions.",
    image: "/securities.jpg",
    link: "/tool/cre-security",
    comingSoon: true
  },
  {
    title: "creTutors",
    description: "Achieve academic success with creTutors. Our skilled tutors provide personalized, effective lessons for students of all ages, helping you reach your educational goals.",
    image: "/tutors.jpg",
    link: "/tool/cre-tutors",
    comingSoon: true
  },
  
];

const Page = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('tools');

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
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-4"
              >
                <Image
                  src={tool.image}
                  alt={tool.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                {tool.comingSoon && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-xs text-black font-bold px-2 py-1 rounded">
                    Coming Soon
                  </span>
                )}
                <div className="p-4 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-fuchsia-400">{tool.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4">{tool.description}</p>
                  <button
                    onClick={() => !tool.comingSoon && router.push(tool.link)}
                    className={`px-4 w-full py-2 rounded-md ${tool.comingSoon ? 'bg-gray-500 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600'
                      } text-white transition`}
                    disabled={tool.comingSoon}
                  >
                    {tool.comingSoon ? "Coming Soon" : "Use Service"}
                  </button>
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
  );
};

export default Page;
