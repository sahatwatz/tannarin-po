import React from "react";

const Hero = () => {
  return (
    <header
      className="flex flex-col justify-center items-center bg-transparent
    w-screen h-screen"
    >
      <aside className="bg-white rounded-2xl px-2 py-1 shadow-2xl border-1 border-gray-200">
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
        className="flex flex-col p-4 gap-4 justify-center
      items-center "
      >
        <img
          src="/img/avatar.jpg"
          className="rounded-full w-48 h-48 border-1 border-gray-200"
          alt="Profile Picture"
        />
        <figcaption className="text-black text-5xl ">
          <h1>
            Hi, I'm <b>Tannarin</b>
          </h1>
        </figcaption>
        <figcaption className="text-black text-3xl">
          <h3>an Civil Engineer</h3>
        </figcaption>
        <figcaption className="text-black text-2xl">
          <h2>Turning vision into reality with precision and passion.</h2>
        </figcaption>
      </figure>
      <section className="flex justify-center items-center mt-20 gap-4">
        <button className="bg-blue-400 border-1 border-blue-200 hover:bg-blue-500 px-3 py-2 rounded-2xl shadow-2xl cursor-pointer">
          Contact Me
        </button>
        <button className="text-black bg-white border-1 border-gray-200 hover:bg-gray-100 px-3 py-2 rounded-2xl shadow-2xl cursor-pointer">
          Resume
        </button>
      </section>
    </header>
  );
};

export default Hero;
