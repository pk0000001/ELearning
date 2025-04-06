import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-10 max-lg:mt-20 px-6 sm:px-12 lg:px-24 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
      Contact Us
      </h1>

      {/* Content Container */}
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 sm:p-10">
        {/* Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed">
        We’re here to help you with all your academic and counseling needs! Whether you have questions about our services, need guidance on choosing the right college, or want to know more about competitive exam preparation, get in touch with us.        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Email: apkasiddharth258@gmail.com        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Reach out to us with your queries, and we’ll respond within 24 hours. It may take some time due to heavy responses. Please be patient. For quick assistance, you may fill out the form below properly mentioning the cause, else it will be difficult for us to respond you.</p>

        {/* Features Section */}
        <h2 className="text-xl font-semibold mt-6 text-gray-900">Need Quick Assistance?</h2>
       

        {/* Mission Statement */}
        <p className="text-gray-700 text-lg leading-relaxed mt-6">
        Fill out the form below with your details, and we’ll get back to you as soon as possible!</p>

        {/* Call to Action */}
        <p className="text-gray-900 font-semibold text-lg mt-6 text-center">
        Message Us :{" "}
          <a
            href="https://www.instagram.com/rajsiddharth258/"
            className="text-blue-600 hover:underline"
          >
            Click Us
          </a>{" "}
          
        </p>
      </div>
    </div>
  )
}

export default Contact
