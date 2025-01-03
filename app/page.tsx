// // "use client";

// // import { useState, useCallback, useEffect } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { useRouter } from "next/navigation";
// // import { faHome, faUser, faFire } from "@fortawesome/free-solid-svg-icons";
// // import Image from "next/image";
// // import { loadFull } from "tsparticles";
// // import { tsParticles } from "tsparticles-engine";
// // import { Fugaz_One } from "next/font/google";
// // import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

// // const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

// // export default function Component() {
// //   interface Service {
// //     title: string;
// //     subservices?: string[];
// //     description: string;
// //     image: string;
// //   }

// //   const services: Service[] = [
// //     {
// //       title: "Remote Edit",
// //       subservices: ["Image", "Video", "Audio"],
// //       description:
// //         "Edit your media remotely with our professional editors, ensuring high-quality output without the need for physical meetings.",
// //       image: "/remote_edit.jpg",
// //     },
// //     {
// //       title: "Remote Video Directing and Production",
// //       description:
// //         "Direct and produce your video projects remotely with our expert guidance, ensuring a seamless production experience from anywhere.",
// //       image: "/remote_directing.jpg",
// //     },
// //     {
// //       title: "On-Demand Media Shooting",
// //       description:
// //         "We bring our high-quality equipment to your location to record media with professional precision and creativity.",
// //       image: "/ondemand_media.jpg",
// //     },
// //     {
// //       title: "Content Idea Generation and Management",
// //       description:
// //         "Let our team help you brainstorm and manage your content ideas, turning your visions into actionable plans.",
// //       image: "/content_idea_gen.jpg",
// //     },
// //     {
// //       title: "Mobile Photography and Cinematography",
// //       description:
// //         "Capture stunning images and videos with our mobile photography and cinematography services, perfect for any event.",
// //       image: "/mobile_cinema.jpg",
// //     },
// //   ];
// //   const [activeTab, setActiveTab] = useState("home");
// //   const router = useRouter();

// //   const particlesInit = useCallback(async (engine: any) => {
// //     await loadFull(engine);
// //   }, []);

// //   useEffect(() => {
// //     const loadParticles = async () => {
// //       await tsParticles.load("tsparticles", {
// //         fullScreen: { enable: true },
// //         background: { color: { value: "transparent" } },
// //         fpsLimit: 60,
// //         interactivity: {
// //           events: {
// //             onClick: { enable: true, mode: "push" },
// //             onHover: { enable: true, mode: "repulse" },
// //             resize: true,
// //           },
// //           modes: {
// //             push: { quantity: 4 },
// //             repulse: { distance: 200, duration: 0.4 },
// //           },
// //         },
// //         particles: {
// //           color: { value: "#ffffff" },
// //           links: {
// //             color: "#ffffff",
// //             distance: 150,
// //             enable: true,
// //             opacity: 0.5,
// //             width: 1,
// //           },
// //           move: {
// //             direction: "none",
// //             enable: true,
// //             outModes: { default: "bounce" },
// //             random: false,
// //             speed: 2,
// //             straight: false,
// //           },
// //           number: {
// //             density: { enable: true, area: 800 },
// //             value: 80,
// //           },
// //           opacity: { value: 0.5 },
// //           shape: { type: "circle" },
// //           size: { value: { min: 1, max: 5 } },
// //         },
// //         detectRetina: true,
// //       });
// //     };

// //     loadParticles();
// //   }, [particlesInit]);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
// //       <div id="tsparticles" className="absolute inset-0 z-0"></div>

// //       {/* Adjusted header with larger Mediava text and Fugaz font */}
// //       <header className="relative h-screen flex items-center justify-center overflow-hidden">
// //         <Image
// //           src="/background_mediava.jpg"
// //           alt="Mediava Background"
// //           layout="fill"
// //           objectFit="cover"
// //           quality={100}
// //           className="absolute z-0"
// //         />
// //         <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
// //         <div className="container mx-auto px-4 text-center relative z-20">
// //           <h1
// //             className={`text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-4 animate-blink ${fugaz.className}`}
// //           >
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
// //               Creplanos
// //             </span>
// //           </h1>

// //           <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-300 mb-8">
// //             Create, Edit and Manage Content like a Media Boss
// //           </p>

// //           {/* Stacking Login and Create Account buttons */}
// //           <div className="space-y-2 flex flex-col items-center">
// //             <button
// //               className="w-80 px-6 py-3 text-lg font-medium rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
// //               onClick={() => router.push("/signin")}
// //             >
// //               Login
// //             </button>

