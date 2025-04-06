// import React, { useState } from 'react'
// import { Link, NavLink } from "react-router-dom";

// const DNav = () => {
//   const [colr, setColor] = useState({
//     d: false,
//     p: false,
//     my: false,
//     r: false,
//     f: false,
//   });
//   return (
//     <div className="w-1/9 bg-[#F5F5F5] m-3 justify-content-center rounded shadow-md p-4">
//     <nav className="flex flex-col space-y-4">
//     <NavLink
//       to="/Dashboard"
//       onClick={() => setColor({ d: true, p: false, my: false, r: false, f: false })}
//       className={`px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition ${
//         colr.d ? "bg-blue-600 text-white" : ""
//       }`}
//     >
//       Dashboard
//     </NavLink>
      
//       <NavLink to={"/myprofile"} onClick={() => setColor({ d: false, p: true, my: false, r: false, f: false })}
//       className={`px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition ${
//         colr.p ? "bg-blue-600 text-white" : ""
//       }`}>
//         Profile
//       </NavLink>
//       <NavLink to={"/mycourses"} onClick={() => setColor({ d: false, p: false, my: true, r: false, f: false })}
//       className={`px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition ${
//         colr.my ? "bg-blue-600 text-white" : ""
//       }`}>
//         My Courses
//       </NavLink >
//       <NavLink to={"/result"} onClick={() => setColor({ d: false, p: false, my: false, r: true, f: false })}
//       className={`px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition ${
//         colr.r ? "bg-blue-600 text-white" : ""
//       }`}>
//         Result
//       </NavLink >
//       <NavLink to={"/feedback"} onClick={() => setColor({ d: false, p: false, my: false, r: false, f: true })}
//       className={`px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition ${
//         colr.f ? "bg-blue-600 text-white" : ""
//       }`}>
//         Feedback
//       </NavLink>
//     </nav>
    
//   </div>
  
//   )
// }

// export default DNav
// className=` px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition ${w => colr.d ? "bg-blue-600" : null } focus:text-white`
{/* <NavLink to={"/myprofile"} className="px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition focus:bg-blue-600 focus:text-white">
        Profile
      </NavLink>
      <NavLink to={"/mycourses"} className="px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition focus:bg-blue-600 focus:text-white">
        My Courses
      </NavLink >
      <NavLink to={"/result"} className="px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition focus:bg-blue-600 focus:text-white">
        Result
      </NavLink >
      <NavLink to={"/feedback"} className="px-4 py-2 rounded-md text-black bg-transparent hover:bg-brown-600 hover:bg-gray-400 hover:text-white transition focus:bg-blue-600 focus:text-white">
        Feedback
      </NavLink> */}


//       import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
      
//       const DNav = () => {
//         return (
//           <div className="w-1/9 bg-white p-6 shadow-md">
//         <div className="flex flex-col items-center">
//           <img
//             src="https://apkasiddharth.in/wp-content/uploads/2024/10/cropped-channels4_profile-removebg-preview.png"
//             alt="Profile"
//             className="rounded-full w-24 h-24 mb-4"
//           />
//           <h2 className="text-xl font-semibold">Raj Siddharth</h2>
//         </div>
//         <div className="mt-6 flex flex-col gap-4">
//         <NavLink to="/Dashboard" className={({ isActive }) =>`w-full text-left px-4 py-2 rounded-md  ${
//       isActive ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:bg-gray-200"}`}>Dashboard</NavLink>

//       <NavLink to="/myprofile" className={({ isActive }) =>`w-full text-left px-4 py-2 rounded-md  ${
//         isActive ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:bg-gray-200"}`}>My Profile</NavLink>

//         <NavLink to="/pquiz" className={({ isActive }) =>`w-full text-left px-4 py-2 rounded-md  ${
//           isActive ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:bg-gray-200"}`}>Practice Quiz</NavLink>



          
          
          
//         </div>
//       </div>
//         )
//       }
      
//       export default DNav
      

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const DNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      {/* Mobile Menu Toggle Button */}
      <button
        className="lg:hidden p-3 max-lg:mt-20 fixed top-4 left-4 text-black hover:bg-white rounded-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-full bg-white p-6 max-lg:mt-20 shadow-md w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:w-64`}
      >
        <div className="flex flex-col items-center">
          <img
            src="https://apkasiddharth.in/wp-content/uploads/2024/10/cropped-channels4_profile-removebg-preview.png"
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-semibold">Raj Siddharth</h2>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <NavLink
            to="/Dashboard"
            className={({ isActive }) =>
              `w-full text-left px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/myprofile"
            className={({ isActive }) =>
              `w-full text-left px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            My Profile
          </NavLink>

          <NavLink
            to="/pquiz"
            className={({ isActive }) =>
              `w-full text-left px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            Practice Quiz
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DNav;
