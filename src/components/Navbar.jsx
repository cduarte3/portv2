import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";

export default function Navbar({ currentPage }) {
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

  const getLinkStyle = (pageName) => {
    return `leading-[0.9] hover:text-[#EE6164] hover:italic mt-[-30px] px-2 w-[120px] inline-block font-radley ${
      currentPage === pageName ? "text-[#EE6164] italic font-radley" : ""
    }`;
  };

  const getSmallStyle = (pageName) => {
    return `hover:text-[#EE6164] hover:italic font-radley text-[7vw] sm:text-[6vw] md:text-[5vw] ${
      currentPage === pageName ? "text-[#EE6164] italic font-radley" : ""
    }`;
  };

  return (
    <>
      <div className="hidden lg:flex flex-wrap items-center w-full text-center text-white font-radley text-4xl justify-between gap-4 px-20 py-8 bg-[#1C1C1C]">
        <Link to="/about" className={getLinkStyle("about")}>
          <span className="font-radley inline-block">About</span>
        </Link>
        <Link to="/resume" className={getLinkStyle("resume")}>
          <span className="font-radley inline-block">Resume</span>
        </Link>
        <Link to="/">
          <BiHomeAlt2
            size={70}
            className={`hover:text-[#EE6164] ${
              currentPage === "home" ? "text-[#EE6164]" : ""
            }`}
          />
        </Link>
        <Link to="/projects" className={getLinkStyle("projects")}>
          <span className="font-radley inline-block">Projects</span>
        </Link>
        <Link to="/feedback" className={getLinkStyle("feedback")}>
          <span className="font-radley inline-block">Feedback</span>
        </Link>
      </div>

      <div className="lg:hidden font-radley text-4xl flex justify-between items-center p-8 bg-[#1C1C1C]">
        <Link to="/">
          <img
            src="site_logo.png"
            alt="site logo"
            className="max-w-[50px]"
          ></img>
        </Link>
        <div onClick={handleNav}>
          {!nav ? (
            <div>
              <AiOutlineClose size={50} className="text-[#EE6164]" />{" "}
            </div>
          ) : (
            <FaBars size={50} className="text-white" />
          )}
        </div>
        <div
          ref={navRef}
          className={
            !nav
              ? "z-50 fixed left-0 top-0 w-[50%] h-full border-r border-r-[#EE6164] bg-[#141414] opacity-90 text-white"
              : "fixed left-[-100%] top-0 w-[50%] h-full border-r"
          }
        >
          <ul className="pt-4 text-2xl font-radley">
            <li className="p-4 font-radley">
              <Link to="/" className={getSmallStyle("home")}>
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link to="/about" className={getSmallStyle("about")}>
                About
              </Link>
            </li>
            <li className="p-4 font-radley">
              <Link to="/resume" className={getSmallStyle("resume")}>
                Resume
              </Link>
            </li>
            <li className="p-4 font-radley">
              <Link to="/projects" className={getSmallStyle("projects")}>
                Projects
              </Link>
            </li>
            <li className="p-4 font-radley">
              <Link to="/feedback" className={getSmallStyle("feedback")}>
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
