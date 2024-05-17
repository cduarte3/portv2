import React from "react";

export default function Feedback() {
  return (
    <div className="min-h-screen flex flex-col">
      <form className="p-[30px] mx-auto flex-grow">
        <label
          for="message"
          className="text-center justify-center font-bold block mb-2 md:text-7xl sm:text-6xl text-5xl dark:text-white"
        >
          Feedback
        </label>
        <label
          for="message"
          className="p-5 text-center justify-center block mb-2 text-2xl font-medium dark:text-white"
        >
          Leave some feedback, comments, or suggestions below!
        </label>
        <textarea
          id="message"
          rows="4"
          className="p-[30px] block w-full max-h-screen text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        
      </form>
    </div>
  );
}
