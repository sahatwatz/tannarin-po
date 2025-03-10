import React from "react";

const Works = () => {
  return (
    <section className="flex justify-center items-center p-4">
      <section className="grid grid-cols-2 max-lg:grid-cols-1 place-content-center place-items-center w-2/3 h-auto gap-4 bg-gray-50 shadow-2xl p-4">
        <article className="bg-gray-100 grid grid-cols-1 place-content-center place-items-center shadow-xl hover:scale-105 p-4">
          <figure className="p-2">
            <img src="/img/work1.avif" alt="" />
          </figure>

          <h2 className="text-black font-semibold text-lg">Working Site</h2>
          <p className="text-black text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            cupiditate non commodi ullam laborum labore, accusantium quod iste
            tenetur ea.
          </p>
        </article>
        <section className="grid grid-cols-1 gap-2">
          <article className="grid grid-cols-[1fr_2fr] place-content-center bg-gray-100 shadow-xl hover:scale-125">
            <figure className="flex justify-center items-center">
              <img src="/img/work2.avif" alt="" />
            </figure>
            <figcaption className="grid grid-cols-1 place-content-center place-items-start text-black p-2">
              <h2 className="font-semibold text-lg">First Work</h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, mollitia?
              </p>
            </figcaption>
          </article>
          <article className="grid grid-cols-[1fr_2fr]  place-content-center bg-gray-100 shadow-xl hover:scale-125">
            <figure className="flex justify-center items-center">
              <img src="/img/work3.avif" alt="" />
            </figure>
            <figcaption className="grid grid-cols-1 place-content-center place-items-start text-black p-2">
              <h2 className=" font-semibold text-lg">Second Work</h2>
              <p className=" text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, mollitia?
              </p>
            </figcaption>
          </article>
          <article className="grid grid-cols-[1fr_2fr] place-content-center bg-gray-100 shadow-xl hover:scale-125">
            <figure className="flex justify-center items-center">
              <img src="/img/work4.avif" alt="" />
            </figure>
            <figcaption className="grid grid-cols-1 place-content-center place-items-start text-black p-2">
              <h2 className=" font-semibold text-lg">Third Work</h2>
              <p className=" text-start">
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
