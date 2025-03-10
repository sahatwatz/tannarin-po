import { section } from "motion/react-client";
import React from "react";

const Works = () => {
  return (
    <section className="flex justify-center items-center">
      <section className="grid grid-cols-2 max-lg:grid-cols-1 place-content-center place-items-center bg-amber-100 w-2/3 h-auto">
        <article className="bg-gray-100 border-4 grid grid-cols-1 place-content-center place-items-center">
          <figure className="p-2">
            <div className="w-96 h-64 bg-gray-400"></div>
          </figure>

          <h2 className="text-black font-semibold text-lg">Working Site</h2>
          <p className="text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
            a.
          </p>
        </article>
        <section className="bg-gray-200 grid grid-cols-1 border-4 gap-2">
          <article className="grid grid-cols-[1fr_2fr] bg-amber-200 place-content-center">
            <figure className="bg-green-200 flex justify-center items-center">
              <div className="w-50 h-30 bg-gray-400"></div>
            </figure>
            <figcaption className="grid grid-cols-1 place-content-center place-items-start text-black bg-red-200 p-2">
              <h2 className="bg-pink-100 font-semibold text-lg">Second Work</h2>
              <p className="bg-orange-300 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, mollitia?
              </p>
            </figcaption>
          </article>
          <article className="grid grid-cols-[1fr_2fr] bg-amber-200 place-content-center">
            <figure className="bg-green-200 flex justify-center items-center">
              <div className="w-50 h-30 bg-gray-400"></div>
            </figure>
            <figcaption className="grid grid-cols-1 place-content-center place-items-start text-black bg-red-200 p-2">
              <h2 className="bg-pink-100 font-semibold text-lg">Second Work</h2>
              <p className="bg-orange-300 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, mollitia?
              </p>
            </figcaption>
          </article>
          <article className="grid grid-cols-[1fr_2fr] bg-amber-200 place-content-center">
            <figure className="bg-green-200 flex justify-center items-center">
              <div className="w-50 h-30 bg-gray-400"></div>
            </figure>
            <figcaption className="grid grid-cols-1 place-content-center place-items-start text-black bg-red-200 p-2">
              <h2 className="bg-pink-100 font-semibold text-lg">Second Work</h2>
              <p className="bg-orange-300 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, mollitia?
              </p>
            </figcaption>
          </article>

          <article></article>
          <article></article>
        </section>
      </section>
    </section>
  );
};

export default Works;
