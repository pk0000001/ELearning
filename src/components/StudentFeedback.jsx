import React, { useState } from 'react'

const StudentFeedback = () => {
    const [imageUrls] = useState([
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
        "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png"
      ]);
  return (
    <div className="w-full h-80 bg-blue-100 relative">
        <img src="src\assets\6bb3e56bee1039824ca0e77ca81fbaa7.png" alt="Banner" className="w-100 object-cover right-0 bottom-0 absolute" />
        <div className="w-full overflow-hidden mt-6 absolute bottom-0">
        <div className="flex w-[80%] animate-scroll"> 
          {imageUrls.concat(imageUrls).map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt={`Image ${index + 1}`} 
              className="w-1/5 p-2"
            />
          ))}
      </div>
      </div>
      </div>
  )
}

export default StudentFeedback
