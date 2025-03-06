import React from "react";

const Hero = () => {
  return (
    <header
      className="flex flex-col justify-center items-center bg-transparent
    w-screen h-screen"
    >
      <figure
        className="flex flex-col bg-red-100 p-4 gap-4 justify-center
      items-center"
      >
        <img
          src="/img/avatar.jpg"
          className="rounded-full w-48 h-48"
          alt="Profile Picture"
        />
        <figcaption className="text-black text-5xl ">
          <h1>Hi, I'm Tannarin</h1>
        </figcaption>
        <figcaption className="text-black text-3xl">
          <h3>an Civil Engineer</h3>
        </figcaption>
        <figcaption className="text-black text-2xl">
          <h2>Turning vision into reality with precision and passion.</h2>
        </figcaption>
      </figure>
      <section>
        <button>Contact Me</button>
        <button>Resume</button>
      </section>
    </header>
  );
};

export default Hero;
