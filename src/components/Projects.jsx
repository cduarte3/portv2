import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SplitText from "./SplitText";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Projects() {
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
          <Navbar currentPage="projects" />
          <div className="bg-[#1C1C1C] mb-[-5px] pb-20">
            <div className="mt-[-5px] min-h-[90vh] relative flex flex-col items-center">
              {isIOS ? (
                <h1 className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28">
                  PROJECTS
                </h1>
              ) : (
                <SplitText
                  text="PROJECTS"
                  className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28"
                />
              )}
              <Marquee speed={100} pauseOnHover={true}>
                <div className="flex flex-col items-center mx-10 h-[520px] lg:h-[620px]">
                  <div
                    className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat hover"
                    style={{ backgroundImage: "url(cc.png)" }}
                    onClick={() =>
                      window.open(
                        "https://chapterchat-bice.vercel.app",
                        "_blank"
                      )
                    }
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-6 text-center">
                    ChapterChat
                  </h2>
                  <Link
                    to="https://github.com/cduarte3/chapterchat"
                    target="blank"
                    className="font-radley text-[#EE6164] text-2xl mt-3"
                  >
                    <u className="font-radley">Source Code</u>
                  </Link>
                </div>

                <div className="flex flex-col items-center mx-10 h-[520px] lg:h-[620px]">
                  <div
                    className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat hover"
                    style={{ backgroundImage: "url(cc_mobile.png)" }}
                    onClick={() => (window.location.href = "/nonexistent")}
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    ChapterChat Mobile
                  </h2>
                </div>

                <div className="flex flex-col items-center mx-10 h-[520px] lg:h-[620px]">
                  <div
                    className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat hover"
                    style={{ backgroundImage: "url(f2.png)" }}
                    onClick={() =>
                      window.open(
                        "https://www.npmjs.com/package/f2read?activeTab=readme",
                        "_blank"
                      )
                    }
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    F2Read
                  </h2>
                  <Link
                    to="https://github.com/cduarte3/f2read"
                    target="blank"
                    className="font-radley text-[#EE6164] text-2xl mt-3"
                  >
                    <u className="font-radley">Source Code</u>
                  </Link>
                </div>

                <div className="flex flex-col items-center mx-10 h-[520px] lg:h-[620px]">
                  <div
                    className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat hover"
                    style={{ backgroundImage: "url(bjack.png)" }}
                    onClick={() =>
                      window.open(
                        "https://christianduarte7.itch.io/blackjack-demo",
                        "_blank"
                      )
                    }
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    BlackJack Pygame
                  </h2>
                  <Link
                    to="https://github.com/cduarte3/bjackv2"
                    target="blank"
                    className="font-radley text-[#EE6164] text-2xl mt-3"
                  >
                    <u className="font-radley">Source Code</u>
                  </Link>
                </div>

                <div className="flex flex-col items-center mx-10 h-[520px] lg:h-[620px]">
                  <div
                    className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat hover"
                    style={{ backgroundImage: "url(con4.png)" }}
                    onClick={() =>
                      window.open(
                        "https://christianduarte7.itch.io/connect-four",
                        "_blank"
                      )
                    }
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    Connect 4 Pygame
                  </h2>
                  <Link
                    to="https://github.com/cduarte3/connect4"
                    target="blank"
                    className="font-radley text-[#EE6164] text-2xl mt-3"
                  >
                    <u className="font-radley">Source Code</u>
                  </Link>
                </div>

                <div className="flex flex-col items-center mx-10 h-[520px] lg:h-[620px]">
                  <div
                    className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat hover"
                    style={{ backgroundImage: "url(aws.jpg)" }}
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=D5WmuvlWnvE",
                        "_blank"
                      )
                    }
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    AWS Microservice
                  </h2>
                </div>

                <div className="flex flex-col items-center mx-10 h-[520px] lg:h-[620px]">
                  <div
                    className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat hover"
                    style={{ backgroundImage: "url(weather.jpg)" }}
                    onClick={() =>
                      window.open(
                        "https://weather-app-gamma-cyan-66.vercel.app",
                        "_blank"
                      )
                    }
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    Weather App
                  </h2>
                  <Link
                    to="https://github.com/cduarte3/weather-app"
                    target="blank"
                    className="font-radley text-[#EE6164] text-2xl mt-3"
                  >
                    <u className="font-radley">Source Code</u>
                  </Link>
                </div>
              </Marquee>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
