import { Share2 } from "lucide-react";
import { useState } from "react";

export default function Allcourses() {
    const [course,setcourse] = useState({category: "category",image: "https://apkasiddharth.in/wp-content/uploads/2025/01/1728197981063-1024x576.png",title:"Allcourses",price:"1000"},);
    
  return (<div>
    {<div className="relative bg-white p-4 pt-20 rounded-xl shadow-lg border border-gray-300 w-72">
      {/* Ribbon Banner */}
      <div
        className="absolute top-0 left-0 px-3 py-1 text-white font-bold text-xs uppercase bg-red-700 rounded-tr-lg"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
      >
       {course.category}
      </div>

      {/* Share Button */}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
        <Share2 size={18} />
      </button>

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-36 object-cover rounded-lg"
      />

      {/* Course Title */}
      <h3 className="mt-2 text-lg font-semibold text-gray-900">
        {course.title}
      </h3>

      {/* Course Description */}
      <p className="text-gray-700 text-sm flex items-center gap-2 mt-2">
        📚 For Class 10th | 1 Year Program
      </p>

      {/* Course Price */}
      <p className="text-purple-600 font-bold text-lg mt-2">₹ {course.price}</p>

      {/* CTA Buttons */}
      <div className="mt-4 flex gap-2">
        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md">
          Explore
        </button>
        <button className="w-full bg-purple-600 text-white py-2 rounded-md">
          Book a Seat
        </button>
      </div>
    </div>}</div>
  );
}
