// import DNav from "./DNav";

// export default function Practicequiz() {
//     const mockTests = [
//       { name: "VIT", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980681-300x300-1-150x150.png" },
//       { name: "Manipal", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png" },
//       { name: "Comedk", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980668-300x300-1-150x150.png" },
//     ];
  
//     return (
//         <div className="bg-[#ececec] min-h-screen flex">
//             <DNav />
//       <div className="max-w-screen  mt-6 flex flex-col justify-center">
//         <h1 className="text-3xl font-bold mb-12">Practice Questions</h1>
//         <div className="grid grid-cols-3 gap-6 max-w-5xl">
//           {mockTests.map((test, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 w-60 h-60 transition transform hover:scale-105 hover:shadow-lg"
//             >
//               <img src={test.img} alt={test.name} className="w-32 h-32 mt-9" />
//               <p className="text-lg font-semibold ">{test.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     );
//   }

import React from "react";
import DNav from "./DNav";

export default function MockTest() {
  const mockTests = [
    { name: "VIT", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980681-300x300-1-150x150.png" },
    { name: "Manipal", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png" },
    { name: "COMEDK", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980668-300x300-1-150x150.png" },
  ];

  return (
    <div className="bg-[#ececec] min-h-screen pt-20 flex">
      {/* Sidebar */}
      
      <DNav />
     
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Practice Questions</h1>
        

        {/* Mock Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {mockTests.map((test, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg flex flex-col items-center p-6 w-64 h-64 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img src={test.img} alt={test.name} className="w-32 h-32 mb-4" />
              <p className="text-lg font-semibold">{test.name}</p>
              {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Start Test
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  