// //             <button
// //               className="w-80 px-6 py-3 text-lg font-medium rounded-full border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
// //               onClick={() => router.push("/signup")}
// //             >
// //               Create Account
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Services Section */}
// //       <div className="container mx-auto px-4 py-16">
// //         <section className="py-16">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
// //               Our Services
// //             </span>
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((service: Service, index: number) => (
// //               <div
// //                 key={index}
// //                 className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-2xl"
// //               >
// //                 {index !== 0 && (
// //                   <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
// //                     Coming Soon
// //                   </div>
// //                 )}
// //                 <Image
// //                   src={service.image}
// //                   alt={service.title}
// //                   width={400}
// //                   height={200}
// //                   className="w-full h-48 object-cover"
// //                 />
// //                 <div className="p-6">
// //                   <h3 className="text-xl font-bold mb-2">{service.title}</h3>
// //                   {service.subservices && (
// //                     <p className="text-sm text-cyan-400 mb-2">
// //                       {service.subservices.join(", ")}
// //                     </p>
// //                   )}
// //                   <p className="text-gray-300">{service.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       </div>

// //       {/* Bottom Navigation */}
// //             <BottomNavBar />

// //       <style jsx global>{`
// //         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
// //         html {
// //           scroll-behavior: smooth;
// //         }
// //         body {
// //           font-family: "Poppins", sans-serif;
// //         }
// //         .animate-blink {
// //           animation: blink 1.5s infinite;
// //         }
// //         @keyframes blink {
// //           0% {
// //             opacity: 1;
// //           }
// //           50% {
// //             opacity: 0.5;
// //           }
// //           100% {
// //             opacity: 1;
// //           }
// //         }
// //         .hover\:scale-103:hover {
// //           transform: scale(1.03);
// //         }
// //         @media (max-width: 640px) {
// //           h1 {
// //             font-size: 2rem;
// //           }
// //           p {
// //             font-size: 1.2rem;
// //           }
// //           button {
// //             font-size: 1rem;
// //             padding: 0.5rem 1rem;
// //           }
// //           nav {
// //             padding: 0.5rem 0;
// //           }
// //           nav .text-2xl {
// //             font-size: 1.5rem;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

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

  const styles = {
    alternatingText: {
      backgroundColor: "#e500ff",
      padding: "5px 10px",
      borderRadius: "8px",
      color: "#ffffff",
      fontWeight: "bold",
      animation: "fadeInOut 1s ease-in-out infinite alternate",
    },
    tagline: {
      fontSize: "1.5em",
      color: "#e0e0e0",
      marginBottom: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center", // Center the text horizontally
      gap: "10px",
    },
  };
  const [currentWord, setCurrentWord] = useState("timely");
  const words = ["timely", "qualitatively", "quickly", "affordably"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const nextIndex = (words.indexOf(prevWord) + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          src="/background_new.jpg"
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

          {/* <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-300 mb-8">
            Bringing your ideas to life—remotely, efficiently, and professionally.
          </p> */}
          <center>

          <span style={styles.tagline as React.CSSProperties}>
           <i> Get it done</i> <span style={styles.alternatingText as React.CSSProperties}>{currentWord}</span>
          </span>
          </center>

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


      {/* What We Do Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          A versatile media platform designed for creators and distributors to produce, share, and distribute high-quality content to a broad audience. Creplanos offers tools for content creation, monetization options, and distribution channels, making it easier for creators to reach and engage their audiences with compelling media experiences.
        </p>
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
      <br />
      <br />
      <br />
      <br />

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

// //   To improve the landing page, here are some potential adjustments:

// // 1. **Enhanced Hero Section**: Use dynamic backgrounds, subtle animations, or video loops to give a more professional look. Keep the call-to-action buttons prominent with stronger verbiage, such as "Get Started Now" or "Join Our Creative Hub."

// // 2. **Add Visual Hierarchy**: Use more white space between sections, making it easier for visitors to digest the content and creating a more sophisticated appearance.

// // 3. **Testimonials with Images**: Add client images or logos in the testimonial section to increase credibility and relatability.

// // 4. **Interactive Features**: Incorporate slight hover animations or scroll-triggered effects to engage users and keep them interested while exploring the services.

// // 5. **Improve Call to Actions**: Ensure every section has a clear, enticing call to action, particularly on the services.
// "use client";
// import { useState, useEffect } from "react";
// import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

// export default function CreplanosLandingPage() {
//   const [currentWord, setCurrentWord] = useState("timely");
//   const words = ["timely", "qualitatively", "quickly", "affordably"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prevWord) => {
//         const nextIndex = (words.indexOf(prevWord) + 1) % words.length;
//         return words[nextIndex];
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={styles.body as React.CSSProperties}>
//       <div style={styles.overlay as React.CSSProperties}></div>
//       <h1 style={styles.title as React.CSSProperties}>Creplanos</h1>
//       <div style={styles.tagline as React.CSSProperties}>
//         Get it done <span style={styles.alternatingText as React.CSSProperties}>{currentWord}</span>
//       </div>

//       <div style={styles.inputContainer as React.CSSProperties}>
//         <input type="text" placeholder="What do you want done 🦾?" style={styles.input as React.CSSProperties} />
//         <button style={styles.searchButton as React.CSSProperties}>🔍</button>
//       </div>
// {/* 
//       <div style={styles.whatWeDo as React.CSSProperties}>
//         <h2 style={styles.whatWeDoTitle as React.CSSProperties}>What We Do</h2>
//         <p style={styles.whatWeDoText as React.CSSProperties}>
//           A versatile media platform designed for creators and distributors to produce, share, and distribute high-quality content to a broad audience. Creplanos offers tools for content creation, monetization options, and distribution channels, making it easier for creators to reach and engage their audiences with compelling media experiences.
//         </p>
//       </div> */}

//       {/* <div style={styles.footer as React.CSSProperties}>
//         <div style={styles.footerLink as React.CSSProperties}>Create image</div>
//         <div style={styles.footerLink as React.CSSProperties}>Surprise me</div>
//         <div style={styles.footerLink as React.CSSProperties}>Summarize text</div>
//         <div style={styles.footerLink as React.CSSProperties}>Help me write</div>
//       </div> */}
//       <br />
//       <br />
//        <br />
//        <br />

//        {/* Bottom Navigation */}
//        <BottomNavBar />
//     </div>
//   );
// }

// const styles = {
//   body: {
//     backgroundImage: "url('/bg_new.webp')", // Update this path if necessary
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "#ffffff",
//     fontFamily: "Arial, sans-serif",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     margin: 0,
//     padding: "20px",
//     boxSizing: "border-box",
//     textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)", // General text shadow for better readability
//   },
//   overlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
//     zIndex: -1,
//   },
//   title: {
//     fontSize: "4em", // Size for impact
//     marginBottom: "20px",
//     textAlign: "center",
//     // background: "linear-gradient(90deg, #00d4ff, #e500ff)", // Neon gradient
//     // WebkitBackgroundClip: "text",
//     // WebkitTextFillColor: "transparent",
//     // fontWeight: "bold",
//     // letterSpacing: "0.05em",
//     // textShadow: `
//     //   0 0 5px #00d4ff,   /* Primary glow */
//     //   0 0 10px #00d4ff,  /* Secondary glow */
//     //   0 0 20px #00d4ff,  /* Tertiary glow for neon effect */
//     //   0 0 40px #e500ff,  /* Accent color glow */
//     //   0 0 60px #e500ff,  /* Further spread */
//     //   0 0 80px #e500ff   /* Even more spread */
//     // `,
//   },
//   tagline: {
//     fontSize: "1.5em", // Increase font size for tagline
//     color: "#e0e0e0", // Lighten color for more contrast
//     marginBottom: "30px",
//     textAlign: "center",
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   alternatingText: {
//     backgroundColor: "#e500ff",
//     padding: "5px 10px",
//     borderRadius: "8px",
//     color: "#ffffff",
//     fontWeight: "bold",
//     animation: "fadeInOut 1s ease-in-out infinite alternate",
//   },
//   inputContainer: {
//     backgroundColor: "#2c2c2c",
//     borderRadius: "30px",
//     display: "flex",
//     alignItems: "center",
//     padding: "10px 15px",
//     width: "100%",
//     maxWidth: "500px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
//     transition: "box-shadow 0.3s",
//     marginBottom: "40px",
//   },
//   input: {
//     background: "none",
//     border: "none",
//     outline: "none",
//     color: "#ffffff",
//     fontSize: "1em",
//     width: "100%",
//     padding: "10px",
//   },
//   searchButton: {
//     background: "none",
//     border: "none",
//     color: "#00d4ff",
//     fontSize: "1.2em",
//     cursor: "pointer",
//   },
//   whatWeDo: {
//     maxWidth: "800px",
//     textAlign: "center",
//     marginTop: "30px",
//     padding: "20px",
//     backgroundColor: "#121212",
//     borderRadius: "15px",
//     boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
//   },
//   whatWeDoTitle: {
//     color: "#00d4ff",
//     fontSize: "1.8em",
//     marginBottom: "10px",
//     fontWeight: "bold",
//     textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)", // Shadow for better readability
//   },
//   whatWeDoText: {
//     color: "#e0e0e0", // Lightened color for more contrast
//     lineHeight: "1.6",
//     fontSize: "1em",
//   },
//   footer: {
//     marginTop: "30px",
//     display: "flex",
//     gap: "20px",
//     fontSize: "0.9em",
//     color: "#00d4ff",
//     justifyContent: "center",
//     textAlign: "center",
//     textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)", // Shadow for footer links
//   },
//   footerLink: {
//     cursor: "pointer",
//     transition: "color 0.3s",
//   },
// };



// // Additional global style for animation
// const globalStyle = `
// @keyframes fadeInOut {
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// }
// `;
