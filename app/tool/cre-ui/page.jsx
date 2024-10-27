import React from 'react'
import EditForm from '../../components/EditForm/EditForm'
import Stats from '../../components/Stats/Stats'
import BottomNavBar from '@/app/components/BottomNavBar/BottomNavBar'
const page = () => {
    const stats = [
        { label: "Editors", value: "20+" },
        { label: "CB Spent", value: "15k" },
        { label: "CB Saved", value: "7k" },
        { label: "Completed Edits", value: "6k" },
    ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans flex">
    <EditForm 
  title="Create a User Interface" 
  showVideoUpload={true} 
  showVoiceNote={true} 
  showCategoryDropdown={true} 
  categoryOptions={['Audio', 'Video', 'Image']}
  showCheckboxOptions={true}
  checkboxOptions={['Slow', 'Fast']}
  showUrgencyDropdown={true} 
  buttonText="Edit My Video" 
/>
    <Stats stats={stats}/>
    <BottomNavBar/>
    </div>
  )
}

export default page