import React, { useEffect, useState } from "react";
import DNav from "./DNav";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

import Quiz from "../quiz/Quiz";
import Lclass from "./Lclass";


const MyCourse = () => {
  const [activeTab, setActiveTab] = useState("class");

  const { courseId } = useParams();




  return (
    <div className="pt-20 flex bg-gray-100 w-full h-screen">
        <DNav />
    <div className="p-4 w-full  bg-white rounded-2xl m-6 mr-6 ml-6 mx-auto ">
        
      <h2 className="text-2xl font-semibold">{courseId}</h2>
      
      <div className="flex gap-4  mt-4">
      <button
             className= {`${activeTab === 'class'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300'} px-4 py-2 rounded`} onClick={() => setActiveTab('class')}>Live Class</button>
        <button
            className= {`${activeTab === 'quiz'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300'} px-4 py-2 rounded`} onClick={() => setActiveTab('qquiz')}>Quiz</button>
      </div>
      <div className="mt-6">
            {activeTab === 'class' && <Lclass courseId={courseId} />}
            {activeTab === 'qquiz' && <Quiz />}
            
          </div>



          <Outlet />
    </div>
    
    </div>
  );
};
// className="bg-gray-300 h-40 flex justify-center items-center"
export default MyCourse;