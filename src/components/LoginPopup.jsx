import { useEffect, useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import RegisterPopup from "./RegisterPopup";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function LoginPopup({ isOpen, onClose }) {
  const navigate = useNavigate(); // ✅ Initialize navigation
  // Hooks must be called at the top level
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  
// Check if user is authenticated on load
useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  axios.get('http://localhost:5000/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  })
  .then(res => {
    setUser(res.data);
  })
  .catch((err) => {
    console.error("Error fetching user:", err);
  });
}, []);


useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const role = urlParams.get("role");

  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    navigate("/"); // Redirect to homepage or dashboard
  }
}, []);

  // useForm hook should be here, not after the return statement
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Login Data:", data);
      const response = await axios.post("http://localhost:5000/api/login", data, { withCredentials: true,});
      alert("Login successful! Token: " + response.data.token);
      localStorage.setItem("token", response.data.token); // Store token for authentication
      onClose();
      window.location.reload(); // Optional: Refresh to reflect logged-in UI
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = () => {
    window.open("http://localhost:5000/api/google", "_self");
  };

  
  // Conditional return must come after all hooks
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center w-full justify-center bg-linear-to-t from-blue-500 to-blue-950 bg-opacity-50">
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
          <h2 className="text-2xl text-black font-semibold">Login</h2>
          <p className="text-gray-600">to continue with StockEdge</p>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-4 space-y-2">
        <button onClick={handleGoogleLogin} className="w-full flex items-center text-zinc-800 justify-center gap-2 p-2 border rounded-md hover:bg-gray-100" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="w-full flex items-center text-zinc-800 justify-center gap-2 p-2 border rounded-md hover:bg-gray-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center text-zinc-800 justify-center gap-2 p-2 border rounded-md hover:bg-gray-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5" />
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">or Login with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Email & Password Fields */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full p-2 placeholder-zinc-500 border border-black rounded-md focus:outline-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border rounded-md text-black border-black placeholder-zinc-500 pr-10 focus:outline-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}

            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <input
            type="submit"
            value="Login"
            className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
          />
        </form>

        {/* Signup Link */}
        <p className="text-center mt-3 text-gray-600">
          Don't have an account?{" "}
          <button onClick={() => setIsRegisterOpen(true)} className="text-blue-500 hover:underline">
            Create Account
          </button>
        </p>
        <RegisterPopup isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      </div>
    </div>
  );
}
