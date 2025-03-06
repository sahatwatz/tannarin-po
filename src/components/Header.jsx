import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed flex justify-between items-center  border-blue-400 z-20 h-16 
    w-screen  md:bg-transparent bg-white px-5"
    >
      <span
        className="text-black text-2xl shadow-2xs
         font-semibold border-2 p-1 border-black"
      >
        Tannarin
      </span>

      <ul
        className="hidden md:flex justify-center items-center text-black
       gap-5 bg-white p-2 px-5 shadow-2xl rounded-2xl"
      >
        <li>Home</li>
        <li>Works</li>
        <li>Services</li>
        <li>About Me</li>
      </ul>
      <button className="text-black hidden md:block bg-white p-1 rounded-2xl">
        Contact Me
      </button>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <AiOutlineClose className="text-black" />
        ) : (
          <AiOutlineMenu className="text-black" />
        )}
      </button>

      {isOpen && (
        <ul
          className="absolute top-14 left-0 w-full rounded-b-lg bg-white
        flex flex-col items-center gap-4 py-4 text-lg md:hidden text-black"
        >
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">Works</li>
          <li className="hover:text-blue-300 cursor-pointer">Services</li>
          <li className="hover:text-blue-300 cursor-pointer">About Me</li>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </ul>
      )}
    </header>
  );
};

export default Header;
