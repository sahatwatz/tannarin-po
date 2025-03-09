import React from "react";
import { MdBeenhere, MdContentPasteSearch, MdBarChart } from "react-icons/md";

const Services = () => {
  return (
    <section className="bg-white h-128 w-screen flex justify-center items-center border-2 border-black">
      <section className=" w-1/2 flex justify-center items-center gap-2">
        <section className="h-96 w-1/4 flex items-center flex-col text-black">
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
        <section className="h-96 w-1/4 flex items-center flex-col text-black">
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
        <section className="h-96 w-1/4 flex items-center flex-col text-black">
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
        <section className="h-96 w-1/4 flex items-center flex-col text-black">
          <h2 className="p-4 text-2xl">
            <b>Management</b>
          </h2>
          <figure>
            <MdBeenhere className="w-24 h-24 text-pink-400" />
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
