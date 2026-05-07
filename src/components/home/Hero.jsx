import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
const { user } = useSelector((state) => state.auth);
const [menuOpen, setMenuOpen] = React.useState(false);

return (
<> <div className="min-h-screen pb-20">

    {/* Navbar */}
    <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
      <a href="#">
        <img src="/logo7.png" alt="logo" className="h-12 w-auto" />
      </a>

      <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
        <a href="#" className="hover:text-orange-500 transition">Home</a>
        <a href="#features" className="hover:text-orange-500 transition">Features</a>
        <a href="#cta" className="hover:text-orange-500 transition">Contact</a>
      </div>

      <div className="flex gap-2">
        <Link
          to="/app?state=register"
          className="hidden md:block px-6 py-2 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all rounded-full text-white"
          hidden={user}
        >
          Get started
        </Link>

        <Link
          to="/app?state=login"
          className="hidden md:block px-6 py-2 border border-orange-400 active:scale-95 hover:bg-orange-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
          hidden={user}
        >
          Login
        </Link>

        <Link
          to="/app"
          className="hidden md:block px-8 py-2 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all rounded-full text-white"
          hidden={!user}
        >
          Dashboard
        </Link>
      </div>

      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 5h16M4 12h16M4 19h16" />
        </svg>
      </button>
    </nav>

    {/* Mobile Menu */}
    <div
      className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <a href="#" className="text-white">Home</a>
      <a href="#features" className="text-white">Features</a>
      <a href="#cta" className="text-white">Contact</a>

      <button
        onClick={() => setMenuOpen(false)}
        className="aspect-square size-10 p-1 items-center justify-center bg-orange-500 hover:bg-orange-600 transition text-white rounded-md flex"
      >
        X
      </button>
    </div>

    {/* Hero Section */}
    <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">

      {/* Background Glow */}
      <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-orange-200 blur-[120px] opacity-40"></div>

      <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-24 md:leading-[70px]">
        Build smarter resumes with{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent text-nowrap">
          AI
        </span>{" "}
        and unclok your career potential.
      </h1>

      <p className="max-w-md text-center text-base my-7 text-slate-700">
        Create, edit and download professional resumes with AI-powered
        assistance.
      </p>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <Link
          to="/app"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-orange-300 flex items-center transition-colors"
        >
          Get started
        </Link>
      </div>

    </div>
  </div>

  <style>
    {`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    * {
      font-family: 'Poppins', sans-serif;
    }
    `}
  </style>
</>


);
};

export default Hero;
