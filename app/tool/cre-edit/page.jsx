// "use client"

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// const Page = () => {
//   const [mediaType, setMediaType] = useState('video'); // default to 'video'
//   const [mediaFile, setMediaFile] = useState(null)
//   const [details, setDetails] = useState('')
//   const [urgency, setUrgency] = useState('normal')
//   const [voiceNote, setVoiceNote] = useState(null)
//   const router = useRouter()

//   const handleMediaChange = (e) => {
//     setMediaFile(e.target.files[0])
//   }

//   const handleVoiceNoteChange = (e) => {
//     setVoiceNote(e.target.files[0])
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Process form submission (send to API, etc.)
//     console.log({ mediaFile, details, urgency, voiceNote, mediaType })
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
//       <div className="container max-w-lg lg:max-w-2xl mx-auto py-16">

//         {/* Back Button */}
//         <div className="mb-4">
//           <button 
//             className="flex items-center text-gray-300 hover:text-white" 
//             onClick={() => router.back()}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
//             <span>Back</span>
//           </button>
//         </div>

//         {/* Form */}
//         <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cre Edit 🎥</h1>
//         <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>

//           {/* Media Type Selector */}
//           <div className="flex justify-center mb-6">
//             <button 
//               type="button" 
//               className={`px-4 py-2 rounded-l-full ${mediaType === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`} 
//               onClick={() => setMediaType('video')}
//             >
//               Video
//             </button>
//             <button 
//               type="button" 
//               className={`px-4 py-2 ${mediaType === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`} 
//               onClick={() => setMediaType('image')}
//             >
//               Image
//             </button>
//             <button 
//               type="button" 
//               className={`px-4 py-2 rounded-r-full ${mediaType === 'audio' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`} 
//               onClick={() => setMediaType('audio')}
//             >
//               Audio
//             </button>
//           </div>

//           {/* Media Upload */}
//           <div className="mb-6">
//             <label className="block mb-2 font-bold text-base" htmlFor="mediaFile">Upload {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}</label>
//             <input
//               type="file"
//               accept={mediaType === 'video' ? 'video/*' : mediaType === 'image' ? 'image/*' : 'audio/*'}
//               id="mediaFile"
//               onChange={handleMediaChange}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//               required
//             />
//           </div>

//           {/* Details Input */}
//           <div className="mb-6">
//             <label className="block mb-2 font-bold text-base" htmlFor="details">What would you like done?</label>
//             <textarea
//               id="details"
//               className="w-full p-3 rounded bg-gray-700 text-white"
//               value={details}
//               onChange={(e) => setDetails(e.target.value)}
//               placeholder="Describe the edits you want..."
//               required
//             ></textarea>
//           </div>

//           {/* Voice Note Upload */}
//           <div className="mb-6">
//             <label className="block mb-2 font-bold text-base" htmlFor="voiceNote">Upload Voice Note (Optional)</label>
//             <input
//               type="file"
//               accept="audio/*"
//               id="voiceNote"
//               onChange={handleVoiceNoteChange}
//               className="w-full p-2 rounded bg-gray-700 text-white"
//             />
//           </div>

//           {/* Urgency Selector */}
//           <div className="mb-6">
//             <label className="block mb-2 font-bold text-base">Urgency</label>
//             <select
//               value={urgency}
//               onChange={(e) => setUrgency(e.target.value)}
//               className="w-full p-3 rounded bg-gray-700 text-white"
//             >
//               <option value="normal">Normal</option>
//               <option value="urgent">Urgent (+ Cost)</option>
//             </select>
//             {urgency === 'urgent' && (
//               <p className="text-sm text-red-500 mt-2">
//                 Urgency will increase the cost of editing.
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 font-bold rounded bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform"
//           >
//             Edit My {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileVideo, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import BottomNavBar from "@/app/components/BottomNavBar/BottomNavBar";
// import Stats from "@/app/components/Stats/Stats";
// import Sidebar from "@/app/components/Sidebar/Sidebar";
// import EditForm from "@/app/components/EditForm/EditForm";
// import Tops from "@/app/components/Tops/Tops";
// // Placeholder data
// const recentEdits = [
//   "I want to edit a video for cats",
//   "Last video of John Wick needs a review",
//   "Make an edit on memo",
//   "Edit fire",
// ];
// const stats = [
//   { label: "Editors", value: "20+" },
//   { label: "CB Spent", value: "15k" },
//   { label: "CB Saved", value: "7k" },
//   { label: "Completed Edits", value: "6k" },
// ];

