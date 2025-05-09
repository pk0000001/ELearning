import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const Lclass = ({courseId}) => {


    const [chapters, setChapters] = useState([]);
    const [error, setError] = useState(""); 



    useEffect(() => {
        const fetchChapters = async () => {
          axios.get("http://localhost:5000/api/user", {
            withCredentials: true,
          });
          
          try {
            const response = await fetch(`http://localhost:5000/api/chapters?courseId=${courseId}`);
            console.log(response);
            if (!response.ok) {
              throw new Error("Failed to fetch chapters");
            }
            const data = await response.json();
            console.log(data);
            setChapters(data);
          } catch (error) {
            setError(error.message);
            console.log(error);
          } 
        };
    
        fetchChapters();
      }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-32">
        {chapters.map((chapter) =>  ((chapter.courseId === courseId &&(
          <div key={chapter._id} className="border p-2 rounded-lg shadow">
            <Link to={`/Lclass/${chapter._id}`} ><div
                 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 h-40 flex justify-center items-center"
                >
                  Watch Video
                </div></Link>
            <p className="mt-2 text-sm text-gray-600">27/10/2000</p>
            <h3 className="text-lg font-medium">{chapter.title}</h3>
            <p className="text-sm text-gray-500">Duration: {chapter.content}</p>
          </div>))
        ))}
      </div>
  )
}

export default Lclass
