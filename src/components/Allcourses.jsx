import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";


const courses = [
  {
    image: "https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg",
    title: "Starting SEO as your Home Based Business",
    duration: "15 Weeks",
    level: "Beginner",
    rating: 5.0,
    reviews: 3,
    price: "$30",
    lessons: 11,
    students: 227,
    url:"/AllCourses/Manipal",
  },
  {
    image: "https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg",
    title: "Grow Personal Financial Security Thinking & Principles",
    duration: "12 Weeks",
    level: "Expert",
    rating: 5.0,
    reviews: 2,
    price: "$49",
    lessons: 8,
    students: 72,
    url:"/AllCourses/VIT",
  },
  {
    image: "https://apkasiddharth.in/wp-content/uploads/2025/01/20241029_153522-1.jpg",
    title: "The Complete Guide to Build RESTful API Application",
    duration: "20 Hours",
    level: "All Levels",
    rating: 4.0,
    reviews: 2,
    price: "Free",
    lessons: 9,
    students: 241,
    url:"/AllCourses/BITSAT",
  },
];

const AllCourses = () => {
  return (
   <>
      {/* Header */}
      <div className="mb-10 mt-20 px-6 shadow-2xl py-16 text-center w-full bg-gradient-to-r from-[#200F49] via-[#215FC2] to-[#139094]">
        <h1 className="text-4xl text-white font-bold">Our Courses</h1>
        <p className="text-gray-200 ">The beautiful thing about learning is that no one can take it away from you</p>
      </div>
 <div className="max-w-7xl mx-auto mt-24 px-6 py-12">
      {/* Search + Count */}
      {/* <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
        <p>
          Showing <span className="text-green-600 font-semibold">1-9</span> Of{" "}
          <span className="text-green-600 font-semibold">62</span> Results
        </p>
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search Courses..."
            className="border rounded-lg px-4 py-2 w-64"
          />
        </div>
      </div> */}

      {/* Course Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (<Link to={course.url}>
          <CourseCard key={index} course={course} /></Link>
        ))}
      </div>
    </div>
    </>
  );
  
};

export default AllCourses;
