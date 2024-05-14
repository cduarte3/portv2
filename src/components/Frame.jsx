import React from "react";

export default function Frame() {
  return (
    <div className="max-w-full w-full h-full  mx-auto text-center flex flex-col justify-center text-white">
      <h1 class="text-4xl font-bold pb-4 pt-7">About Me</h1>
      <div class="grid max-w-screen-xl grid-cols-1 md:grid-cols-2 gap-8 p-4 mx-auto sm:p-8">
        <div class="text-center flex flex-col justify-center">
          <img
            src={process.env.PUBLIC_URL + '/profile.jpg'}
            alt="Christian"
            className="max-w-md mx-auto rounded-lg"
            style={{ display: "block", maxWidth: "100%" }}
          ></img>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-lg font-bold">
            Hello! My name is Christian Duarte, and I am an aspiring software
            developer. I have been enrolled in the BSD - Software Development
            course at Seneca Polytechnic for the last 3 years, and am currently
            on truck to finish my fourth and final year.
            <br />
            <br />I enjoy working with a variety of programming languages and
            frameworks, and am always looking to learn more. Below, you will
            find a list of some frameworks and languages that I have used or
            worked with so far in school and personal projects. I plan to have
            many projects completed in the near future.
          </p>
        </div>
      </div>
    </div>
  );
}
