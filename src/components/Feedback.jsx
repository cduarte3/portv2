import React, { useState, useEffect, useRef } from "react";
import BasicRating from "./radio";
import Rating from "@mui/material/Rating";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SplitText from "./SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Feedback() {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(3);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_FEEDBACK_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.reviews || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setData([]);
        setLoading(false);
      });
  }, []);

  const [reviewMessage, setReviewMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements["u-name"].value;
    const feedback = event.target.elements["message"].value;

    if (name.length > 0 && feedback.length > 0) {
      fetch(process.env.REACT_APP_FEEDBACK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, feedback, rating }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
        })
        .catch((error) => {
          setReviewMessage("Failed to submit review. Please try again.");
          console.error("Error:", error);
        });
    } else {
      setReviewMessage("Please fill out all fields");
    }
  };

  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
      smoother.current.scrollTo(0, false);

      /*
      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: false,
      });
      */
    },
    { scope: main }
  );

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <Navbar currentPage="feedback" />
          <div className="bg-[#1C1C1C] mb-[-5px]">
            <div className="mt-[-5px] min-h-[90vh] relative flex flex-col items-center">
              <form
                onSubmit={handleSubmit}
                className="p-[40px] mx-auto flex-grow h-full text-center justify-center max-w-full"
              >
                {isIOS ? (
                  <h1 className="mt-28 font-libre font-black text-white text-[14vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28">
                    FEEDBACK
                  </h1>
                ) : (
                  <SplitText
                    text="FEEDBACK"
                    className="mt-28 font-libre font-black text-white text-[15vw] md:text-[10vw] text-center leading-[0.9] tracking-[-0.06em] px-4 mb-28"
                  />
                )}
                <label
                  htmlFor="message"
                  className="font-radley italic text-[#EE6164] text-[5vw] lg:text-[3vw] xl:text-[2.5vw] text-center justify-center block"
                >
                  Leave some feedback, improvements, or suggestions below!
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-28 mb-10">
                  <label
                    htmlFor="u-name"
                    className="text-white font-libre font-black text-2xl sm:text-3xl md:text-4xl"
                  >
                    Name:
                  </label>
                  <input
                    className="p-4 text-lg sm:text-xl md:text-2xl rounded-3xl border-4 bg-[#1C1C1C] border-[#EE6164] font-radley text-white w-full sm:w-auto"
                    type="text"
                    id="u-name"
                    name="u-name"
                  />
                </div>
                <textarea
                  id="message"
                  rows="4"
                  className="justify-center mx-auto mb-10 p-5 block w-[90%] h-[30vh] text-2xl rounded-3xl border-4 bg-[#1C1C1C] border-[#EE6164] font-radley text-white placeholder-[#a7a7a7]"
                  placeholder="Leave a comment..."
                  maxLength="1000"
                  style={{
                    resize: "none",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#EE6164 #1C1C1C",
                  }}
                ></textarea>
                <div className="flex flex-col items-center justify-center">
                  <BasicRating value={rating} setRating={setRating} />
                </div>

                <button className="mt-10 font-radley text-white bg-[#EE6164] rounded-3xl hover:bg-[#5f2627] focus:outline-none sm:text-2xl text-xl p-4 w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%]">
                  Submit
                </button>
              </form>
              <div className="col-span-full flex items-center justify-center mt-10">
                <p className="p-5 mt-[-30px] text-center block mb-2 text-xl sm:text-2xl font-medium text-white">
                  {reviewMessage}
                </p>
              </div>
              <div className="flex-grow grid w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mx-auto text-white justify-center pb-10">
                {loading ? (
                  <div className="col-span-full flex items-center justify-center">
                    <p className="p-5 mt-[-30px] text-center block mb-2 text-xl sm:text-2xl font-medium text-white">
                      Loading reviews...
                    </p>
                  </div>
                ) : data && data.length > 0 ? (
                  data.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-center items-center text-center w-[90%] sm:w-[70%] md:w-full p-10 border-4 rounded-3xl shadow border-[#EE6164] mx-auto"
                    >
                      <p
                        className="font-bold text-3xl pb-4"
                        style={{ wordWrap: "break-word" }}
                      >
                        {item.feedback}
                      </p>
                      <p className="text-2xl font-radley italic text-[#EE6164] pb-4">
                        - {item.name}
                      </p>
                      <Rating
                        value={item.rating}
                        readOnly
                        sx={{
                          fontSize: {
                            xs: "3rem",
                          },
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center">
                    <p className="p-5 mt-[-30px] text-center block mb-2 text-xl sm:text-2xl font-medium text-white">
                      No reviews Yet
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
