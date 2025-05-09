// import { useState, useEffect } from "react";

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["London", "Berlin", "Paris", "Madrid"],
//     correctAnswer: "Paris",
//   },
//   {
//     question: "Which language is used for web development?",
//     options: ["Python", "HTML", "C++", "Java"],
//     correctAnswer: "HTML",
//   },
//   {
//     question: "Who is the CEO of Tesla?",
//     options: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Sundar Pichai"],
//     correctAnswer: "Elon Musk",
//   },
// ];

// const Quiz = ({courseId}) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [timer, setTimer] = useState(180); // 3 minutes (in seconds)

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(countdown);
//           setQuizCompleted(true);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, []);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNext = () => {
//     if (selectedOption === questions[currentQuestion].correctAnswer) {
//       setScore((prev) => prev + 1);
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion((prev) => prev + 1);
//       setSelectedOption(null);
//     } else {
//       setQuizCompleted(true);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion((prev) => prev - 1);
//       setSelectedOption(null);
//     }
//   };

//   if (quizCompleted) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen px-4">
//         <h2 className="text-3xl font-bold mb-4 text-center">Quiz Completed!</h2>
//         <p className="text-xl text-center">Your Score: {score} / {questions.length}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl w-full mx-auto mt-32 p-6 bg-white rounded shadow px-4 sm:px-8">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">Question {currentQuestion + 1} of {questions.length}</h2>
//         <span className="text-red-600 font-bold">Time Left: {formatTime(timer)}</span>
//       </div>

//       <h3 className="text-xl font-medium mb-4">{questions[currentQuestion].question}</h3>

//       <div className="space-y-3">
//         {questions[currentQuestion].options.map((option, index) => (
//           <button
//             key={index}
//             className={`block w-full px-4 py-2 border rounded-md text-left transition ${
//               selectedOption === option ? "bg-blue-600 text-white" : "hover:bg-gray-100"
//             }`}
//             onClick={() => handleOptionClick(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
//         <button
//           onClick={handlePrevious}
//           disabled={currentQuestion === 0}
//           className="w-full sm:w-auto px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
//         >
//           Previous
//         </button>

//         <button
//           onClick={handleNext}
//           disabled={!selectedOption}
//           className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
//         >
//           {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Quiz = () => {

  const mockTests = [
    { name: "Quiz 1 ", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980681-300x300-1-150x150.png" },
    { name: "Quiz 2 ", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980693-300x300-1.png" },
    { name: "Quiz 3 ", img: "https://apkasiddharth.in/wp-content/uploads/2025/03/1725703980668-300x300-1-150x150.png" },
  ];

  return (
    <div className="bg-[#ececec] min-h-screen flex">
      {/* Sidebar */}
      

      <div className="p-4 w-full  bg-white rounded-2xl mx-auto ">
        
        
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-10">
       
        

        {/* Mock Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {mockTests.map((test, index) => (
            <Link to={"/pquiz"}><div
            key={index}
            className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 w-60 md:w-58 md:h-58 max-sm:min-w-40 sm:w-64 h-56 transition transform hover:scale-105 hover:shadow-lg"
          >
            <img src={test.img} alt={test.name} className="w-24 h-24 mb-4" />
            <p className="text-lg font-semibold">{test.name}</p>
            {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Start Test
            </button> */}
          </div></Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Quiz
