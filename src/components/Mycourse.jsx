import React, { useEffect, useState } from "react";
import DNav from "./DNav";

const MyCourse = () => {
  const [activeTab, setActiveTab] = useState("Maths");
  const subjects = ["VITEEE Previous Year Lectures", "Clock 2025", "Calendar 2025", "Direction 2025", "Coding Decoding", "Heights and Distance", "Number Series","Syllogism","Viteee Questions Discussion","Data Sufficiency","Data Interpretation","English"];
  const [chapters, setChapters] = useState([]);
  

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/chapters");
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  return (
    <div className="pt-20 flex bg-gray-100 w-full h-screen">
        <DNav />
    <div className="p-4 w-full  bg-white rounded-2xl m-6 mr-6 ml-6 mx-auto ">
        
      <h2 className="text-2xl font-semibold">SSC CGL (Revision Batch)</h2>
      
      <div className="flex gap-4  mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Live Class</button>
        <button className="bg-gray-300 px-4 py-2 rounded">Notes</button>
      </div>

      <div className="flex overflow-x-scroll gap-4 mt-4 mx-auto border-b">
        {subjects.map((subject) => (
          <button
            key={subject}
            className={`py-2 px-4 ${activeTab === subject ? "border-b-2 border-red-500 font-semibold" : "text-gray-500"}`}
            onClick={() => setActiveTab(subject)}
          >
            {subject}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {chapters.map((chapter) =>  (
          <div key={chapter._id} className="border p-2 rounded-lg shadow">
            <a
                  href={chapter.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 h-40 flex justify-center items-center"
                >
                  Watch Video
                </a>
            <p className="mt-2 text-sm text-gray-600">27/10/2000</p>
            <h3 className="text-lg font-medium">{chapter.title}</h3>
            <p className="text-sm text-gray-500">Duration: {chapter.content}</p>
          </div>
        ))}
      </div>
    </div></div>
  );
};
// className="bg-gray-300 h-40 flex justify-center items-center"
export default MyCourse;