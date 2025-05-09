import React, { useState } from "react";

const faqData = [
  {
    question: "What is this course about?",
    answer: "This course covers the fundamentals of frontend development, including HTML, CSS, and JavaScript.",
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior experience is necessary. This course is beginner-friendly and starts from scratch.",
  },
  {
    question: "Is there any certification?",
    answer: "Yes, you will receive a certificate upon successful completion of the course and its assessments.",
  },
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-2/3 flex flex-col items-center mx-auto mt-10">
      <h2 className="text-5xl font-bold mb-2">FAQs</h2>
      <p className="text-sm text-gray-500 mb-4">Find answers to common questions</p>

      {faqData.map((item, i) => (
        <div key={i} className="mb-3 w-full border rounded-md">
          <div
            className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
            onClick={() => toggleFAQ(i)}
          >
            <h3 className="font-medium text-md">{item.question}</h3>
            <span className="text-xl font-bold">
              {openIndexes.includes(i) ? "-" : "+"}
            </span>
          </div>
          {openIndexes.includes(i) && (
            <div className="p-4 bg-white text-gray-700 border-t">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
