import React from "react";
import { ReactTyped } from "react-typed";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Hero() {
  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen  mx-auto text-center flex flex-col justify-center text-white">
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 animate-jump animate-duration-[1200ms] animate-normal">
        Christian Duarte
      </h1>
      <div className="flex justify-center items-center">
        {/*<p className="md:text-5xl sm:text-4xl text-xl font-bold pl-20">Aspiring</p>*/}
        <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold"
          strings={["Software Developer", "Co-Op Student"]}
          typeSpeed={60}
          backSpeed={70}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            readOnly
            style={{ backgroundColor: "transparent", textAlign: "center" }}
          />
        </ReactTyped>
      </div>
      <div class="grid max-w-screen-xl grid-cols-4 gap-8 p-4 mx-auto sm:p-8">
        <div className="flex flex-col items-center justify-center transform hover:scale-125 transition">
          <a
            href="https://github.com/cduarte3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="xl:text-9xl md:text-8xl text-6xl" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center transform hover:scale-125 transition">
        <a
            href="https://www.linkedin.com/in/christian-duarte-97593329b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="xl:text-9xl md:text-8xl text-6xl" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center transform hover:scale-125 transition">
        <a
            href="mailto:christian.duarte7@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail className="xl:text-9xl md:text-8xl text-6xl" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center transform hover:scale-125 transition">
        <a
            href="https://www.instagram.com/christian.duarte7?igsh=Y3Q2N3c4dnh1cHJi&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="xl:text-9xl md:text-8xl text-6xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
