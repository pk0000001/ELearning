// import MyCourses from "./Courses";
// import DNav from "./DNav";



// export default function Dashboard() {
//     return (
//       <div className="bg-gray-100 pt-20 min-h-screen flex">
//         {/* Sidebar */}
       
//         <DNav />
//         {/* Main Content */}
//         <div className="flex-1 p-6 flex flex-col items-center">
//           <h1 className="text-2xl font-bold">Dashboard Content</h1>
          
//         {/* Courses Container */}
//         <div className="bg-white w-8/9 shadow-md py-12 p-6 mt-6 rounded-md">
//           <div className=" gap-20 flex flex-row justify-center">
//             <div className="bg-gray-100 p-4 flex flex-col items-center rounded-md w-48 h-48 shadow">
//               <h2 className="text-lg font-semibold">Enrolled Courses</h2>
//               <p className="text-gray-600 text-5xl mt-2">5</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center shadow w-48 h-48">
//               <h2 className="text-lg font-semibold">Active Courses</h2>
//               <p className="text-gray-600 text-5xl mt-2">10</p>
//             </div>
//             <div className="bg-gray-100 p-4 flex flex-col items-center rounded-md shadow w-48 h-48">
//               <h2 className="text-lg font-semibold">Completed Courses</h2>
//               <p className="text-gray-600 text-5xl mt-2">5</p>
//             </div>
//           </div>
//           </div>
//           <MyCourses />
//           </div>
//         </div>
      
      
//     );
//   }**************************************************************************
  
import MyCourses from "./Courses";
import DNav from "./DNav";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 pt-20 min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <DNav />

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center w-full">
        <h1 className="text-2xl font-bold text-center lg:text-left">Dashboard Content</h1>

        {/* Courses Container */}
        <div className="bg-white w-full max-w-4xl shadow-md py-12 p-6 mt-6 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <div className="bg-gray-100 p-6 flex flex-col items-center rounded-md shadow w-full h-40">
              <h2 className="text-lg font-semibold text-center">Enrolled Courses</h2>
              <p className="text-gray-600 text-5xl mt-2">5</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md flex flex-col items-center shadow w-full h-40">
              <h2 className="text-lg font-semibold text-center">Active Courses</h2>
              <p className="text-gray-600 text-5xl mt-2">10</p>
            </div>
            <div className="bg-gray-100 p-6 flex flex-col items-center rounded-md shadow w-full h-40">
              <h2 className="text-lg font-semibold text-center">Completed Courses</h2>
              <p className="text-gray-600 text-5xl mt-2">5</p>
            </div>
          </div>
        </div>

        {/* My Courses Section */}
        <MyCourses />
      </div>
    </div>
  );
}


