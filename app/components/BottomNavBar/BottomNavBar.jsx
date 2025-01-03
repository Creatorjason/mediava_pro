"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFire, faWallet, faClockRotateLeft, faObjectGroup, faEllipsisH, faChalkboard, faUserGroup, faBroadcastTower, faGear, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const BottomNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");
  const [isMoreOpen, setIsMoreOpen] = useState(false); // State to toggle "More" dropdown

  const navItems = [
    { name: "Home", icon: faHome, path: "/" },
    { name: "Services", icon: faFire, path: "/services" },
    { name: "Projects", icon: faObjectGroup, path: "/dashboard" },
    { name: "Wallet", icon: faWallet, path: "/wallet" },
    {
      name: "More", icon: faEllipsisH, path: "", subItems: [
        { name: "Revisit", icon: faClockRotateLeft, path: "/revisit" },
        { name: "Group", icon: faUserGroup, path: "/group" },
        {name: "Ringer", icon: faVolumeHigh, path: "/ringer"},
        { name: "Learn", icon: faChalkboard, path: "/learn" },
        {name : "API", icon: faBroadcastTower, path: "/api"},
        // {name: "Profile", icon: faUser, path: "/profile"},
        // { name: "Settings", icon: faGear, path: "/settings" },
      ]
    },
  ];

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const handleClick = (item) => {
    if (item.name === "More") {
      setIsMoreOpen(!isMoreOpen); // Toggle the "More" dropdown menu
    } else {
      setActiveTab(item.path);
      router.push(item.path);
      setIsMoreOpen(false); // Close "More" dropdown when navigating away
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-cyan-500 py-2">
      <ul className="flex justify-around items-center">
        {navItems.map((item) => (
          <li key={item.name} className="text-center relative">
            <button
              onClick={() => handleClick(item)}
              className={`flex flex-col items-center p-2 ${activeTab === item.path
                ? "text-cyan-500"
                : "text-gray-400"
                }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-2xl mb-1" />
              <span className="text-xs">{item.name}</span>
            </button>

            {/* Display "More" subItems as a drop-up menu */}
            {item.name === "More" && isMoreOpen && (
              <ul className="absolute bottom-12 mb-2 left-1 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-lg py-2 px-8 z-10">
                {item.subItems.map((subItem) => (
                  <li key={subItem.name} className="mb-2 last:mb-0">
                    <button
                      onClick={() => handleClick(subItem)}
                      className={`flex items-center ${activeTab === subItem.path ? "text-cyan-500" : "text-gray-400"
                        }`}
                    >
                      <FontAwesomeIcon icon={subItem.icon} className="mr-2" />
                      <span>{subItem.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavBar;
