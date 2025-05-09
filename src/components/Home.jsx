import { useState } from "react";
import FeedbackSection from "./FeedbackSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import FAQSection from "./FAQSection";

export default function Home() {
  const [imageUrls] = useState([
    "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png",
    "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png",
    "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png",
    "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png",
  ]);
  const course =[
    {src:"https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg", url:"/AllCourses/Manipal", name:"Manipal"},
    {src:"https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg", url:"/AllCourses/VIT", name:"VIT"},
    {src:"https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg", url:"/AllCourses/BITSAT", name:"BITSAT"},
    {src:"https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg", url:"/AllCourses/COMEDK", name:"COMEDK"}
    
  ];

  return (
    <div className="bg-white min-h-screen  max-sm:min-h-1/2 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-screen max-2xl:h-196 max-xl:h-140 max-lg:h-128 max-md:h-104 max-sm:h-80 flex items-center justify-center bg-gradient-to-r from-[#200F49] via-[#215FC2] to-[#139094]">
        <img
          src="src/assets/20250327_115109 (1).png"
          alt="Banner"
          className="max-w-full h-auto object-contain"
        />

        {/* Scrolling Image Row */}
        <div className="absolute bottom-4 w-full overflow-hidden">
          <div className="flex w-max animate-scroll">
            {imageUrls.concat(imageUrls).map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Image ${index + 1}`}
                className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48 p-2"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="bg-white shadow-md p-6 md:p-10 lg:p-20 mt-6 rounded-md w-full max-w-6xl flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {course.map((item,index) => (
            <div
              key={index}
              className="bg-gray-100 w-full h-64 rounded-lg flex flex-col items-center p-2 transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-3/5 bg-gray-300 flex rounded-md items-center justify-center">
                <Link to={item.url}><img
                  src={item.src}
                  alt="Course"
                  className="w-full h-full object-cover rounded-t-md"
                /></Link>
              </div>
              <div className="w-full h-2/5 p-2 flex flex-col items-center">
                <h3 className="text-md font-semibold">Course {item.name}</h3>
                <p className="text-sm text-gray-600 mt-1 text-center">
                  This is a brief description of Course {item.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* faq section */}
      <FAQSection />

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Footer */}
      <Footer />

      {/* Keyframe Animation for Scrolling Images */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
}