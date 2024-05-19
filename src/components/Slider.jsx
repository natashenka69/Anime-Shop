import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import slideOne from "../assets/slider/slideOne.jpg"
import slideTwo from "../assets/slider/slideTwo.jpg"
import slideThree from "../assets/slider/slideThree.jpg"

const slides = [slideOne, slideTwo, slideThree]

export default function Slider() {


  return (
    <div className='h-full w-full bg-black mt-16'>
<Swiper
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide"
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      pagination={true}
      className="relative">
      {slides.map((item) => (
        <SwiperSlide key={item}>
          <div className='flex group justify-center items-center'>
          <img src={item} className="md:w-[1450px] md:h-[600px] w-[500px] h-[400px] object-cover object-top"/>
          </div>
        </SwiperSlide>
      ))}
      <div className='button-prev-slide rounded-full absolute z-10 top-[45%] left-4 2xl:left-[13%]  cursor-pointer'>
        <FaArrowLeft size={30} className="text-white"/>
      </div>
      <div className='button-next-slide rounded-full absolute z-10 top-[45%] right-4 2xl:right-[13%]  cursor-pointer'>
        <FaArrowRight size={30} className="text-white"/>
      </div>
      </Swiper>
    </div>
  )
}
