"use client";
import { useState } from "react";

const EditForm = ({
  title = "Edit Form",
  showVideoUpload = true,
  showDescription = true,
  showVoiceNote = true,
  showCategoryDropdown = false,
  categoryOptions = [],
  showCheckboxOptions = false,
  checkboxOptions = [],
  showUrgencyDropdown = true,
  urgencyLevels = ["Normal", "High", "Urgent"],
  buttonText = "Submit",
}) => {
  const [formData, setFormData] = useState({
    videoFile: null,
    description: "",
    voiceNote: null,
    category: "",
    selectedOptions: [],
    urgency: urgencyLevels[0],
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleTextChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleDropdownChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(option)
        ? prev.selectedOptions.filter((item) => item !== option)
        : [...prev.selectedOptions, option],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <form onSubmit={handleSubmit}>
        {showVideoUpload && (
          <label className="block mb-4">
            <span className="text-gray-300">Upload Video</span>
            <input
              type="file"
              name="videoFile"
              accept="video/*"
              onChange={handleFileChange}
              className="block w-full text-gray-400 mt-2"
            />
          </label>
        )}
        
        {showDescription && (
          <label className="block mb-4">
            <span className="text-gray-300">What would you like done?</span>
            <textarea
              placeholder="Describe the edits you want..."
              value={formData.description}
              onChange={handleTextChange}
              className="w-full mt-2 p-3 rounded bg-gray-700 text-white"
            />
          </label>
        )}

        {showVoiceNote && (
          <label className="block mb-4">
            <span className="text-gray-300">Upload Voice Note (Optional)</span>
            <input
              type="file"
              name="voiceNote"
              accept="audio/*"
              onChange={handleFileChange}
              className="block w-full text-gray-400 mt-2"
            />
          </label>
        )}

        {showCategoryDropdown && (
          <label className="block mb-4">
            <span className="text-gray-300">Category</span>
            <select
              name="category"
              value={formData.category}
              onChange={handleDropdownChange}
              className="w-full mt-2 p-3 rounded bg-gray-700 text-white"
            >
              {categoryOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </label>
        )}

        {showCheckboxOptions && (
          <div className="block mb-4">
            <span className="text-gray-300">Options</span>
            <div className="flex mt-2">
              {checkboxOptions.map((option, index) => (
                <label key={index} className="flex items-center mr-4 text-gray-400">
                  <input
                    type="checkbox"
                    checked={formData.selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}

        {showUrgencyDropdown && (
          <label className="block mb-4">
            <span className="text-gray-300">Urgency</span>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleDropdownChange}
              className="w-full mt-2 p-3 rounded bg-gray-700 text-white"
            >
              {urgencyLevels.map((level, index) => (
                <option key={index} value={level}>{level}</option>
              ))}
            </select>
          </label>
        )}

        <button
          type="submit"
          className="w-full mt-4 p-3 font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg hover:scale-105 transition-transform"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default EditForm;
