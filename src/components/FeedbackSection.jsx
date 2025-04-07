import { Star } from "lucide-react";
import { Outlet } from "react-router-dom";

const testimonials = [
  {
    name: "Victoria Roach",
    image: "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
    rating: 5,
    feedback:
      "One of the best support I ever seen. Highly recommend the theme for its design, functions, flexibility and support...",
  },
  {
    name: "Alora Jackson",
    image: "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
    rating: 5,
    feedback:
      "I am really happy with the customer support. I am really, happy with the customer support.",
  },
  {
    name: "Taniyah Miles",
    image: "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
    rating: 5,
    feedback:
      "Very good and flexible theme. Amazing customer support. Highly recommended 😊",
  },
  {
    name: "Anaisa Charlenry",
    image: "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
    rating: 5,
    feedback:
      "Daisy with paid customer support is absolutely fantastic and fast to resolve the most complex of issues. Thanks Daisy!",
  },
  {
    name: "Giuli Arobert",
    image: "https://apkasiddharth.in/wp-content/uploads/2025/03/20250318_165316.png",
    rating: 5,
    feedback:
      "I love this theme, and great customer support comes with it!",
  },
];

export default function FeedbackSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative py-12 px-4 sm:px-8 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="src/assets/featurebg.png"
          className="w-full h-full object-cover rounded-lg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-white opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Student Feedback</h2>
        <p className="text-gray-600 mt-2 text-lg">Customers LOVE Course Builder Theme</p>

        {/* Testimonial Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80 transition transform hover:-translate-y-2 hover:scale-105 duration-300"
            >
              <div className="flex items-center gap-4">
                {/* User Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  {/* Name */}
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  {/* Stars */}
                  <div className="flex text-yellow-500">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                  </div>
                </div>
              </div>
              {/* Feedback */}
              <p className="text-gray-600 mt-4">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
