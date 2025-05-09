const CourseCard = ({ course }) => {
    return (
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="relative">
          <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
          <span className="absolute top-2 right-2 bg-yellow-400 text-white text-sm px-2 py-1 rounded">
            {course.duration}
          </span>
        </div>
        <div className="p-4">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{course.level}</span>
          <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
          <p className="text-yellow-500 text-sm mt-1">⭐ {course.rating} ({course.reviews} Ratings)</p>
          <p className="text-red-500 font-bold mt-1">{course.price}</p>
          <div className="flex justify-between text-sm mt-2 text-gray-600">
            <span>📘 {course.lessons} Lessons</span>
            <span>👨‍🎓 {course.students} Students</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseCard;
  