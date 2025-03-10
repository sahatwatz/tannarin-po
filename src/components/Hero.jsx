import React from "react";

const Hero = () => {
  return (
    <header
      className="flex flex-col justify-center items-center bg-transparent
    w-screen h-screen bg-gradient-to-b custom-gradient"
      id="home"
    >
      <aside className="bg-[rgba(255,255,255,0.5)] rounded-2xl px-4 py-1 shadow-2xl border-1 border-gray-50 mt-[8%]">
        <span aria-label="working status" title="working status">
          <p className="text-black">
            🔧 Currently working at{" "}
            <a className="cursor-pointer hover:text-blue-500">
              <b className="">Rayan Civil</b>
            </a>
          </p>
        </span>
      </aside>
      <figure
        className="flex flex-col p-4 mt-4 gap-8 justify-center
      items-center "
      >
        <img
          src="/img/profile.jpeg"
          className="rounded-full w-48 h-48 border-4 border-gray-200"
          alt="Profile Picture"
        />
        <figcaption className="text-black md:text-8xl text-4xl font-caveat-regular">
          <h1 className="bg-gradient-to-r from-blue-500 to bg-purple-500 bg-clip-text text-transparent">
            Hi, I'm <b className="font-caveat-bold">Tannarin</b>
          </h1>
        </figcaption>
        <figcaption className="text-black md:text-4xl text-2xl font-adventpro-regular">
          <h3 className="font-barlowconsended-light">a Civil Engineer</h3>
        </figcaption>
        <figcaption className="text-black md:text-2xl text-lg font-serif">
          <h2>Turning vision into reality with precision and passion.</h2>
        </figcaption>
      </figure>
      <section className="flex justify-center items-center mt-[4%] gap-4">
        <button className="hidden max-xl:block bg-blue-400 border-1 border-blue-200 hover:bg-blue-500 px-3 py-2 rounded-2xl shadow-2xl cursor-pointer">
          Contact Me
        </button>
        <button
          className=" text-black bg-white border-1 border-gray-200 hover:bg-gray-100 px-3 py-2 rounded-2xl shadow-2xl cursor-pointer"
          id="services"
        >
          Resume →
        </button>
      </section>
    </header>
  );
};

export default Hero;
