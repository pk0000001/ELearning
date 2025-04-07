import { useState } from "react";
import { Lock, Globe } from "lucide-react";
import { Outlet, useParams } from "react-router-dom";

export default function TestPage() {
  const [activeTab, setActiveTab] = useState("currentAffairs");
  const {test} = useParams();
  const [name , setName] = useState([{id:"Manipal", name:"Manipal", description:"Manipal is a beautiful city in the state of Karnataka, India. It is known for its picturesque landscapes, rich history"},
    {id:"VIT", name:"VIT", description:"VIT is a renowned engineering college in India. It is known for its strong campus, top-tier infrastructure, and rich academic"},
    {id:"COMEDK", name:"COMEDK", description:"COMEDK is a top-level technology company  inIndia. It is known for its"},
  ]);
  
 

  const tabs = [
    { id: "freeTests", name: "Free Test", count: 4 },
    { id: "chapterTests", name: "Chapter Test", count: 183 },
    { id: "currentAffairs", name: "Current Affairs", count: 13 },
    { id: "sectionalTests", name: "Sectional Test", count: 25 },
    { id: "fullTests", name: "Full Test", count: 10 },
  ];

  const [course] = name.filter((item)=> item.id === test);
 
  return (
    
    <div className="bg-gray-100 flex pt-24 flex-col items-center min-h-screen p-6">
        
      
      {/* Test Series Header */}
      <div className="bg-purple-100 w-full h-60 p-6 bg-linear-65 flex justify-center from-white to-#e5dbff rounded-lg shadow-md text-center">
        <div className="w-1/2">
        <h1 className="text-2xl  font-bold">Welcome to {course.name}</h1>
        <p className="text-gray-600">Last updated on Mar 23, 2025</p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-700">
          <span className="bg-green-200 px-3 py-1 rounded-md font-semibold">6 FREE TESTS</span>
          <span className="px-3 py-1">📊 179.4k Users</span>
          <span className="flex items-center"><Globe size={16} className="mr-1" /> English, Hindi +7 More</span>
        </div>

        {/* Test Counts */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {course.description}
        </div></div>

      </div>
      <div className="w-1/2">
      {/* Tabs for Different Test Categories */}
      <div className="mt-6  bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-center gap-3 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              } transition`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Test List */}
      <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-blue-700">Current Affairs - June 2024</h2>
        <p className="text-gray-600 text-sm">10 Questions • 10 Marks • 8 Mins</p>

        {/* Unlock Button */}
        <div className="flex justify-between items-center mt-4">
          <span className="flex items-center text-gray-600">
            <Globe size={16} className="mr-1" /> English, Hindi + 5 More
          </span>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
            <Lock size={16} className="mr-2" /> Unlock Now
          </button>
          </div>
        </div>
      </div>
     <Outlet />
    </div>
  );
}



