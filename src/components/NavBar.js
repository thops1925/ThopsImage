import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ toggle }) {
  return (
    <nav
      className="flex px-4 sticky top-0
      justify-between items-center
       h-16 bg-white text-black 
       mx-90 shadow-sm font-mono "
      role="navigation"
    >
      <Link
        to="/"
        className="h-14 w-14 rounded-full text-sm 
        bg-black text-gray-200 flex select-none
            border-4 border-red-900 justify-center 
            items-center overflow-hidden  justify md:ml-32"
      >
        Thopz
      </Link>

      <div className="px-4 cursor-pointer md:hidden">
        <svg
          onClick={toggle}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="mx-32 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/Gallery">
          Gallery
        </Link>
        <Link className="p-4" to="/Contact">
          Contact
        </Link>
        <Link className="p-4" to="/About">
          About
        </Link>
      </div>
    </nav>
  );
}
