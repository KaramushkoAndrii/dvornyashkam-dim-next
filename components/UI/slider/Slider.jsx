"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss";

const Slider = ({ data, ...rest }) => {
  return (
    <div className="slider">
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination]}
      >
        {data?.map((slide, indx) => (
          <SwiperSlide key={indx}>
            <Image
              width={500}
              height={300}
              src={slide}
              alt={slide}
              className="slide-image"
              {...rest}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
