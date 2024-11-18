"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo, faBars } from "@fortawesome/free-solid-svg-icons";
import BottomNavBar from "@/app/components/BottomNavBar/BottomNavBar";
import Stats from "@/app/components/Stats/Stats";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import EditForm from "@/app/components/EditForm/EditForm";
import Tops from "@/app/components/Tops/Tops";



const page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
  { title: "Funny Cats", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/funnycats.jpg" },
  { title: "Sleeping Dragon", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/sleepingdragon.jpg" },
  { title: "How to build a startup", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/buildstartup.jpg" },
  { title: "The art of problem solving", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/artsolve.jpg" },
  { title: "HolySpirit, the Best", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/HolySpirit.jpg" },
];
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
                Cre 3D <FontAwesomeIcon icon={faFileVideo} className="ml-3 text-cyan-400" />
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
              <Tops edits={topEdits} />
            </div>
            <br/>
            <br/>
          </main>
    
          {/* Bottom Navigation Bar only for mobile */}
          <div className="fixed bottom-0 left-0 w-full z-50 ">
            <BottomNavBar />
          </div>
        </div>
      );
}

export default page