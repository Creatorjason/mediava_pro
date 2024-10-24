"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFire, faWallet } from "@fortawesome/free-solid-svg-icons"; // Added wallet icon
import { useRouter } from "next/navigation";
import { useState } from "react";

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showWalletModal, setShowWalletModal] = useState(false); // To show/hide the wallet modal
  const [wallet, setWallet] = useState(""); // To manage the wallet input value
  const router = useRouter();

  const navItems = [
    { name: "Home", icon: faHome, path: "/" },
    { name: "Tools", icon: faFire, path: "/tool" },
    { name: "Dashboard", icon: faUser, path: "/dashboard" },
    { name: "Wallet", icon: faWallet, path: "/wallet" },
  ];

  // Handle the submission of the wallet address
  const handleWalletSubmit = (e) => {
    e.preventDefault();
    console.log("Wallet Address:", wallet);
    setShowWalletModal(false); // Close modal after submission
  };

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

          {/* Added Wallet button */}
          {/* <li className="text-center">
            <button
              onClick={() => setShowWalletModal(true)} // Show the wallet modal
              className="flex flex-col items-center p-2 text-gray-400"
            >
              <FontAwesomeIcon icon={faWallet} className="text-2xl mb-1" />
              <span className="text-xs">Wallet</span>
            </button>
          </li> */}
        </ul>
      </nav>

      {/* Wallet Modal
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-white mb-4">Enter Wallet Address</h2>
            <form onSubmit={handleWalletSubmit}>
              <input
                type="text"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="Enter your wallet address"
                className="w-full p-3 rounded bg-gray-700 text-white mb-4"
                required
              />
              <button
                type="submit"
                className="w-full py-3 font-bold rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform"
              >
                Save Wallet
              </button>
            </form>
            <button
              onClick={() => setShowWalletModal(false)} // Close modal button
              className="mt-4 w-full py-3 font-bold rounded-full bg-gray-600 hover:bg-gray-500 transition-transform text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default BottomNavBar;
