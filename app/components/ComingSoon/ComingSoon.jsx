"use client"

import { useState, useEffect } from 'react';

export default function ComingSoon() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white font-sans p-4">
        <div className="max-w-md text-center space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Coming Soon
          </h1>
          <p className="text-gray-400">
            We're currently working on this feature to enhance your experience. You'll be notified once it's ready!
          </p>
  
          <div className="flex justify-center space-x-4 mt-8">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              {/* Replace with actual icons or icon components */}
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
  