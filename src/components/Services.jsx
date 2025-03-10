import React from "react";
import {
  MdBeenhere,
  MdContentPasteSearch,
  MdBarChart,
  MdConstruction,
} from "react-icons/md";

const Services = () => {
  return (
    <section className="relative bg-whtie h-auto w-screen flex justify-center items-center">
      <section className="relative w-2/3 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2 h-auto place-items-top place-content-center bg-white">
        <section className=" flex items-center flex-col text-black h-auto w-auto">
          <h2 className="p-4 text-2xl">
            <b>Auditing</b>
          </h2>
          <figure>
            <MdBeenhere className="w-24 h-24 text-green-400" />
          </figure>
          <h3 className="text-lg p-8">Auditing & Financial Reporting</h3>
          <p className="overflow-hidden p-4 text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            corrupti.
          </p>
        </section>
        <section className="flex items-center flex-col text-black h-auto w-auto">
          <h2 className="p-4 text-2xl">
            <b>Planning</b>
          </h2>
          <figure>
            <MdContentPasteSearch className="w-24 h-24 text-sky-400" />
          </figure>
          <h3 className="text-lg p-8">Cost planning & Budgeting</h3>
          <p className="overflow-hidden p-4 text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            corrupti.
          </p>
        </section>
        <section className="h-auto w-auto flex items-center flex-col text-black">
          <h2 className="p-4 text-2xl">
            <b>Analysis</b>
          </h2>
          <figure>
            <MdBarChart className="w-24 h-24 text-yellow-400" />
          </figure>
          <h3 className="text-lg p-8">Cost Control & Financial Analysis</h3>
          <p className="overflow-hidden p-4 text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            corrupti.
          </p>
        </section>
        <section className="h-auto w-auto flex items-center flex-col text-black">
          <h2 className="p-4 text-2xl">
            <b>Management</b>
          </h2>
          <figure>
            <MdConstruction className="w-24 h-24 text-pink-400" />
          </figure>
          <h3 className="text-lg p-8">Contract & Payment Management</h3>
          <p className="overflow-hidden p-4 text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            corrupti.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Services;
