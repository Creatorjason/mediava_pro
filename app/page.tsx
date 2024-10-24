// "use client";

// import { useState, useCallback, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useRouter } from "next/navigation";
// import { faHome, faUser, faFire } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import { loadFull } from "tsparticles";
// import { tsParticles } from "tsparticles-engine";
// import { Fugaz_One } from "next/font/google";
// import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

// const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

// export default function Component() {
//   interface Service {
//     title: string;
//     subservices?: string[];
//     description: string;
//     image: string;
//   }
  
//   const services: Service[] = [
//     {
//       title: "Remote Edit",
//       subservices: ["Image", "Video", "Audio"],
//       description:
//         "Edit your media remotely with our professional editors, ensuring high-quality output without the need for physical meetings.",
//       image: "/remote_edit.jpg",
//     },
//     {
//       title: "Remote Video Directing and Production",
//       description:
//         "Direct and produce your video projects remotely with our expert guidance, ensuring a seamless production experience from anywhere.",
//       image: "/remote_directing.jpg",
//     },
//     {
//       title: "On-Demand Media Shooting",
//       description:
//         "We bring our high-quality equipment to your location to record media with professional precision and creativity.",
//       image: "/ondemand_media.jpg",
//     },
//     {
//       title: "Content Idea Generation and Management",
//       description:
//         "Let our team help you brainstorm and manage your content ideas, turning your visions into actionable plans.",
//       image: "/content_idea_gen.jpg",
//     },
//     {
//       title: "Mobile Photography and Cinematography",
//       description:
//         "Capture stunning images and videos with our mobile photography and cinematography services, perfect for any event.",
//       image: "/mobile_cinema.jpg",
//     },
//   ];
//   const [activeTab, setActiveTab] = useState("home");
//   const router = useRouter();

//   const particlesInit = useCallback(async (engine: any) => {
//     await loadFull(engine);
//   }, []);

//   useEffect(() => {
//     const loadParticles = async () => {
//       await tsParticles.load("tsparticles", {
//         fullScreen: { enable: true },
//         background: { color: { value: "transparent" } },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onClick: { enable: true, mode: "push" },
//             onHover: { enable: true, mode: "repulse" },
//             resize: true,
//           },
//           modes: {
//             push: { quantity: 4 },
//             repulse: { distance: 200, duration: 0.4 },
//           },
//         },
//         particles: {
//           color: { value: "#ffffff" },
//           links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: { default: "bounce" },
//             random: false,
//             speed: 2,
//             straight: false,
//           },
//           number: {
//             density: { enable: true, area: 800 },
//             value: 80,
//           },
//           opacity: { value: 0.5 },
//           shape: { type: "circle" },
//           size: { value: { min: 1, max: 5 } },
//         },
//         detectRetina: true,
//       });
//     };

//     loadParticles();
//   }, [particlesInit]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
//       <div id="tsparticles" className="absolute inset-0 z-0"></div>

//       {/* Adjusted header with larger Mediava text and Fugaz font */}
//       <header className="relative h-screen flex items-center justify-center overflow-hidden">
//         <Image
//           src="/background_mediava.jpg"
//           alt="Mediava Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="absolute z-0"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
//         <div className="container mx-auto px-4 text-center relative z-20">
//           <h1
//             className={`text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-4 animate-blink ${fugaz.className}`}
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
//               Creplanos
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-300 mb-8">
//             Create, Edit and Manage Content like a Media Boss
//           </p>

//           {/* Stacking Login and Create Account buttons */}
//           <div className="space-y-2 flex flex-col items-center">
//             <button
//               className="w-80 px-6 py-3 text-lg font-medium rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
//               onClick={() => router.push("/signin")}
//             >
//               Login
//             </button>

//             <button
//               className="w-80 px-6 py-3 text-lg font-medium rounded-full border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
//               onClick={() => router.push("/signup")}
//             >
//               Create Account
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Services Section */}
//       <div className="container mx-auto px-4 py-16">
//         <section className="py-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
//               Our Services
//             </span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service: Service, index: number) => (
//               <div
//                 key={index}
//                 className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-2xl"
//               >
//                 {index !== 0 && (
//                   <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
//                     Coming Soon
//                   </div>
//                 )}
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   width={400}
//                   height={200}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                   {service.subservices && (
//                     <p className="text-sm text-cyan-400 mb-2">
//                       {service.subservices.join(", ")}
//                     </p>
//                   )}
//                   <p className="text-gray-300">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* Bottom Navigation */}
//             <BottomNavBar />

