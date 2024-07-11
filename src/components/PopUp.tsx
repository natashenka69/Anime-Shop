import React from "react";
import { useParams, Link } from "react-router-dom";

import { Figures } from "../data";

import { IoCheckmarkDoneCircleOutline, IoClose } from "react-icons/io5";

import { PopUpFunctions, FigureData } from "../types/types";


export default function PopUp({ onClose }: PopUpFunctions) {
  const { id } = useParams();
  const figures: FigureData = Figures.find((figures) => String(figures.id) === id);

  return (
    <div className="md:w-[400px] md:h-[270px] w-[350px] h-[240px] fixed z-10 right-8 mt-4 bg-black text-white">
      <div className="flex flex-col m-4">
        <div className="justify-between flex items-center mb-4">
          <div className="flex items-center">
            <IoCheckmarkDoneCircleOutline size={20} className="mr-1" />
            <p>Added to Cart</p>
          </div>
          <IoClose onClick={onClose} className="cursor-pointer" size={20} />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={figures.image}
            className="w-[110px] h-[110px] object-cover object-top mr-[12px]"
          />
          <div className="flex flex-col">
            <p className="text-md">{figures.title}</p>
            <p className="font-bold text-[18px]">${figures.price}</p>
          </div>
        </div>
        <div className="items-center flex justify-center mt-4">
          <Link to="/checkout">
            <button className="md:px-12 md:py-4 px-8 py-2 bg-red-500 rounded-full text-lg font-bold hover:bg-black border-2 border-red-500 hover:border-white duration-300">
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
