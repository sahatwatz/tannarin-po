import React, { useState, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (id) => {
    setIsActive(id);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav className="relative flex justify-center items-center">
      <section
        className="fixed flex justify-between items-center bg-transparent mt-[8%] border-blue-400 z-20 h-16 
    w-1/2 max-md:bg-white max-md:rounded-2xl max-md:mt-16 px-3 max-lg:mt-[15%] max-xl:mt-[10%]"
      >
        <span
          className="flex text-black text-2xl 
         font-semibold p-1 max-lg:text-lg"
        >
          Tannarin
          <div className="bg-gradient-to-r from-blue-500 to bg-purple-500  w-4 h-4 rounded-full"></div>
        </span>

        <ul
          className="hidden md:flex justify-center items-center text-black
       gap-1 bg-white p-2 px-2 shadow-2xl rounded-2xl border-1 border-gray-200 max-lg:text-md max-lg:px-2 max-lg:p-2"
        >
          <li>
            <a
              onClick={() => {
                scrollToSection("home");
                handleClick(1);
              }}
              className={`px-2 py-2 text-black font-semibold rounded-2xl  transition-all duration-300 cursor-pointer
                ${isActive === 1 ? "bg-gray-500 text-white " : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("services");
                handleClick(2);
              }}
              className={`px-2 py-2 text-black font-semibold rounded-2xl transition-all duration-300 cursor-pointer
                ${isActive === 2 ? "bg-gray-500 text-white" : ""}`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("works");
                handleClick(3);
              }}
              className={`px-2 py-2 text-black font-semibold rounded-2xl transition-all duration-300 cursor-pointer
                ${isActive === 3 ? "bg-gray-500 text-white" : ""}`}
            >
              Works
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("about");
                handleClick(4);
              }}
              className={`px-2 py-2 text-black font-semibold rounded-2xl transition-all duration-300 cursor-pointer
                ${isActive === 4 ? "bg-gray-500 text-white" : ""}`}
            >
              About
            </a>
          </li>
        </ul>
        <button
          onClick={() => {
            scrollToSection("contact");
            handleClick(5);
          }}
          className=" max-xl:hidden border-1 font-semibold text-white border-gray-200 bg-gradient-to-r from-blue-500 to bg-purple-500  p-2 px-2 rounded-2xl"
        >
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
            className="absolute top-14 left-0 w-full rounded-b-lg bg-white shadow-2xl
        flex flex-col items-center gap-4 py-4 text-lg md:hidden text-black"
          >
            <li className="hover:text-blue-300 cursor-pointer">
              {" "}
              <a
                onClick={() => {
                  scrollToSection("home");
                  handleClick();
                }}
              >
                Home
              </a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer">
              {" "}
              <a
                onClick={() => {
                  scrollToSection("services");
                  handleClick();
                }}
              >
                Services
              </a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer">
              {" "}
              <a
                onClick={() => {
                  scrollToSection("works");
                  handleClick();
                }}
              >
                Works
              </a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer">
              {" "}
              <a
                onClick={() => {
                  scrollToSection("about");
                  handleClick();
                }}
              >
                About
              </a>
            </li>
            <li className="hover:text-blue-300 cursor-pointer">
              {" "}
              <a
                onClick={() => {
                  scrollToSection("contact");
                  handleClick();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
};

export default Header;
