import { Link } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Manipal",
    date: "April 13, 2022 - 4:24 PM",
    duration: "20h 10m",
    price: "₹ 1,500",
    level: "Basic",
    status: "Published",
    img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png",
  },
];

const MyCourses = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">My Courses</h2>
      <NavLink to={"/Mycourse"}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-4 bg-gray-100 p-4 font-semibold text-gray-600">
          <span className="text-left">COURSE</span>
          <span className="text-center">DURATION</span>
          <span className="text-center">PRICE</span>
          <span className="text-center">LEVEL</span>
        </div>

        {/* Course Items */}
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col md:flex-row items-center border-b p-4 hover:bg-gray-50">
            {/* Course Image */}
            <img src={course.img} alt={course.title} className="w-16 h-16 rounded-lg mb-2 md:mb-0 md:mr-4" />

            {/* Course Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-500">Created: {course.date}</p>
              <span className={`px-2 py-1 text-xs font-semibold rounded ${
                course.status === "Published" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {course.status}
              </span>
            </div>

            {/* Course Meta Info - Responsive Layout */}
            <div className="flex flex-col md:flex-row w-full md:w-3/4 md:justify-between text-center md:text-left mt-2 md:mt-0">
              <div className="md:w-1/4">{course.duration}</div>
              <div className="md:w-1/4">{course.price}</div>
              <div className="md:w-1/4">
                <span className="text-blue-500 font-semibold">{course.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div></NavLink>
    </div>
  );
};

export default MyCourses;
