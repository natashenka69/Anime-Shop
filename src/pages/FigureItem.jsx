import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Figures } from "../data";

import { LuShoppingCart } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import PopUp from "../components/PopUp";
import { useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function FigureItem() {
  const { id } = useParams();
  const figures = Figures.find((figures) => String(figures.id) === id);
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPopUp(false);
  }, [location]);

  return (
    <div className="mt-[74px]">
      <div className="">
        {popUp ? (
          <PopUp onClose={() => setPopUp(false)} />
        ) : (
          <div className="hidden"></div>
        )}
        <div className="w-full bg-gradient-to-r from-[#041311]  to-[#093893]">
          <div className="pt-4 flex items-center h-full mx-4">
            <div className="flex flex-col xl:flex-row justify-between xl:w-2/3 w-full items-center xl:items-end mb-8">
              <div className="h-[400px] items-center justify-center xl:hidden">
                <img
                  src={figures.image}
                  className="w-[300px] md:w-[400px] object-contain h-full"
                  alt="Figure photo"
                />
              </div>
              <div className="flex flex-col items-start text-white mb-2 ml-16">
                <div className="space-y-2 mt-4 xl:mt-0 ">
                  <p className="text-4xl max-w-[400px] font-bold">
                    {figures.title}
                  </p>
                  <p className="text-2xl max-w-[400px]">{figures.company}</p>
                  {figures.release ? (
                    <p className="text-2xl max-w-[400px]">
                      Release Date: {figures.release}
                    </p>
                  ) : (
                    <p className="hidden"></p>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-orange-500 text-[40px]">
                    ${figures.price}
                  </p>
                  <button
                    onClick={() => {
                      dispatch(addToCart(figures));
                      setPopUp(true);
                    }}
                    className="py-4 px-8 text-white font-bold bg-orange-500 flex flex-row items-center hover:bg-purple-500 duration-300 rounded-xl"
                  >
                    <LuShoppingCart size={20} className="mr-2" />
                    <p className="text-lg">Add To Card</p>
                  </button>
                </div>
              </div>
              <div className="w-[600px] h-[600px] items-center justify-center xl:flex hidden">
                <img
                  src={figures.image}
                  className="w-[600px] object-contain h-full hover:opacity-90"
                  alt="Figure photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black h-full">
          <div className="xl:max-w-[1400px] mx-auto flex justify-center items-center xl:justify-start xl:items-start">
            <div className="mt-16">
              <div>
                <h1 className="text-black bg-white font-bold text-4xl px-2 py-4 uppercase mb-4 mx-4">
                  Description
                </h1>
              </div>
            </div>
          </div>
          <div className="text-white flex xl:flex-row flex-col justify-center items-center xl:justify-between max-w-[1200px] mx-auto xl:space-x-1">
            <div className="mt-16 flex flex-col max-w-[500px] space-y-4 mx-8">
              <p>{figures.title} waiting for you!</p>
              <p>
                Your favorite characters are stylized and squashed down to
                adorable proportions with lifelike eyes and simple posture!
              </p>
              <p className="font-bold">Specification:</p>
              <ul className="list-disc font-bold">
                <li className="">Size: {figures.size}</li>
                <li>Material: {figures.material}</li>
              </ul>
            </div>
            <div>
              <img
                src={figures.bottomimage}
                className="md:w-[600px] md:h-[400px] w-[350px] h-[300px] xl:w-[800px] xl:h-[400px] object-cover xl:ml-8 rounded-md mt-4 xl:mt-0"
                alt="Figure photo"
              />
            </div>
          </div>
          <div className="text-white items-center flex justify-center mt-16 text-4xl">
            <p className="">Media Gallery</p>
          </div>
          <div className="pb-4">
            <Swiper
              className=""
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination]}
              slidesPerView={3}
              spaceBetween={0}
              pagination={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                "@1.3": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@2.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {figures.slider?.map((figure) => (
                <SwiperSlide className="" key={figure}>
                  <div className="flex justify-center items-start mt-16 max-w-[600px] mx-auto">
                    <div className="mx-4 items-center flex justify-center">
                      <img
                        src={figure}
                        className="h-[700px] w-[520px] object-cover border-t-2 pt-4 border-white"
                        alt="Figures photos"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
