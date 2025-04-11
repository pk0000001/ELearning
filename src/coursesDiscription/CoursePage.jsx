import React from "react";
import {
  FaPlay,
  FaClock,
  FaFileAlt,
  FaLanguage,
  FaCertificate,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import CurriculumSection from "./components/CurriculumSection";
import Responsivebuy from "./components/Responsivebuy";

const CoursePage = () => {
  const handleBuyNow = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: 2200 * 100,
      currency: "INR",
      name: "Apka Siddharth",
      description: "Affiliate Marketing Course",
      handler: function (response) {
        alert("Payment successful: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Siddharth Raj",
        email: "example@email.com",
      },
      theme: {
        color: "#f97316",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (<div className="mt-40 max-md:mt-20">
    <h1 className="text-5xl flex justify-center font-bold">BITSAT 2025</h1>
    <div className="text-sm text-gray-500 flex max-md:text-[13px] max-md:p-2 justify-center mt-2 space-x-4">
      <span><strong>Teacher:</strong> ThimPress</span>
      <span><strong>Categories:</strong> Business, Design</span>
      <span><strong>Students:</strong> 126 (Registered)</span>
      <span><strong>Review:</strong> ⭐⭐⭐⭐⭐</span>
    </div>

    <div className="max-w-7xl mx-auto p-6  grid md:grid-cols-3 gap-6">
      
      <div className="md:col-span-2">
        <div className="relative">
          <img
            src="https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg"
            alt="Course Preview"
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-md shadow-lg font-bold">
            21 JUL
          </div>
        </div>

        <div className="mt-4">
          
          

          <div className="mt-8 pb-10">
            <h2 className="text-xl font-semibold mb-2">Course Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you are a newbie to managing a WordPress website, then congratulations!
              You are on the right track with us because we are going to introduce you to
              one of the most basic knowledge when owning a WordPress page: how to find
              your site the best WordPress Hosting service. This process is often overlooked
              by most of the website owners. But it plays a key role in making or breaking
              your site’s performance.
            </p>
            <CurriculumSection />
          </div>

          
        </div>
      </div>

      <div className="fixed  top-60 left-2/3 h-fit max-md:hidden bg-white shadow-lg rounded-xl border">
      <h2 className="text-3xl font-bold text-center p-4 rounded-t-xl text-white bg-orange-600">₹2200.00</h2>
          
          <div className="pr-6 pl-6 pb-6">
        <div className="text-center">
         

          <button
            onClick={handleBuyNow}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-semibold"
          >
            BUY NOW
          </button>
        </div>
        <div className="mt-6 text-sm text-center text-gray-500">
          <p>Have a Coupon?</p>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Enter Coupon Code"
          />
        </div>
        <hr className="border-t border-gray-300 my-6 mx-6" />
        <div className="mt-6 space-y-3 max-lg:text-[14px]  text-gray-700">
            <p><FaClock className="inline mr-2 text-orange-500" /> 46 Hours On-Demand Video</p>
            <p><FaFileAlt className="inline mr-2 text-orange-500" /> 16 Articles</p>
            <p><FaFileAlt className="inline mr-2 text-orange-500" /> 29 Supplemental Resources</p>
            <p><FaLanguage className="inline mr-2 text-orange-500" /> Language: English</p>
            <p><FaCertificate className="inline mr-2 text-orange-500" /> Certificate of Completion</p>
          </div>
          <hr className="border-t border-gray-300 my-6 mx-6" />
          <div className="mt-6 flex justify-center gap-4 text-gray-500">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaPinterest className="hover:text-red-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
      </div></div>
    </div>
    <Responsivebuy /></div>
  );
};

export default CoursePage;
