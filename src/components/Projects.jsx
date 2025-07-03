import React from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Footer from "./Footer";
import SplitText from "./SplitText";
import { HorizontalTicker } from "react-infinite-ticker";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Projects() {
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
          <Navbar currentPage="projects" />
          <div className="bg-[#1C1C1C] mb-[-5px]">
            <div className="mt-[-5px] min-h-[90vh] relative flex flex-col items-center">
              <SplitText
                text="PROJECTS"
                className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28"
              />
              <HorizontalTicker duration={35000}>
                <div className="flex flex-col items-center mx-10">
                  <div
                    className="border-4 border-[#EE6164] w-[400px] h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(cc.png)" }}
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    ChapterChat
                  </h2>
                </div>

                <div className="flex flex-col items-center mx-10">
                  <div
                    className="border-4 border-[#EE6164] w-[400px] h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(cc.png)" }}
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    ChapterChat Mobile
                  </h2>
                </div>

                <div className="flex flex-col items-center mx-10">
                  <div
                    className="border-4 border-[#EE6164] w-[400px] h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(bjack.jpg)" }}
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    BlackJack Pygame
                  </h2>
                </div>

                <div className="flex flex-col items-center mx-10">
                  <div
                    className="border-4 border-[#EE6164] w-[400px] h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(con4.png)" }}
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    Connect 4 Pygame
                  </h2>
                </div>

                <div className="flex flex-col items-center mx-10">
                  <div
                    className="border-4 border-[#EE6164] w-[400px] h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(aws.jpg)" }}
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    AWS Microservice
                  </h2>
                </div>

                <div className="flex flex-col items-center mx-10">
                  <div
                    className="border-4 border-[#EE6164] w-[400px] h-[500px] rounded-[4rem] flex-shrink-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(weather.jpg)" }}
                  ></div>
                  <h2 className="font-libre font-black text-white text-3xl mt-4 text-center">
                    Weather App
                  </h2>
                </div>
              </HorizontalTicker>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
