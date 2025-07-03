import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import Footer from "./Footer";
import SplitText from "./SplitText";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
      smoother.current.scrollTo(0, false);

      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: false,
      });
    },
    { scope: main }
  );
  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <div className="bg-[#1C1C1C] mb-[-5px]">
            <div className=" min-h-[100vh] relative flex flex-col items-center justify-center">
              <div className="flex flex-col">
                <SplitText
                  text="CHRISTIAN"
                  className="font-libre font-black text-white text-[15vw] text-center leading-[0.9] tracking-[-0.06em]"
                />
                <SplitText
                  text="DUARTE"
                  className="font-libre font-black text-white text-[15vw] text-center leading-[0.9] tracking-[-0.06em]"
                />
              </div>
              <h2 className="text-[#EE6164] font-radley italic text-[6vw] lg:text-[5vw]">
                Software Developer
              </h2>
              <div>
                <ul className="flex justify-center mt-4 space-x-10">
                  <li>
                    <a
                      href="https://github.com/cduarte3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#EE6164]"
                    >
                      <IoLogoGithub className="w-[10vw] h-[10vw] xl:w-[6vw] xl:h-[6vw] transform hover:scale-125 transition" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/christian-duarte-97593329b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#EE6164]"
                    >
                      <FaLinkedin className="w-[10vw] h-[10vw] xl:w-[6vw] xl:h-[6vw] transform hover:scale-125 transition" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:christian.duarte7@outlook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#EE6164]"
                    >
                      <MdAttachEmail className="w-[10vw] h-[10vw] xl:w-[6vw] xl:h-[6vw] transform hover:scale-125 transition" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/christian.duarte7?igsh=Y3Q2N3c4dnh1cHJi&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#EE6164]"
                    >
                      <RiInstagramFill className="w-[10vw] h-[10vw] xl:w-[6vw] xl:h-[6vw] transform hover:scale-125 transition" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-h-[100vh] max-w-[90vw] flex flex-col items-center justify-center mx-auto">
              <ul>
                <li className="text-white font-radley text-[6vh] xl:text-[6vw] text-center leading-[0.9] mb-10 hover:text-[#EE6164] hover:italic">
                  <Link to="/about" className="font-radley">
                    About
                  </Link>
                </li>
                <li className="text-white font-radley text-[6vh] xl:text-[6vw] text-center leading-[0.9] mb-10 hover:text-[#EE6164] hover:italic">
                  <Link to="/resume" className="font-radley">
                    Resume
                  </Link>
                </li>
                <li className="text-white font-radley text-[6vh] xl:text-[6vw] text-center leading-[0.9] mb-10 hover:text-[#EE6164] hover:italic">
                  <Link to="/projects" className="font-radley">
                    Projects
                  </Link>
                </li>
                <li className="text-white font-radley text-[6vh] xl:text-[6vw] text-center leading-[0.9] mb-10 hover:text-[#EE6164] hover:italic">
                  <Link to="/feedback" className="font-radley">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
