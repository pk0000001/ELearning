import React, { useState } from "react";
import { FaEye, FaLock, FaFileAlt } from "react-icons/fa";

const sectionsData = [
  {
    title: "Section 1",
    subtitle: "Introduction to this Course",
    lessons: [
      { title: "A Note On Asking For Help23", time: "30 Minutes", unlocked: true },
      { title: "Introducing Our TA", time: "30 Minutes", unlocked: true },
      { title: "Our Class Chat Room", time: "30 Minutes", unlocked: false },
      { title: "Why This Course?", time: "30 Minutes", unlocked: false },
      { title: "Syllabus Download", time: "30 Minutes", unlocked: false },
    ],
  },
  {
    title: "Section 2",
    subtitle: "Introduction to Front End Development",
    lessons: [],
  },
  {
    title: "Section 3",
    subtitle: "Introduction to HTML",
    lessons: [],
  },
];

const CurriculumSection = () => {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-2">Curriculum</h2>
      <p className="text-sm text-gray-500 mb-4">3 Sections • 12 Lessons • 10 Weeks</p>

      {sectionsData.map((section, i) => (
        <div key={i} className="mb-4 border rounded-md">
          <div
            className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
            onClick={() => toggleSection(i)}
          >
            <div>
              <h3 className="font-semibold">{section.title}</h3>
              <p className="text-sm text-gray-600">{section.subtitle}</p>
            </div>
            <span className="text-red-600 font-bold text-xl">
              {section.lessons.length}
            </span>
          </div>

          {openSections.includes(i) && section.lessons.length > 0 && (
            <div className="bg-white">
              {section.lessons.map((lesson, j) => (
                <div
                  key={j}
                  className="flex justify-between items-center px-4 py-2 border-t hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-red-500" />
                    <span>{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{lesson.time}</span>
                    {lesson.unlocked ? (
                      <FaEye />
                    ) : (
                      <FaLock />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurriculumSection;
