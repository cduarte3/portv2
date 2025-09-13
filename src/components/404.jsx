import React from "react";

export default function Not() {
  return (
    <div className="min-h-[90vh] relative bg-[#1C1C1C] text-center flex flex-col justify-center">
      <div className="max-w-[60%] mx-auto text-white">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 p-4">
          404 - Page Not Found
        </h1>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold p-4">
          These are not the droids you are looking for.
        </p>
        <img
          src="https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-experiment-robot-program-r2-d2-png-image_5196793.png"
          alt="R2D2"
          className="mx-auto rounded-lg max-w-[60%]"
          style={{ display: "block" }}
        ></img>{" "}
      </div>
    </div>
  );
}
