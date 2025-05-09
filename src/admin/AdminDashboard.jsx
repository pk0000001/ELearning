import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const mockTests = [
    { name: "VIT", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980681-300x300-1-150x150.png", url:"/AdminDashboard/VIT" },
    { name: "Manipal", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png", url:"/AdminDashboard/Manipal" },
    { name: "Comedk", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980668-300x300-1-150x150.png", url:"/AdminDashboard/COMEDK" },
  ];

  return (
    
    <div className="bg-gray-100 min-h-screen flex flex-col items-center max-md:items-center mt-24 p-4  max-md:w-screen max-sm:min-w-2xl md:p-1 ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Courses Add</h1>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-screen max-md:w-auto  sm:gap-2 max-w-5xl px-4 sm:px-1">
        {mockTests.map((courseId, index) => (
          <Link to={courseId.url}><div
            key={index}
            className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 w-60 md:w-58 md:h-58 max-sm:min-w-40 sm:w-64 h-56 transition transform hover:scale-105 hover:shadow-lg"
          >
            <img src={courseId.img} alt={courseId.name} className="w-24 h-24 mb-4" />
            <p className="text-lg font-semibold">{courseId.name}</p>
            {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Start Test
            </button> */}
          </div></Link>
        ))}
      </div>
    </div>
  );
 
}

export default AdminDashboard
