"use client";

import { useState } from "react";
import BottomNavBar from "../components/BottomNavBar/BottomNavBar";

const RevisitPage = () => {
  const [revisits, setRevisits] = useState([
    { project: "Project Alpha", messages: ["Initial design notes"], timestamps: [new Date().toLocaleString()], read: false },
    { project: "Project Beta", messages: ["Beta testing updates"], timestamps: [new Date().toLocaleString()], read: false },
    { project: "Project Gamma", messages: ["Gamma phase feedback"], timestamps: [new Date().toLocaleString()], read: false },
  ]);
  const [selectedRevisit, setSelectedRevisit] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [newProjectName, setNewProjectName] = useState(""); // For adding a new revisit
  const [modalType, setModalType] = useState("message"); // To differentiate modal types

  const handleRevisitClick = (revisit) => {
    setSelectedRevisit(revisit);
  };

  const handleAddMessage = () => {
    const updatedRevisits = revisits.map((revisit) => {
      if (revisit.project === selectedRevisit.project) {
        return {
          ...revisit,
          messages: [...revisit.messages, newMessage],
          timestamps: [...revisit.timestamps, new Date().toLocaleString()],
        };
      }
      return revisit;
    });

    const updatedSelectedRevisit = {
      ...selectedRevisit,
      messages: [...selectedRevisit.messages, newMessage],
      timestamps: [...selectedRevisit.timestamps, new Date().toLocaleString()],
    };

    setRevisits(updatedRevisits);
    setSelectedRevisit(updatedSelectedRevisit); 
    setShowModal(false);
    setNewMessage("");
  };

  const handleAddRevisit = () => {
    const existingRevisit = revisits.find(
      (revisit) => revisit.project.toLowerCase() === newProjectName.toLowerCase()
    );
    if (existingRevisit) {
      alert("Project with this name already exists.");
    } else {
      setRevisits([
        ...revisits,
        {
          project: newProjectName,
          messages: [newMessage],
          timestamps: [new Date().toLocaleString()],
          read: false,
        },
      ]);
      setNewProjectName("");
      setNewMessage("");
      setShowModal(false);
    }
  };

  const markAsRead = (revisit) => {
    setRevisits(
      revisits.map((r) =>
        r.project === revisit.project ? { ...r, read: true } : r
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
      {/* Revisit List */}
      {!selectedRevisit ? (
        <>
          <h2 className="text-3xl font-bold mb-6">Your Revisits</h2>
          {revisits.map((revisit, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-lg mb-4 cursor-pointer"
              onClick={() => {
                handleRevisitClick(revisit);
                markAsRead(revisit);
              }}
            >
              <div>
                <h3 className="text-xl font-bold">{revisit.project}</h3>
              </div>
              {revisit.read && (
                <span className="text-green-500 text-lg font-bold">✔</span>
              )}
            </div>
          ))}
          <button
            className="w-full mt-4 py-3 bg-green-500 text-white font-bold rounded-lg"
            onClick={() => {
              setModalType("revisit");
              setShowModal(true);
            }}
          >
            Add New Revisit
          </button>
        </>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <button className="text-gray-400 mb-4" onClick={() => setSelectedRevisit(null)}>
              ← Back
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg" onClick={() => {
              setModalType("message");
              setShowModal(true);
            }}>
              + Add Message
            </button>
          </div>

          <h3 className="text-3xl font-bold mb-4">{selectedRevisit.project}</h3>

          {selectedRevisit.messages.map((message, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
              <p className="text-lg text-gray-300">{message}</p>
              <p className="text-sm text-gray-500">{selectedRevisit.timestamps[index]}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal for adding new revisit or message */}
      {showModal && modalType === "revisit" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full space-y-4">
            <h2 className="text-2xl font-bold text-white">Add New Revisit</h2>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
              placeholder="Project Name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
              placeholder="Message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="w-full py-3 bg-green-500 text-white font-bold rounded-lg"
              onClick={handleAddRevisit}
            >
              Save
            </button>
            <button
              className="w-full py-3 bg-red-500 text-white font-bold rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showModal && modalType === "message" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full space-y-4">
            <h2 className="text-2xl font-bold text-white">Add New Message</h2>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
              placeholder="Message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="w-full py-3 bg-green-500 text-white font-bold rounded-lg"
              onClick={handleAddMessage}
            >
              Save
            </button>
            <button
              className="w-full py-3 bg-red-500 text-white font-bold rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <BottomNavBar />
    </div>
  );
};

export default RevisitPage;
