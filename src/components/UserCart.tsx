import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import {CartItems} from "../types/types"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function UserCart() {
    const cartItems = useSelector((state: any) => state.cart.cart);
    const useSlider = cartItems.length > 5;
    const dispatch = useDispatch();
  return (
    <div>
                {cartItems.length === 0 ? (
      <p className="text-white text-xl text-center mt-8">No items yet</p>
    ) : useSlider ? (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={-20}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          loop={true}
          className="relative"
          breakpoints={{
            140: {
              slidesPerView: 2,
            },
            568: {
              slidesPerView: 3,
            },
            1184: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
            1790: {
             slidesPerView: 6,
            }
          }}
        >
          {cartItems.map((item: CartItems) => (
            <SwiperSlide key={item.id}>
                <div className="flex justify-center items-center">
                  <div className="flex flex-row">
                    <div className="h-full">
                    <Link to={`/figure/${item.id}`}>
                      <img
                        src={item.image}
                        className="lg:w-[200px] lg:h-[200px] md:w-[175px] md:h-[175px] h-[150px] w-[150px] object-cover object-top"
                      />
                    </Link>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          ))}
          <div className="button-prev-slide rounded-full absolute z-10 top-[45%] left-4 2xl:left-[1%]  cursor-pointer">
          <FaArrowLeft size={30} className="text-white" />
        </div>
        <div className="button-next-slide rounded-full absolute z-10 top-[45%] right-4 2xl:right-[1%]  cursor-pointer">
          <FaArrowRight size={30} className="text-white" />
        </div>
        </Swiper>
      ) : (
        <div className="flex flex-row items-center justify-center">
          {cartItems.map((item: CartItems) => (
            <Link key={item.id} to={`/figure/${item.id}`}>
              <div className="flex justify-center items-center ml-4 xl:mr-8 mr-2">
                <div className="flex flex-row">
                  <div className="h-full">
                    <img
                      src={item.image}
                      className="w-[200px] h-[200px] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserCart