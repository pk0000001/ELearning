import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Social icons
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center relative">
      <img src="src/assets/footerbg.jpg" className=" w-full h-full rounded-t-lg object-cover absolute" />
     
      <img
          src="https://apkasiddharth.in/wp-content/uploads/2024/10/cropped-channels4_profile-removebg-preview.png"
          className="w-12 top-5 sm:w-16 max-sm:relative max-sm:w-0 absolute"
          alt="Logo"
        />

    <footer className="text-center w-1/2 py-8 absolute">
    
      {/* Logo */}
      <h2 className="text-3xl font-bold text-yellow-400">Apka Siddharth</h2>

      {/* Navigation Links */}
      <nav className="mt-4">
        <div className="flex justify-center space-x-6 text-white text-lg font-medium">
          {["About", "Services","FAQ", "Privacy Policy", "Contact"].map((item, index) => (
            <div className="hover:text-purple-700 cursor-pointer"><NavLink
            key={index}
            to={`/${item.replace(" ", "")}`}
            
          >
            {item}
          </NavLink></div>
          
          ))}
        </div>
      </nav>

      {/* Social Icons */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-white">Stay in touch</h3>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.instagram.com/rajsiddharth258/"><Instagram className="text-pink-500 hover:text-pink-200 cursor-pointer" /></a>
          <Facebook className="text-blue-500 hover:text-blue-200 cursor-pointer" />
          <Twitter className="text-blue-400 hover:text-blue-100 cursor-pointer" />
          <Linkedin className="text-blue-600 hover:text-blue-300 cursor-pointer" />
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-white bottom-1 text-md mt-6">Copyright © 2025 Apka Siddharth</p>
      <Link to={"/AdminLogin"}>Admin</Link>
      <Link to={"/video"}>video</Link>
    </footer>
  


      </div>
  )
}

export default Footer
