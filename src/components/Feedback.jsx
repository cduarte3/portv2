import React, { useState, useEffect } from "react";
import BasicRating from "./radio";
import Rating from "@mui/material/Rating";

export default function Feedback() {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    fetch("https://mongo-rest-production.up.railway.app/reviews")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [reviewMessage, setReviewMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements["u-name"].value;
    const review = event.target.elements["message"].value;

    if (name.length > 0 && review.length > 0) {
      fetch("https://mongo-rest.onrender.com/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, review, rating }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
        })
        .catch((error) => {
          setReviewMessage(error);
          console.error("Error:", error);
        });
    } else {
      setReviewMessage("Please fill out all fields");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-[40px] mx-auto flex-grow h-full text-center justify-center max-w-full"
      >
        <h1 className="text-center justify-center font-bold block mb-2 md:text-7xl sm:text-6xl text-5xl text-white">
          Feedback
        </h1>
        <label
          htmlFor="message"
          className="p-5 text-center justify-center block mb-2 text-2xl font-medium text-white"
        >
          Leave some feedback, improvements, or suggestions below!
        </label>
        <label
          htmlFor="u-name"
          className="p-5 text-center justify-center inline-block text-2xl font-medium text-white"
        >
          Name:
        </label>
        <input
          className="max-w-full p-2 mb-5 font-bold rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          type="text"
          id="u-name"
          name="u-name"
        ></input>
        <textarea
          id="message"
          rows="4"
          className="p-[20px] block w-full h-[30vh] text-lg rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a comment..."
          style={{ resize: "none" }}
        ></textarea>
        <BasicRating value={rating} setRating={setRating} />
        <button className="text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:text-2xl text-xl p-4">
          Submit
        </button>
      </form>
      <div className="col-span-full flex items-center justify-center">
            <p className="p-5 mt-[-30px] text-center block mb-2 text-xl sm:text-2xl font-medium text-white">
              {reviewMessage}
            </p>
      </div>
      <div className="flex-grow grid w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mx-auto text-white justify-center pb-10">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="w-[90%] sm:w-[70%]  md:w-full p-4 border-4 rounded-lg shadow bg-gray-800 border-white mx-auto"
            >
              <p className="font-bold pb-4" style={{ wordWrap: 'break-word' }}>{item.review}</p>
              <p className="pb-4">- {item.name}</p>
              <p className="pb-4">
                {new Date(item.date).toISOString().split("T")[0]}
              </p>
              <Rating value={item.rating} readOnly />
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
  );
}
