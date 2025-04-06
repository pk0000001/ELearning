import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";

export default function NavBar() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current page path

  // Open Register and close menu
  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
    setMenuOpen(false);
  };

  // Open Login and close menu
  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setMenuOpen(false);
  };

  // Check scroll position to change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add background after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if on the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 transition-all duration-300
        ${isHomePage && !isScrolled ? "bg-transparent text-white" : "bg-white text-black shadow-md"}`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src="https://apkasiddharth.in/wp-content/uploads/2024/10/cropped-channels4_profile-removebg-preview.png"
          className="w-12 sm:w-16"
          alt="Logo"
        />
      </Link>

      {/* Hamburger Menu (for mobile) */}
      <button
        className="block sm:hidden text-current"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links (Desktop) */}
      <div className="hidden sm:flex space-x-6">
        {["Home", "Dashboard", "All Courses", "Mock Test"].map((item, index) => (
          <NavLink
            key={index}
            to={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-blue-800 hover:text-white"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>

      {/* Buttons (Desktop) */}
      <div className="hidden sm:flex space-x-4 px-8">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="px-4 py-2 border border-black rounded-md hover:bg-blue-800 hover:text-white transition"
        >
          Login
        </button>
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="px-4 py-2 border border-black rounded-md hover:bg-blue-800 hover:text-white transition"
        >
          Register
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center sm:hidden">
          {["Home", "Dashboard", "All Courses", "Mock Test"].map((item, index) => (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
              className="w-full text-center py-3 border-b text-gray-700 hover:bg-blue-800 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
          {/* Login Button in Mobile Menu */}
          <button
            className="w-full py-3 border-b text-black hover:bg-blue-800 hover:text-white"
            onClick={handleOpenLogin}
          >
            Login
          </button>

          {/* Register Button in Mobile Menu */}
          <button
            className="w-full py-3 border-b text-black hover:bg-blue-800 hover:text-white"
            onClick={handleOpenRegister}
          >
            Register
          </button>
        </div>
      )}

      {/* Popups for Login & Register */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterPopup isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </nav>
  );
}
