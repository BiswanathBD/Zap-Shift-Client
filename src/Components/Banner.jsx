import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import bannerImg1 from "../assets/banner/banner1.png";
import bannerImg2 from "../assets/banner/banner2.png";
import bannerImg3 from "../assets/banner/banner3.png";
import { IoMdArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="w-full aspect-auto mt-8  rounded-3xl overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={bannerImg1} alt="" />
            <div className="hidden xl:flex gap-2 items-center absolute z-100 bottom-29 left-20">
              <button className="primary-btn">Truck Your parcel</button>
              <button className="text-lime-300 bg-[#1F1F1F] p-2 rounded-full -rotate-45">
                <IoMdArrowForward />
              </button>
              <button className="secondary-btn">Be a Rider</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img src={bannerImg2} alt="" />
            <div className="hidden xl:flex gap-2 items-center absolute z-100 bottom-29 left-20">
              <button className="primary-btn">Truck Your parcel</button>
              <button className="text-lime-300 bg-[#1F1F1F] p-2 rounded-full -rotate-45">
                <IoMdArrowForward />
              </button>
              <button className="secondary-btn">Be a Rider</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img src={bannerImg3} alt="" />
            <div className="hidden xl:flex gap-2 items-center absolute z-100 bottom-36 left-20">
              <button className="primary-btn">Truck Your parcel</button>
              <button className="text-lime-300 bg-[#1F1F1F] p-2 rounded-full -rotate-45">
                <IoMdArrowForward />
              </button>
              <button className="secondary-btn">Be a Rider</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
