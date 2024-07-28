import React, { useState } from "react";

import { CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";



const Navbar = () => {
  const [color, setColor] = useState(false);
  const cartItem = useSelector((state: any) => state.cart.cart);

  // Color changing on scroll
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "w-full flex items-center h-[75px] bg-[#181414] fixed z-10 top-0 duration-200 border-b border-b-transparent"
          : "w-full bg-black fixed flex items-center h-[75px] z-10 border-b-white border-b top-0 duration-200"
      }
    >
      <div className="flex flex-row md:ml-4 ml-2 items-center w-full justify-between ">
        {/* Logo + backbutton */}
        <div className="flex text-white items-center">
          <Link to="/">
            <div className="text-white xl:text-3xl md:text-2xl text-lg mr-2 md:mr-8 font-semibold">
              Rudyanya Shop
            </div>
          </Link>
        </div>
        <SearchBar />
        {/* Other side of navbar */}
        <div className="flex text-white md:mr-12 mr-4 items-center md:space-x-4">
        <Link to="/authorization">
          <GoPerson
            className="flex md:text-3xl text-2xl cursor-pointer hover:text-purple-500 duration-300 mr-2"
          />
          </Link>
          <Link to="/checkout">
            <div className="relative cursor-pointer hover:text-purple-500 duration-300">
              <CiShoppingCart className="md:text-3xl text-2xl" />
              <p className="absolute top-[-5px] right-[-7px]">
                {cartItem.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* Mobile Nav */}
    </div>
  );
};

export default Navbar;