//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
//         html {
//           scroll-behavior: smooth;
//         }
//         body {
//           font-family: "Poppins", sans-serif;
//         }
//         .animate-blink {
//           animation: blink 1.5s infinite;
//         }
//         @keyframes blink {
//           0% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.5;
//           }
//           100% {
//             opacity: 1;
//           }
//         }
//         .hover\:scale-103:hover {
//           transform: scale(1.03);
//         }
//         @media (max-width: 640px) {
//           h1 {
//             font-size: 2rem;
//           }
//           p {
//             font-size: 1.2rem;
//           }
//           button {
//             font-size: 1rem;
//             padding: 0.5rem 1rem;
//           }
//           nav {
//             padding: 0.5rem 0;
//           }
//           nav .text-2xl {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { faHome, faUser, faFire } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { Fugaz_One } from "next/font/google";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function Component() {
  interface Service {
    title: string;
    subservices?: string[];
    description: string;
    image: string;
  }

  const services: Service[] = [
    {
      title: "Remote Edit",
      subservices: ["Image", "Video", "Audio"],
      description:
        "Polish your media remotely with our top-tier editors—no need for meetings, just quick, professional results.",
      image: "/remote_edit.jpg",
    },
    {
      title: "Remote Video Directing and Production",
      description:
        "Let our experts help direct and produce your videos remotely, ensuring seamless projects from concept to completion.",
      image: "/remote_directing.jpg",
    },
    {
      title: "On-Demand Media Shooting",
      description:
        "Our professional team brings the best equipment to you, capturing high-quality media at your location.",
      image: "/ondemand_media.jpg",
    },
    {
      title: "Content Idea Generation and Management",
      description:
        "Collaborate with our team to brainstorm and manage innovative content ideas, turning visions into results.",
      image: "/content_idea_gen.jpg",
    },
    {
      title: "Mobile Photography and Cinematography",
      description:
        "Get stunning visuals, with mobile photography and cinematography services tailored to your needs, wherever you are.",
      image: "/mobile_cinema.jpg",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "Creplanos helped bring my video project to life in record time. Seamless remote experience!",
    },
    {
      name: "Jane Smith",
      feedback: "Their remote design services transformed my brand's visuals—couldn’t be happier.",
    },
  ];

  const [activeTab, setActiveTab] = useState("home");
  const router = useRouter();

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
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      });
    };

    loadParticles();
  }, [particlesInit]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <div id="tsparticles" className="absolute inset-0 z-0"></div>

      {/* Updated Hero Section */}
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
          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-4 animate-blink ${fugaz.className}`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Creplanos
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-300 mb-8">
            Bringing your ideas to life—remotely, efficiently, and professionally.
          </p>

          <div className="space-y-2 flex flex-col items-center">
            <button
              className="w-80 px-6 py-3 text-lg font-medium rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
              onClick={() => router.push("/signin")}
            >
              Get Started
            </button>

            <button
              className="w-80 px-6 py-3 text-lg font-medium rounded-full border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
              onClick={() => router.push("/signup")}
            >
              Join Our Community
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Our Professional Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-2xl"
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
                      {service.subservices.join(", ")}
                    </p>
                  )}
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex justify-center">
          <video controls className="w-full max-w-4xl rounded-lg shadow-lg">
            <source src="/how-it-works.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="container mx-auto px-4 py-12 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-300 mb-4">{testimonial.feedback}</p>
              <p className="font-bold text-cyan-500">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* Bottom Navigation */}
      <BottomNavBar />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Poppins", sans-serif;
        }
        .animate-blink {
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        .hover\\:scale-103:hover {
          transform: scale(1.03);
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1.2rem}`}</style>
             </div>
  );
}
            
//   To improve the landing page, here are some potential adjustments:

// 1. **Enhanced Hero Section**: Use dynamic backgrounds, subtle animations, or video loops to give a more professional look. Keep the call-to-action buttons prominent with stronger verbiage, such as "Get Started Now" or "Join Our Creative Hub."

// 2. **Add Visual Hierarchy**: Use more white space between sections, making it easier for visitors to digest the content and creating a more sophisticated appearance.

// 3. **Testimonials with Images**: Add client images or logos in the testimonial section to increase credibility and relatability.

// 4. **Interactive Features**: Incorporate slight hover animations or scroll-triggered effects to engage users and keep them interested while exploring the services.

// 5. **Improve Call to Actions**: Ensure every section has a clear, enticing call to action, particularly on the services.

