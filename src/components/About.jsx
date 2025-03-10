import React from "react";
import { FaPhoneAlt, FaMapPin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsCSquareFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="flex justify-center items-center w-screen h-auto bg-white py-4">
      <section className="w-2/3 grid grid-cols-[2fr_3fr] mt-[5%] max-lg:grid-cols-1">
        <article className="w-full grid-cols-1 place-content-center place-items-center">
          <figure className="flex justify-center items-center p-2">
            <img
              src="/img/profile.jpeg"
              className="w-[80%] rounded-br-2xl rounded-tl-2xl border-2 border-gray-200"
              alt="profile"
            />
          </figure>
          <figcaption>
            <h2 className="text-black font-bold">Tannarin Lamai</h2>
            <h3 className="text-gray-500">Civil Engineer</h3>
          </figcaption>
          <p className="px-12 py-4 text-left text-gray-700 leading-relaxed text-md max-w-prose mx-auto whitespace-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
            doloremque dolorum fugiat doloribus architecto et temporibus saepe
            consequatur eligendi sapiente ab voluptatibus libero inventore
            excepturi! Ut consequatur est quam provident.
          </p>
          <aside className="flex flex-col justify-center items-center gap-4 p-4">
            <figure className="flex justify-center items-center gap-2">
              <FaMapPin className="text-yellow-400" />
              <h3 className="font-bold text-black">
                Thalang, Phuket, Thailand
              </h3>
            </figure>
            <figure className="flex justify-center items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              <h3 className="font-bold text-black">0814563452</h3>
            </figure>
            <figure className="flex justify-center items-center gap-2">
              <IoMdMail className="text-blue-400" />
              <h3 className="font-bold text-black">Tannarin@work.com</h3>
            </figure>
            <figure className="flex justify-center items-center gap-4">
              <img
                src="/icon/facebook.svg"
                alt="facebook"
                className="w-10 h-10"
                data-social="Facebook"
              />
              <img
                src="/icon/instagram.svg"
                alt="instagram"
                className="w-10 h-10"
                data-social="Instagram"
              />
            </figure>
          </aside>
        </article>
        <article className="w-full grid grid-cols-2 place-content-center place-items-center max-lg:grid-cols-1">
          <aside className="p-8 gap-4 flex flex-col justify-center items-center">
            <h2 className="text-left text-black font-bold text-lg">Degree</h2>
            <img
              src="/icon/kmutnb.png"
              alt="Kmutnb logo"
              className="w-16 h-16"
            />
            <h3 className="text-gray-700">Bachelor of Civil Engineer</h3>
            <h4 className="text-gray-400 text-md">
              King Mongkut's University of Technology North Bangkok
            </h4>
            <h5 className="text-gray-700 text-sm">Graduated in 2024</h5>
          </aside>
          <aside className="p-8 gap-4 flex flex-col justify-center items-center">
            <h2 className="text-left text-black font-bold text-lg">
              Working Experiences
            </h2>
            <BsCSquareFill className="w-16 h-16 text-blue-900" />
            <h3 className="text-gray-700">Civil Engineer</h3>
            <h4 className="text-gray-400 text-md">
              The Civil Company, Bangkok, Thailand.
            </h4>
            <h5 className="text-gray-700 text-sm">Mar 25 - Apr 30, 2024.</h5>
          </aside>
        </article>
      </section>
    </section>
  );
};

export default About;
