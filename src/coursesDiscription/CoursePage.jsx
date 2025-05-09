import React, { useState } from "react";
import {
  FaPlay, FaClock, FaFileAlt, FaLanguage, FaCertificate,
  FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn
} from "react-icons/fa";
import CurriculumSection from "./components/CurriculumSection";
import Responsivebuy from "./components/Responsivebuy";
import axios from "axios";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const [mobile, setMobile] = useState("");
  const {coursediscription} = useParams();
  axios.get("http://localhost:5000/api/user", {
    withCredentials: true,
    headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}` // if using JWT
  }
  });
  
  const handleBuyNow = async () => {
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    const amount = 500; // example amount

    const { data: order } = await axios.post("http://localhost:5000/api/create-order", { amount });
  
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // or hardcoded if testing

      amount: order.amount,
      currency: "INR",
      name: "Apka Siddharth",
      description: "Course Purchase",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful");
        // You can verify here or show confirmation
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="mt-40 max-md:mt-20">
      <h1 className="text-5xl flex justify-center font-bold">{coursediscription}</h1>
      <div className="text-sm text-gray-500 flex max-md:text-[13px] max-md:p-2 justify-center mt-2 space-x-4">
        <span><strong>Teacher:</strong> ThimPress</span>
        <span><strong>Categories:</strong> Business, Design</span>
        <span><strong>Students:</strong> 126 (Registered)</span>
        <span><strong>Review:</strong> ⭐⭐⭐⭐⭐</span>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="relative">
            <img src="https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg" alt="Course Preview" className="rounded-2xl shadow-xl" />
            <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-md shadow-lg font-bold">21 JUL</div>
          </div>
          <div className="mt-8 pb-10">
            <h2 className="text-xl font-semibold mb-2">Course Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you are a newbie to managing a WordPress website... [truncate text]
            </p>
            <CurriculumSection />
          </div>
        </div>

        <div className="fixed top-60 left-2/3 h-fit max-md:hidden bg-white shadow-lg rounded-xl border">
          <h2 className="text-3xl font-bold text-center p-4 rounded-t-xl text-white bg-orange-600">₹2200.00</h2>
          <div className="p-6">
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Mobile Number"
              className="w-full mb-4 p-2 border rounded-md text-sm"
              required
            />
            <button
              onClick={handleBuyNow}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-semibold"
            >
              BUY NOW
            </button>
            <div className="mt-6 text-sm text-center text-gray-500">
              <p>Have a Coupon?</p>
              <input type="text" className="w-full mt-2 p-2 border rounded-md" placeholder="Enter Coupon Code" />
            </div>
            <hr className="border-t border-gray-300 my-6 mx-6" />
            <div className="space-y-3 max-lg:text-[14px] text-gray-700">
              <p><FaClock className="inline mr-2 text-orange-500" /> 46 Hours On-Demand Video</p>
              <p><FaFileAlt className="inline mr-2 text-orange-500" /> 16 Articles</p>
              <p><FaFileAlt className="inline mr-2 text-orange-500" /> 29 Supplemental Resources</p>
              <p><FaLanguage className="inline mr-2 text-orange-500" /> Language: English</p>
              <p><FaCertificate className="inline mr-2 text-orange-500" /> Certificate of Completion</p>
            </div>
            <hr className="border-t border-gray-300 my-6 mx-6" />
            <div className="flex justify-center gap-4 text-gray-500">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaPinterest className="hover:text-red-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Responsivebuy />
    </div>
  );
};

export default CoursePage;
