import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-10 max-lg:mt-20 px-6 sm:px-12 lg:px-24 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
        About Us
      </h1>

      {/* Content Container */}
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 sm:p-10">
        {/* Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Apka Siddharth</span>, your most trusted partner in academic guidance and success. We are dedicated to empowering students from Class 5 to 12 and those preparing for competitive exams, ensuring they reach their full potential and achieve their academic goals. At Apka Siddharth,
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          At Apka Siddharth, we focus on guiding students towards securing admission into a good college and finding the perfect branch that aligns with their interests.
        </p>

        {/* Features Section */}
        <h2 className="text-xl font-semibold mt-6 text-gray-900">What We Offer:</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-2">
          <li><span className="font-semibold">Expert Counseling:</span> Personalized support for college admissions and competitive exams, helping students make informed decisions about their future.</li>
          <li><span className="font-semibold">Comprehensive Study Materials:</span> A range of resources, including video lessons, mock tests, and study guides, crafted to simplify complex concepts.</li>
          <li><span className="font-semibold">Career Guidance:</span>  Insights and advice on choosing the right academic path and stream based on each student's strengths and passions.</li>
        </ul>

        {/* Mission Statement */}
        <p className="text-gray-700 text-lg leading-relaxed mt-6">
        Our mission is to provide students not only with learning tips and strategies for competitive exams but also with a deeper understanding of various branches, colleges, placements, and infrastructure. We aim to equip students with all the information they need to make well-informed decisions about their career paths, ensuring they find the perfect fit for their academic and professional goals.
        </p>

        {/* Call to Action */}
        <p className="text-gray-900 font-semibold text-lg mt-6 text-center">
          Join us at{" "}
          <a
            href="https://apkasiddharth.in"
            className="text-blue-600 hover:underline"
          >
            Apka Siddharth
          </a>{" "}
          and take the next step towards your academic dreams!
        </p>
      </div>
    </div>
  );
}
