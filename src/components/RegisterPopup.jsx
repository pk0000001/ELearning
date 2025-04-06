import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import LoginPopup from "./LoginPopup";
import axios from "axios";

export default function RegisterPopup({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Form Handling with Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // ✅ Always call this hook at the top level

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", data);
      console.log("Registered Data:", data);
      alert(response.data.message);
      setTimeout(() => {
        setIsLoginOpen(true); // Open login popup
        onClose(); // Close register popup
      }, 500);
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  
    
    
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Register Popup */}
      <div className="fixed inset-0 flex items-center justify-center bg-linear-to-t from-blue-500 to-blue-950 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
          {/* Close Button */}
          <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={onClose}>
            <X size={20} />
          </button>

          {/* Logo & Title */}
          <div className="text-center">
            <img
              src="https://apkasiddharth.in/wp-content/uploads/2024/10/cropped-channels4_profile-removebg-preview.png"
              alt="Logo"
              className="mx-auto w-16 mb-2"
            />
            <h2 className="text-2xl text-black font-semibold">Create Account</h2>
            <p className="text-gray-600">Join StockEdge today</p>
          </div>

          {/* Social Signup Buttons */}
          <div className="mt-4 space-y-2">
            <button className="w-full flex text-zinc-800 items-center justify-center gap-2 p-2 border rounded-md hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Register with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">or Sign Up with Email</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Input Fields */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <input
                {...register("fullName", { required: "Full Name is required" })}
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border text-black placeholder-zinc-500 border-black rounded-md focus:outline-blue-500"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email Id"
                className="w-full p-2 border placeholder-zinc-500 text-black border-black rounded-md focus:outline-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <div className="relative">
                <input
                  {...register("password", { required: "Password is required" })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border placeholder-zinc-500 rounded-md text-black border-black pr-10 focus:outline-blue-500"
                />
                <button type="button" className="absolute right-3 top-2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

              <input
                {...register("mobile", { required: "Mobile Number is required" })}
                type="text"
                placeholder="Mobile Number"
                className="w-full p-2 border placeholder-zinc-500 text-black rounded-md border-black focus:outline-blue-500"
              />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
            </div>

            {/* Register Button */}
            <button type="submit" className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-3 text-gray-600">
            Already have an account?{" "}
            <button onClick={() => setIsLoginOpen(true)} className="text-blue-500 hover:underline">
              Login
            </button>
          </p>
        </div>
      </div>

      {/* Login Popup (Always rendered to maintain hook order) */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
