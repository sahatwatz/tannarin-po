import React from "react";

const Hero = () => {
  return (
    <div
      className="relative z-10 bg-amber-100 w-screen h-screen text-red-400
     border-red-600 border-6 flex items-center justify-center max-md:flex-col-reverse"
    >
      <div
        className="bg-amber-400 border-4 border-red-600 flex
      justify-center items-center flex-1  h-128"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolor
          voluptates provident debitis possimus eligendi, nobis corrupti quasi
          quo veniam ut? Cum laborum molestias animi sequi officia iusto
          eligendi nemo!
        </p>
      </div>
      <div
        className="flex-1 bg-amber-200 border-4 border-red-600 flex
      justify-center items-center w-screen h-128"
      >
        This is where your Image will be display
      </div>
    </div>
  );
};

export default Hero;
