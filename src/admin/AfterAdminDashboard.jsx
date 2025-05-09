import { useState } from 'react';
import ChapterUpload from './ChapterUpload';
import QuizManager from './QuizManager';
import StudentList from './StudentList';
import { Outlet, useParams } from 'react-router-dom';

const AfterAdminDashboard = () => {
  
  const [activeTab, setActiveTab] = useState('chapters');
  const {courseId} = useParams();
  const [name , setName] = useState([{id:"Manipal", name:"Manipal"},
    {id:"VIT", name:"VIT"},
    {id:"COMEDK", name:"COMEDK"},
  ]);

  const [course] = name.filter((item)=> item.id === courseId);
  return (
    <div className="min-h-screen  bg-gray-100">
      <nav className="bg-white mt-24 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-800">E-Learning Admin {course.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`${
                  activeTab === 'chapters'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab('chapters')}
              >
                Chapters
              </button>
              <button
                className={`${
                  activeTab === 'quiz'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab('quiz')}
              >
                Quiz
              </button>
              <button
                className={`${
                  activeTab === 'students'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab('students')}
              >
                Students
              </button>
            </nav>
          </div>

          <div className="mt-6">
            {activeTab === 'chapters' && <ChapterUpload courseId={courseId} />}
            {activeTab === 'quiz' && <QuizManager courseId={courseId} />}
            {activeTab === 'students' && <StudentList courseId={courseId} />}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AfterAdminDashboard;