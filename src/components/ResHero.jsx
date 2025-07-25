import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import SplitText from "./SplitText";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function ResHero() {
  const main = useRef();
  const smoother = useRef();
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices
    const detectIOS = () => {
      return (
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      );
    };

    setIsIOS(detectIOS());
  }, []);

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
          <Navbar currentPage="resume" />
          <div className="bg-[#1C1C1C] mb-[-5px]">
            <div className="mt-[-5px] min-h-[90vh] relative flex flex-col items-center">
              {isIOS ? (
                <h1 className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28">
                  RESUME
                </h1>
              ) : (
                <SplitText
                  text="RESUME"
                  className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28"
                />
              )}
              <div className="md:mt-28 pt-20 pb-20 border-4 border-[#EE6164] w-[70%] rounded-[4rem] px-8 flex flex-col items-center">
                <img
                  src="seneca_logo.png"
                  alt="Venngo Logo"
                  className="w-[50vw] lg:w-[35vw]"
                ></img>
                <div className="pt-20 flex flex-col items-center">
                  <h1 className="leading-[0.9] tracking-[-0.06em] text-white font-libre font-black text-[7vw] lg:text-[5vw] xl:text-[4vw] text-center">
                    IT Student Service Team Lead
                  </h1>
                  <h2 className="font-radley italic text-[#EE6164] text-[5vw] lg:text-[3vw] xl:text-[2.5vw]">
                    April 2024 - Sept 2024
                  </h2>
                  <FaLongArrowAltDown
                    className="text-[#EE6164] mt-10 mb-10"
                    size={50}
                  />
                  <h1 className="leading-[0.9] tracking-[-0.06em] text-white font-libre font-black text-[7vw] lg:text-[5vw] xl:text-[4vw] text-center">
                    C Programming TA
                  </h1>
                  <h2 className="font-radley italic text-[#EE6164] text-[5vw] lg:text-[3vw] xl:text-[2.5vw]">
                    Sept 2024 - Dec 2025
                  </h2>
                </div>
              </div>
              <BsThreeDotsVertical
                className="text-[#EE6164] mt-16 mb-16"
                size={100}
              />
              <div className="mb-28 pt-20 pb-20 border-4 border-[#EE6164] w-[70%] rounded-[4rem] px-8 flex flex-col items-center">
                <img
                  src="venngo_logo.png"
                  alt="Venngo Logo"
                  className="w-[50vw] lg:w-[35vw]"
                ></img>
                <div className="pt-20 flex flex-col items-center">
                  <h1 className="leading-[0.9] tracking-[-0.06em] text-white font-libre font-black text-[7vw] lg:text-[5vw] xl:text-[4vw] text-center">
                    QA Analyst Intern
                  </h1>
                  <h2 className="font-radley italic text-[#EE6164] text-[5vw] lg:text-[3vw] xl:text-[2.5vw]">
                    Jan 2025 - April 2025
                  </h2>
                  <FaLongArrowAltDown
                    className="text-[#EE6164] mt-10 mb-10"
                    size={50}
                  />
                  <h1 className="leading-[0.9] tracking-[-0.06em] text-white font-libre font-black text-[7vw] lg:text-[5vw] xl:text-[4vw] text-center ">
                    QA Analyst
                  </h1>
                  <h2 className="font-radley italic text-[#EE6164] text-[5vw] lg:text-[3vw] xl:text-[2.5vw]">
                    May 2025 - Present
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
