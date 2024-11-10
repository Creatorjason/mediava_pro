"use client";

import { useState } from "react";
import BottomNavBar from "../components/BottomNavBar/BottomNavBar";

// Mock Wallet Component
const WalletPage = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [creativeBytes, setCreativeBytes] = useState("500CB");
  const [showTopUpModal, setShowTopUpModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [convertedNaira, setConvertedNaira] = useState("");

  const transactions = [
    { project: "Project Alpha", amount: "500CB", type: "Credit" },
    { project: "Project Beta", amount: "300CB", type: "Debit" },
  ];

  const handleTopUp = () => {
    setShowTopUpModal(false);
    // Logic to handle top-up
  };

  const handleWithdraw = () => {
    const conversionRate = 50; // Example conversion rate
    setConvertedNaira(`${withdrawAmount * conversionRate} Naira`);
    setShowWithdrawModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4">
      <h1 className="text-center text-4xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
        {activeTab === "user" ? "User Wallet" : "Creative Wallet"}
      </h1>

      {/* Enhanced Toggle Button */}
      <div className="flex justify-center items-center mb-8">
        <div className="relative bg-gray-700 rounded-full w-64 p-1">
          <div
            className={`absolute top-1 bottom-1 left-1 transition-transform transform bg-blue-500 rounded-full w-1/2 h-8 ${
              activeTab === "creative" ? "translate-x-full" : ""
            }`}
          ></div>
          <button
            onClick={() => setActiveTab("user")}
            className={`relative z-10 w-1/2 text-center text-white px-4 py-1 rounded-full transition-all duration-300 ${
              activeTab === "user" ? "font-bold" : "text-gray-400"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setActiveTab("creative")}
            className={`relative z-10 w-1/2 text-center text-white px-4 py-1 rounded-full transition-all duration-300 ${
              activeTab === "creative" ? "font-bold" : "text-gray-400"
            }`}
          >
            Provider
          </button>
        </div>
      </div>

      {/* Balance Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Balance:</h2>
        <p className="text-5xl font-bold text-cyan-500">{creativeBytes}</p>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="bg-green-500 px-6 py-2 rounded-lg font-semibold"
            onClick={() => setShowTopUpModal(true)}
          >
            Topup
          </button>
          <button
            className="bg-red-500 px-6 py-2 rounded-lg font-semibold"
            onClick={() => setShowWithdrawModal(true)}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Transaction History</h2>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 rounded-lg shadow-md ${
                transaction.type === "Credit" ? "bg-green-900" : "bg-red-900"
              }`}
            >
              <div>
                <p className="text-lg font-semibold">{transaction.project}</p>
                <p className="text-sm text-gray-300">
                  Amount: {transaction.amount}
                </p>
              </div>
              <span
                className={`text-lg font-bold ${
                  transaction.type === "Credit"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {transaction.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Topup Modal */}
      {showTopUpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-4">
            <h2 className="text-2xl font-bold text-white text-center">
              Topup CreativeBytes
            </h2>
            <select
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select amount to topup
              </option>
              <option value="100MB">100MB</option>
              <option value="500MB">500MB</option>
              <option value="1GB">1GB</option>
              <option value="2GB">2GB</option>
            </select>
            <button
              onClick={handleTopUp}
              className="w-full px-4 py-2 bg-green-500 rounded-lg font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-4">
            <h2 className="text-2xl font-bold text-white text-center">
              Withdraw CreativeBytes
            </h2>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
              placeholder="How much CB"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
              placeholder="Enter Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p className="text-gray-400">
              You Get: <span className="font-bold">{convertedNaira}</span>
            </p>
            <button
              onClick={handleWithdraw}
              className="w-full px-4 py-2 bg-red-500 rounded-lg font-semibold"
            >
              Withdraw
            </button>
          </div>
        </div>
      )}

      <BottomNavBar />
    </div>
  );
};

export default WalletPage;
