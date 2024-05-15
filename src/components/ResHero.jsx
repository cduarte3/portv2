import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

export default function ResHero() {
  return (
      <div className="grid max-w-screen-xl md:h-full lg:h-screen sm:grid-cols-1 lg:grid-cols-2 gap-8 pt-[150px] mx-auto sm:p-8 text-white justify-center text-center">
        <div class="text-center flex flex-col justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Seneca-logo.svg/800px-Seneca-logo.svg.png"
            alt="Seneca Polytechnic"
            className="mx-auto rounded-lg"
            style={{ display: "block" }}
          ></img>
        </div>
        <div class="flex flex-col justify-center lg:text-right text-center">
          <h1 className="lg:text-6xl text-4xl font-bold pb-4 pr-2">Seneca Polytechnic</h1>
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold p-2">ITS Service Desk Representative</h2>
          <h3 className="lg:text-3xl md:text-2xl text-xl font-bold p-2">April 2024 - September 2024</h3>
        </div>
        <div class="text-center flex flex-col justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Seneca-logo.svg/800px-Seneca-logo.svg.png"
            alt="Seneca Polytechnic"
            className="mx-auto rounded-lg"
            style={{ display: "block" }}
          ></img>
        </div>
        <div class="flex flex-col justify-center lg:text-right text-center">
          <h1 className="lg:text-6xl text-4xl font-bold pb-4 pr-2">Seneca Polytechnic</h1>
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold p-2">ITS Service Desk Representative</h2>
          <h3 className="lg:text-3xl md:text-2xl text-xl font-bold p-2">April 2024 - September 2024</h3>
        </div>
      </div>
      
  );
}
