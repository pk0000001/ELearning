// // import DNav from "./DNav";

// // export default function MyProfile() {
// //     return (
// //       <div className="bg-[#ececec] min-h-screen flex p-6">
// //         <DNav />
// //         {/* Left Container */}
// //         <div className="w-1/3 bg-white shadow-md p-6 rounded-md flex flex-col items-center">
// //           <img 
// //             src="https://via.placeholder.com/150" 
// //             alt="Profile" 
// //             className="w-32 h-32 rounded-full border-4 border-gray-300"
// //           />
// //           <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
// //             Edit Profile
// //           </button>
// //           <button className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
// //             Set Password
// //           </button>
// //         </div>
        
// //         {/* Right Container */}
// //         <div className="w-2/3 bg-white shadow-md p-6 rounded-md ml-6">
// //           <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
// //           <p className="text-lg"><strong>Name:</strong> John Doe</p>
// //           <p className="text-lg mt-2"><strong>Email:</strong> johndoe@example.com</p>
// //           <p className="text-lg mt-2"><strong>Mobile Number:</strong> +1234567890</p>
// //         </div>
// //       </div>
// //     );
// //   }

// import React from 'react';
// import DNav from './DNav';

// export default function MyProfile() {

//   const [user, setUser] = useState({
//     name: "Prince Kumar",
//     email: "princekumarmandalkatihar@gmail.com",
//     phone: "+917903367144",
//   });

//   return (
//     <div className="bg-gray-100 min-h-screen flex">
//       {/* Sidebar */}
//       <DNav />

//       {/* Main Content */}
//       {/* <div className="flex-1 p-6">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
        
//         {/* Top Section */}
//         {/* <div className="grid grid-cols-2 gap-4 mt-6">
//           <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg text-white shadow-md">
//             <h3 className="text-lg font-semibold">Are you a teacher?</h3>
//             <p className="text-sm mt-2">We're excited to help you create a great learning experience.</p>
//             <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-md">Learn More</button>
//           </div>
//           <div className="bg-gray-900 p-6 rounded-lg text-white shadow-md flex flex-col justify-center items-start">
//             <h3 className="text-lg font-semibold">Start your learning journey</h3>
//             <p className="text-sm mt-2">Become the next Galactic Overlord of coding!</p>
//             <button className="mt-4 bg-green-500 px-4 py-2 rounded-md">Create a Learning Path</button>
//           </div>
//         </div>

//         {/* Info Cards */}
//         {/* <div className="grid grid-cols-2 gap-4 mt-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Certification Courses & Exams</h3>
//             <p className="text-sm text-gray-600 mt-2">Boost your skills and advance your career.</p>
//             <button className="mt-4 border border-gray-600 px-4 py-2 rounded-md">Explore</button>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">My Learning - Activity</h3>
//             <p className="text-sm text-gray-600 mt-2">No activity recorded yet. Start learning today!</p>
//             <button className="mt-4 border border-gray-600 px-4 py-2 rounded-md">Go to My Learning</button>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">My Spaces</h3>
//             <p className="text-sm text-gray-600 mt-2">You have no spaces yet. Start your journey now!</p>
//             <button className="mt-4 border border-gray-600 px-4 py-2 rounded-md">Go to Spaces</button>
//           </div>
//         </div> */}
//       {/* </div> */} 
 



import { useEffect, useState } from "react";
import DNav from './DNav';

export default function MyProfile() {
  // Sample user data
  const [user, setUser] = useState({
    fullName: "", email: "",
    phone: "+917903367144"
  });


useEffect(() => {
    // Fetch user info using token from localStorage
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include", // if using cookies
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setUser({
            fullName: data.fullName || "User",
            email: data.email,
            image: data.image || `https://ui-avatars.com/api/?name=${data.fullName || "User"}&background=random`
          });
        } else {
          console.error("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen pt-20 flex">
      <DNav />
    <div className=" w-1/2 flex flex-col max-lg:items-center max-lg:w-full justify-center  ">
      <div className="bg-white ml-20 shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-4">
        My Profile
      </h2>
      
      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 font-medium">Name:</span>
          <span className="text-gray-800">{user.fullName}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 font-medium">Email:</span>
          <span className="text-blue-600">{user.email}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 font-medium">Phone:</span>
          <span className="text-gray-800">{user.phone}</span>
        </div>
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
        Edit Profile
      </button></div>
    </div></div>
  );
}
