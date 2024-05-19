import React from "react";

import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-full bg-[#111111]">
      <div className="flex md:flex-row flex-col justify-between max-w-[1250px] items-center mx-auto">
        <div className="flex flex-col text-white mt-6 justify-center text-[20px] items-center md:items-start ml-4">
          <p className="mb-2 cursor-pointer hover:text-purple-500 duration-300">
            Company
          </p>
          <p className="mb-2 cursor-pointer hover:text-purple-500 duration-300">
            About
          </p>
          <p className="mb-2 cursor-pointer hover:text-purple-500 duration-300">
            Press
          </p>
          <p className="mb-2 cursor-pointer hover:text-purple-500 duration-300">
            Recruitment
          </p>
          <p className="hover:text-purple-500 duration-300 cursor-pointer">
            Point Terms and Conditions
          </p>
        </div>
        <div className="flex flex-row text-white mt-4 items-center mr-4">
          <FaInstagram
            size={30}
            className="ml-8 cursor-pointer hover:text-purple-500 duration-300"
          />
          <FaYoutube
            size={30}
            className="ml-8 cursor-pointer hover:text-purple-500 duration-300"
          />
          <FaTwitter
            size={30}
            className="ml-8 cursor-pointer hover:text-purple-500 duration-300"
          />
          <FaFacebook
            size={30}
            className="ml-8 cursor-pointer hover:text-purple-500 duration-300"
          />
        </div>
      </div>
      <div className="text-white justify-center items-center flex flex-col pb-2 mt-4 md:mt-0">
        <p className="border-4 px-8 py-1 rounded-xl border-purple-700 uppercase text-[36px] font-bold cursor-pointer  md:items-center items-start">
          Rudyanya Shop
        </p>
        <p className="text-white text-[12px] mt-2 md:justify-start justify-center flex">
          © 2024 Rudyanya Shop Ukraine
        </p>
      </div>
    </div>
  );
}
