import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SplitText from "./SplitText";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Projects() {
  const main = useRef();
  const smoother = useRef();
  const [isIOS, setIsIOS] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
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
    { scope: main },
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
              <div className="sm:hidden flex justify-center gap-4 mb-20">
                <button
                  className="bg-[#EE6164] hover:bg-[#d45558] text-white p-4 rounded-full"
                  onClick={scrollPrev}
                >
                  <svg className="w-6 h-6" viewBox="0 0 532 532">
                    <path
                      fill="currentColor"
                      d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                    ></path>
                  </svg>
                </button>
                <button
                  className="bg-[#EE6164] hover:bg-[#d45558] text-white p-4 rounded-full"
                  onClick={scrollNext}
                >
                  <svg className="w-6 h-6" viewBox="0 0 532 532">
                    <path
                      fill="currentColor"
                      d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="w-full relative flex items-center">
                <button
                  className="hidden sm:block absolute left-4 z-10 bg-[#EE6164] hover:bg-[#d45558] text-white p-4 rounded-full"
                  onClick={scrollPrev}
                >
                  <svg className="w-6 h-6" viewBox="0 0 532 532">
                    <path
                      fill="currentColor"
                      d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                    ></path>
                  </svg>
                </button>
                <div className="overflow-hidden flex-1 sm:px-20" ref={emblaRef}>
                  <div className="flex gap-10 px-10">
                    <div className="flex flex-col items-center h-[520px] lg:h-[620px] flex-[0_0_auto]">
                      <div
                        className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
                        style={{ backgroundImage: "url(pr.png)" }}
                        onClick={() =>
                          window.open("https://www.pullrates.com", "_blank")
                        }
                      ></div>
                      <h2 className="font-libre font-black text-white text-3xl mt-6 text-center">
                        Pull Rates
                      </h2>
                    </div>

                    <div className="flex flex-col items-center h-[520px] lg:h-[620px] flex-[0_0_auto]">
                      <div
                        className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
                        style={{ backgroundImage: "url(cc.png)" }}
                        onClick={() =>
                          window.open("https://www.chaptr.net", "_blank")
                        }
                      ></div>
                      <h2 className="font-libre font-black text-white text-3xl mt-6 text-center">
                        Chaptr
                      </h2>
                      <Link
                        to="https://github.com/cduarte3/chapterchat"
                        target="blank"
                        className="font-radley text-[#EE6164] text-2xl mt-3"
                      >
                        <u className="font-radley">Source Code</u>
                      </Link>
                    </div>

                    <div className="flex flex-col items-center h-[520px] lg:h-[620px] flex-[0_0_auto]">
                      <div
                        className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
                        style={{ backgroundImage: "url(f2.png)" }}
                        onClick={() =>
                          window.open(
                            "https://www.npmjs.com/package/f2read?activeTab=readme",
                            "_blank",
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

                    <div className="flex flex-col items-center h-[520px] lg:h-[620px] flex-[0_0_auto]">
                      <div
                        className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
                        style={{ backgroundImage: "url(bjack.png)" }}
                        onClick={() =>
                          window.open(
                            "https://christianduarte7.itch.io/blackjack-demo",
                            "_blank",
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

                    <div className="flex flex-col items-center h-[520px] lg:h-[620px] flex-[0_0_auto]">
                      <div
                        className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
                        style={{ backgroundImage: "url(con4.png)" }}
                        onClick={() =>
                          window.open(
                            "https://christianduarte7.itch.io/connect-four",
                            "_blank",
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

                    <div className="flex flex-col items-center h-[520px] lg:h-[620px] flex-[0_0_auto]">
                      <div
                        className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
                        style={{ backgroundImage: "url(aws.jpg)" }}
                        onClick={() =>
                          window.open(
                            "https://www.youtube.com/watch?v=D5WmuvlWnvE",
                            "_blank",
                          )
                        }
                      ></div>
                      <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                        AWS Microservice
                      </h2>
                    </div>

                    <div className="flex flex-col items-center h-[520px] lg:h-[620px] flex-[0_0_auto]">
                      <div
                        className="border-4 border-[#EE6164] w-[300px] lg:w-[400px] h-[300px] lg:h-[500px] rounded-[4rem] bg-cover bg-center bg-no-repeat hover:cursor-pointer"
                        style={{ backgroundImage: "url(weather.jpg)" }}
                        onClick={() =>
                          window.open(
                            "https://weather-app-gamma-cyan-66.vercel.app",
                            "_blank",
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
                  </div>
                </div>
                <button
                  className="hidden sm:block absolute right-4 z-10 bg-[#EE6164] hover:bg-[#d45558] text-white p-4 rounded-full"
                  onClick={scrollNext}
                >
                  <svg className="w-6 h-6" viewBox="0 0 532 532">
                    <path
                      fill="currentColor"
                      d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
