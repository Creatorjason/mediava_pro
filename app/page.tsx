'use client'

import { useState, useCallback, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTshirt, faStore, faTruck, faChartLine, faUser, faFire } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { loadFull } from "tsparticles"
import { tsParticles } from "tsparticles-engine"
import { Fugaz_One } from 'next/font/google'

// Load the Fugaz One font
const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

interface Service {
  title: string;
  subservices?: string[];
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Remote Edit',
    subservices: ['Image', 'Video', 'Audio'],
    description: 'Edit your media remotely with our professional editors, ensuring high-quality output without the need for physical meetings.',
    image: '/remote_edit.jpg'
  },
  {
    title: 'Remote Video Directing and Production',
    description: 'Direct and produce your video projects remotely with our expert guidance, ensuring a seamless production experience from anywhere.',
    image: '/remote_directing.jpg'
  },
  {
    title: 'On-Demand Media Shooting',
    description: 'We bring our high-quality equipment to your location to record media with professional precision and creativity.',
    image: '/ondemand_media.jpg'
  },
  {
    title: 'Content Idea Generation and Management',
    description: 'Let our team help you brainstorm and manage your content ideas, turning your visions into actionable plans.',
    image: '/content_idea_gen.jpg'
  },
  {
    title: 'Mobile Photography and Cinematography',
    description: 'Capture stunning images and videos with our mobile photography and cinematography services, perfect for any event.',
    image: '/mobile_cinema.jpg'
  }
]

export default function Component() {
  const [activeTab, setActiveTab] = useState('home')

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const loadParticles = async () => {
      await tsParticles.load("tsparticles", {
        fullScreen: { enable: true },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } }
        },
        detectRetina: true
      });
    };

    loadParticles();
  }, [particlesInit]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <div id="tsparticles" className="absolute inset-0 z-0"></div>

      {/* Adjusted header with larger Mediava text and Fugaz font */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/background_mediava.jpg"
          alt="Mediava Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">

          {/* Updated Mediava text with Fugaz One font */}
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-4 animate-blink ${fugaz.className}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Mediava
            </span>
          </h1>

          {/* Static subheader */}
          <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-300 mb-8">
            Create, Edit and Manage Content like a Media Boss
          </p>

          {/* CTA Button */}
          <button className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-all duration-300">
            Take me for a spin
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Our Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-2xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  {service.subservices && (
                    <p className="text-sm text-cyan-400 mb-2">
                      {service.subservices.join(', ')}
                    </p>
                  )}
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-cyan-500 py-2">
        <ul className="flex justify-around items-center">
          {[{ name: 'Home', icon: faHome }, { name: 'Tools', icon: faFire }, { name: 'Profile', icon: faUser }].map(item => (
            <li key={item.name} className="text-center">
              <button
                onClick={() => setActiveTab(item.name.toLowerCase())}
                className={`flex flex-col items-center p-2 ${activeTab === item.name.toLowerCase() ? 'text-cyan-500' : 'text-gray-400'}`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-2xl mb-1" />
                <span className="text-xs">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Poppins', sans-serif;
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .hover\:scale-103:hover {
          transform: scale(1.03);
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1.2rem;
          }
          button {
            font-size: 1rem;
            padding: 0.5rem 1rem;
          }
          nav {
            padding: 0.5rem 0;
          }
          nav .text-2xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
