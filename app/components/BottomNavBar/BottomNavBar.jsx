"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFire, faWallet, faClockRotateLeft, faObjectGroup } from "@fortawesome/free-solid-svg-icons"; // Added wallet icon
import { useRouter, usePathname } from "next/navigation"; // Use usePathname to check the current route
import { useState, useEffect } from "react";

const BottomNavBar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get current path
  const [activeTab, setActiveTab] = useState(""); // Empty initial value

  const navItems = [
    { name: "Home", icon: faHome, path: "/" },
    { name: "Services", icon: faFire, path: "/tool" },
    { name: "Dashboard", icon: faObjectGroup, path: "/dashboard" },
    { name: "Wallet", icon: faWallet, path: "/wallet" },
    { name: "Revist", icon: faClockRotateLeft, path: "/revist" },
  ];

  // Update activeTab based on current pathname
  useEffect(() => {
    const currentRoute = pathname.split("/")[1] || "home";
    setActiveTab(currentRoute.toLowerCase());
  }, [pathname]);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-cyan-500 py-2">
        <ul className="flex justify-around items-center">
          {navItems.map((item) => (
            <li key={item.name} className="text-center">
              <button
                onClick={() => {
                  setActiveTab(item.name.toLowerCase());
                  router.push(item.path);
                }}
                className={`flex flex-col items-center p-2 ${activeTab === item.name.toLowerCase()
                  ? "text-cyan-500"
                  : "text-gray-400"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-2xl mb-1" />
                <span className="text-xs">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BottomNavBar;