// // Sample data for Top Edits
// const topEdits = [
//   {
//     title: "Funny Cats",
//     timeTaken: "10 mins",
//     by: "Creplanos",
//     views: "7.9K",
//     timeAgo: "1 day ago",
//     thumbnail: "/path/to/thumbnail.jpg", // Use a valid image path
//   },
//   {
//     title: "Sleeping Dragon",
//     timeTaken: "10 mins",
//     by: "Creplanos",
//     views: "7.9K",
//     timeAgo: "1 day ago",
//     thumbnail: "/path/to/thumbnail.jpg", // Use a valid image path
//   },
//   {
//     title: "How to build a startup",
//     timeTaken: "10 mins",
//     by: "Creplanos",
//     views: "7.9K",
//     timeAgo: "1 day ago",
//     thumbnail: "/path/to/thumbnail.jpg", // Use a valid image path
//   },
//   {
//     title: "The art of problem solving",
//     timeTaken: "10 mins",
//     by: "Creplanos",
//     views: "7.9K",
//     timeAgo: "1 day ago",
//     thumbnail: "/path/to/thumbnail.jpg", // Use a valid image path
//   },
//   {
//     title: "HolySpirit, the Best",
//     timeTaken: "10 mins",
//     by: "Creplanos",
//     views: "7.9K",
//     timeAgo: "1 day ago",
//     thumbnail: "/path/to/thumbnail.jpg", // Use a valid image path
//   },
//   // Add more items as needed
// ];

// export default function CreEditPage() {
//   const [selectedEdit, setSelectedEdit] = useState(null);
//   const [editDetails, setEditDetails] = useState({
//     videoFile: null,
//     description: "",
//     voiceNote: null,
//     urgency: "Normal",
//   });
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setEditDetails({ ...editDetails, [e.target.name]: file });
//   };

//   const handleTextChange = (e) => {
//     setEditDetails({ ...editDetails, description: e.target.value });
//   };

//   const handleUrgencyChange = (e) => {
//     setEditDetails({ ...editDetails, urgency: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(editDetails);
//   };

//   const [editType, setEditType] = useState("Video"); // Toggle state

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans flex">
//         {/* Sidebar component with responsive visibility */}
//         <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} edits={recentEdits} setSelectedEdit={setSelectedEdit} />

//         <main className="flex-grow p-8 lg:ml-64">
//           {/* Mobile Hamburger Icon */}
//           <button className="lg:hidden mb-6" onClick={() => setSidebarOpen(true)}>
//             <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
//           </button>

//           {/* Page Title */}
//           <div className="text-center mb-8">
//             <h2 className="text-4xl font-bold flex items-center justify-center">
//               Cre Edit <FontAwesomeIcon icon={faFileVideo} className="ml-3 text-cyan-400" />
//             </h2>
//           </div>

//           {/* Edit Form */}
//           <EditForm type="Video" showCategory={true} showOptions={true} />

//           {/* Stats Section */}
//           <Stats stats={stats} />

//           {/* Top Edits Section */}
//           <Tops edits={topEdits} />
//         </main>
//       </div>

//       {/* Bottom Navigation Bar */}
//       <BottomNavBar />
//     </>
//     );
// }


"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo, faBars } from "@fortawesome/free-solid-svg-icons";
import BottomNavBar from "@/app/components/BottomNavBar/BottomNavBar";
import Stats from "@/app/components/Stats/Stats";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import EditForm from "@/app/components/EditForm/EditForm";
import Tops from "@/app/components/Tops/Tops";


// Placeholder data
const recentEdits = [
  "I want to edit a video for cats",
  "Last video of John Wick needs a review",
  "Make an edit on memo",
  "Edit fire",
];
const stats = [
  { label: "Editors", value: "20+" },
  { label: "CB Spent", value: "15k" },
  { label: "CB Saved", value: "7k" },
  { label: "Completed Edits", value: "6k" },
];
const topEdits = [
  { title: "Funny Cats", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/funnycats.jpg", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { title: "Sleeping Dragon", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/sleepingdragon.jpg" },
  { title: "How to build a startup", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/buildstartup.jpg" },
  { title: "The art of problem solving", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/artsolve.jpg" },
  { title: "HolySpirit, the Best", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/HolySpirit.jpg" },
];

export default function CreEditPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex overflow-y-auto lg:pb-0">
      {/* Sidebar for recent edits */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        edits={recentEdits}
        className="lg:translate-x-0 lg:relative"
      />

      {/* Main content */}
      <main className="flex-grow p-8 max-w-4xl mx-auto lg:ml-64">
        {/* Hamburger icon for mobile */}
        <button
          className="lg:hidden mb-6"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold flex items-center justify-center">
            Cre Edit <FontAwesomeIcon icon={faFileVideo} className="ml-3 text-cyan-400" />
          </h2>
        </div>

        {/* Edit Form */}
        <EditForm type="Video" showCategory={true} showOptions={true} />

        {/* Stats Section */}
        <div className="mt-8">
          <Stats stats={stats} />
        </div>

        {/* Top Edits Section */}
        <div className="mt-8">
          <Tops
          header={"Top Edits"} 
          edits={topEdits} />
        </div>
        <br />
        <br />
      </main>

      {/* Bottom Navigation Bar only for mobile */}
      <div className="fixed bottom-0 left-0 w-full z-50 ">
        <BottomNavBar />
      </div>
    </div>
  );
}
