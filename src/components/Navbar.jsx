import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(true);
  const navRef = useRef();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 bg-[#141630] text-white">
      <h1 className="w-full text-3xl font-bold text-white"><Link to="/">CD</Link></h1>
      <ul className="hidden md:flex text-2xl">
        <li className="p-4 font-bold"><Link to="/">Home</Link></li>
        <li className="p-4 font-bold"><Link to="/resume">Resume</Link></li>
        <li className="p-4 font-bold"><Link to="/projects">Projects</Link></li>
        <li className="p-4 font-bold"><Link to="/feedback">Feedback</Link></li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <FaBars size={30} />}
      </div>

      <div
        id="dark-blue-div"
        ref={navRef}
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#141630] opacity-90"
            : "fixed left-[-100%] top-0 w-[50%] h-full border-r border-r-gray-900 bg-blue-800"
        }
      >
        <ul className="pt-4 uppercase text-2xl">
        <li className="p-4 font-bold"><Link to="/">Home</Link></li>
        <li className="p-4 font-bold"><Link to="/resume">Resume</Link></li>
        <li className="p-4 font-bold"><Link to="/projects">Projects</Link></li>
        <li className="p-4 font-bold"><Link to="/feedback">Feedback</Link></li>
        </ul>
      </div>
    </div>
  );
}
