import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Footer from "./Footer";
import SplitText from "./SplitText";
import PictureCard from "./PictureCard";
import { GitHubCalendar } from "github-contribution-calendar";
import Softwares from "./Softwares";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

/* 
import Lanyard from "./Lanyard";
<Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={10}
          transparent={true}
        />
*/

export default function About() {
  const main = useRef();
  const smoother = useRef();

  const dark_theme = {
    noContributions: "#262626",
    low: "#FF9698",
    moderate: "#FF6163",
    high: "#FF262A",
    veryHigh: "#660002",
  };

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
          <Navbar currentPage="about" />
          <div className="bg-[#1C1C1C] mb-[-5px]">
            <div className="mt-[-5px] min-h-[90vh] relative flex flex-col items-center">
              <SplitText
                text="ABOUT ME"
                className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28"
              />
              <PictureCard
                className="w-[60vw] sm:w-[40vw] md:w-[35vw] xl:w-[25vw] mb-28"
                spotlightColor="rgb(238 97 100)"
              >
                <img src="profile-sm.png" alt="Christian Duarte"></img>
              </PictureCard>
              <h2 className="text-white font-radley text-[5vw] sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] text-center px-4 max-w-[75vw] xl:max-w-[60vw] mb-56">
                Hello! My name is Christian Duarte, and I am an aspiring
                Software Developer. I am currently on track to graduate from the
                BSD - Software Development program at Seneca Polytechnic by
                August 2025. <br /> <br /> I enjoy working with a variety of
                programming languages and frameworks, and am always looking to
                learn more. Below, you will find my GitHub contributions, as
                well as a list of some frameworks and languages I have used in
                coursework and personal projects.
              </h2>

              <div className="max-w-[90vw] flex flex-col items-center justify-center mx-auto min-h-[100vh]">
                <h2 className="font-libre font-black text-white text-[10vw] lg:text-[8vw] xl:text-[5vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-10 lg:mb-28">
                  Github Contributions
                </h2>
                <GitHubCalendar
                  username="cduarte3"
                  token={process.env.REACT_APP_GITHUB_TOKEN}
                  year={2024}
                  showLabels={true}
                  theme="custom"
                  customTheme={dark_theme}
                  titleColor="#EE6164"
                  labelColor="white"
                  background="#1C1C1C"
                />
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center mx-auto min-h-[100vh]">
              <h2 className="font-libre font-black text-white text-[10vw] lg:text-[8vw] xl:text-[5vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-10 lg:mb-28">
                Software Proficiencies
              </h2>
              <Softwares />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
