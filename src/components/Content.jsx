import React from "react";

const Content = () => {
  return (
    <section className="bg-white w-auto h-auto flex justify-center items-center p-4">
      <section className="w-2/3 p-4 grid grid-cols-2 max-sm:grid-cols-1 place-content-center place-items-center gap-4">
        <figure className="relative group">
          <img className="hover:bg-amber-300" src="/img/mock1.avif" alt="" />
          <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out flex justify-center items-center">
            <figcaption className="flex justify-center items-center">
              <h2 className="text-white text-4xl">
                <b>Audit</b>
              </h2>
            </figcaption>
          </div>
        </figure>
        <figure className="relative group">
          <img src="/img/mock4.avif" alt="" />
          <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out flex justify-center items-center">
            <figcaption className="flex justify-center items-center">
              <h2 className="text-white text-4xl">
                <b>Planning</b>
              </h2>
            </figcaption>
          </div>
        </figure>
        <figure className="relative group">
          <img src="/img/mock2.avif" alt="" />
          <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out flex justify-center items-center">
            <figcaption className="flex justify-center items-center">
              <h2 className="text-white text-4xl">
                <b>Analysis</b>
              </h2>
            </figcaption>
          </div>
        </figure>
        <figure className="relative group">
          <img src="/img/mock3.avif" alt="" />
          <div className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out flex justify-center items-center">
            <figcaption className="flex justify-center items-center">
              <h2 className="text-white text-4xl">
                <b>Management</b>
              </h2>
            </figcaption>
          </div>
        </figure>
      </section>
    </section>
  );
};

export default Content;
