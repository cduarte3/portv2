import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import SplitText from "./SplitText";
import PictureCard from "./PictureCard";
import Softwares from "./Softwares";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const LEVEL_COLORS = ["#262626", "#FF9698", "#FF6163", "#FF262A", "#660002"];

// Computes longest and current streak (consecutive days with count > 0) from contribution list
function getStreaks(contributions) {
  let longest = 0;
  let running = 0;
  contributions.forEach((day) => {
    running = day.count > 0 ? running + 1 : 0;
    longest = Math.max(longest, running);
  });

  let current = 0;
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].count > 0) current++;
    else break;
  }

  return { longest, current };
}

// Renders a GitHub-style contribution grid from { date, count, level } entries
function ContributionCalendar({ contributions, total, username }) {
  if (!contributions.length) {
    return <p className="text-white text-lg">No contributions found</p>;
  }

  const { longest, current } = getStreaks(contributions);

  const weeks = [];
  let currentWeek = [];
  contributions.forEach((day, i) => {
    currentWeek.push(day);
    if (new Date(day.date).getDay() === 6 || i === contributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-6 sm:gap-10 text-white text-center flex-wrap justify-center">
        <div>
          <p className="text-2xl sm:text-3xl font-libre font-black">{total}</p>
          <p className="text-xs sm:text-sm text-gray-400">Contributions</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-libre font-black">
            {longest}
          </p>
          <p className="text-xs sm:text-sm text-gray-400">Longest Streak</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-libre font-black">
            {current}
          </p>
          <p className="text-xs sm:text-sm text-gray-400">Current Streak</p>
        </div>
      </div>
      <div className="flex gap-1 overflow-x-auto max-w-full pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.count} contributions on ${day.date}`}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                style={{ backgroundColor: LEVEL_COLORS[day.level] }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-white text-xs">
        <span>Less</span>
        {LEVEL_COLORS.map((color) => (
          <div
            key={color}
            className="w-2.5 h-2.5 rounded-sm"
            style={{ backgroundColor: color }}
          />
        ))}
        <span>More</span>
      </div>
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#EE6164] font-radley hover:italic"
      >
        View full profile on GitHub
      </a>
    </div>
  );
}

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
  const [isIOS, setIsIOS] = useState(false);
  const [contributions, setContributions] = useState([]);
  const [calendarTotal, setCalendarTotal] = useState(0);
  const [calendarLoading, setCalendarLoading] = useState(true);
  const [calendarError, setCalendarError] = useState(null);
  const githubUsername = process.env.REACT_APP_GITHUB_USERNAME || "cduarte3";

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

  useEffect(() => {
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setContributions(data.contributions || []);
        setCalendarTotal(
          Object.values(data.total || {}).reduce((sum, n) => sum + n, 0),
        );
        setCalendarLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load contributions:", err);
        setCalendarError(err.message);
        setCalendarLoading(false);
      });
  }, [githubUsername]);

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

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <Navbar currentPage="about" />
          <div className="bg-[#1C1C1C] mb-[-5px]">
            <div className="mt-[-5px] min-h-[90vh] relative flex flex-col items-center">
              {isIOS ? (
                <h1 className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28">
                  ABOUT ME
                </h1>
              ) : (
                <SplitText
                  text="ABOUT ME"
                  className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28"
                />
              )}
              <PictureCard
                className="w-[60vw] sm:w-[40vw] md:w-[35vw] xl:w-[25vw] mb-28"
                spotlightColor="rgb(238 97 100)"
              >
                <img src="profile-2.jpg" alt="Christian Duarte"></img>
              </PictureCard>
              <h2 className="text-white font-radley text-[5vw] sm:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] text-center px-4 max-w-[75vw] xl:max-w-[60vw] mb-56">
                Hello! My name is Christian Duarte, and I am an aspiring
                Software Developer. In August 2025 I graduated from the BSD -
                Software Development program at Seneca Polytechnic. <br />{" "}
                <br /> I enjoy working with a variety of programming languages
                and frameworks, and am always looking to learn more. Below, you
                will find my GitHub contributions, as well as a list of some
                frameworks and languages I have used in coursework and personal
                projects.
              </h2>

              <div className="max-w-[90vw] flex flex-col items-center justify-center mx-auto min-h-[100vh]">
                <h2 className="font-libre font-black text-white text-[10vw] lg:text-[8vw] xl:text-[5vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-10 lg:mb-28">
                  Github Contributions
                </h2>
                {calendarLoading ? (
                  <p className="text-white text-lg">Loading calendar...</p>
                ) : calendarError ? (
                  <div className="text-center max-w-md">
                    <p className="text-white text-lg mb-4">
                      Check out my work on GitHub
                    </p>
                    <a
                      href={`https://github.com/${githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-[#EE6164] text-white font-radley rounded-3xl hover:bg-[#5f2627] transition-colors"
                    >
                      Visit My GitHub
                    </a>
                  </div>
                ) : (
                  <ContributionCalendar
                    contributions={contributions}
                    total={calendarTotal}
                    username={githubUsername}
                  />
                )}
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
