"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo, faBars, faGear } from "@fortawesome/free-solid-svg-icons";
import BottomNavBar from "@/app/components/BottomNavBar/BottomNavBar";
import Stats from "@/app/components/Stats/Stats";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import EditForm from "@/app/components/EditForm/EditForm";
import Tops from "@/app/components/Tops/Tops";

// every work generates a ringer code 
// which users use to reach us faster



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
    { label: "UI Designers", value: "10" },
    { label: "CB Spent", value: "15k" },
    { label: "CB Saved", value: "7k" },
    { label: "Completed Designs", value: "10" },
  ];
  const topEdits = [
    { title: "GranularX", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/gx_logo.jpg", url: "https://granularx.com" },
    { title: "Founder Zero", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/fz.png", url: "https://founderzero.me" },
    // { title: "How to build a startup", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/buildstartup.jpg" },
    // { title: "The art of problem solving", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/artsolve.jpg" },
    // { title: "HolySpirit, the Best", timeTaken: "10 mins", by: "Creplanos", views: "7.9K", timeAgo: "1 day ago", thumbnail: "/HolySpirit.jpg" },
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
            Cre UI <FontAwesomeIcon icon={faGear} className="ml-3 text-cyan-400" />
          </h2>
        </div>

        {/* Edit Form */}
        <EditForm

          title='Create User Interface'
          // type="Video"
          showVideoUpload={false}
          showCategory={true}
          showCategoryDropdown={true}
          categoryOptions={["Web app", "Mobile app", "Desktop app", "XD", "Game", "E-commerce", "Blog", "Other"]}
          showOptions={true}
          buttonText='Create UI'
          checkboxOptions={["Login page", "Sign up page", "Landing page", "Home page", "About page", "Contact page", "Privacy policy", "Terms of service", "Other"]}
        />

        {/* Stats Section */}
        <div className="mt-8">
          <Stats stats={stats} />
        </div>

        {/* Top Edits Section */}
        <div className="mt-8">

          <Tops
            header="Top User Interfaces"
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

export default page