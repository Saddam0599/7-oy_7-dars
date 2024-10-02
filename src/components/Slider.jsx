import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import panda from "../assets/panda.png";
import king_kong from "../assets/king-kong.png";
import cinema_market from "../assets/cinema-market.png";
import { useState } from "react";

function Slider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        <SwiperSlide>
          <img src={panda} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={king_kong} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="max-h-[640px] h-full max-w-[1360px] w-full"
            src={cinema_market}
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center gap-5 my-[10px]">
        <button
          className="text-[#C61F1F] w-[48px] h-[48px] rounded-[50%] bg-[#1D1D1D]"
          onClick={() => swiperInstance?.slidePrev()}
        >
          {" "}
          {" < "}{" "}
        </button>

        <button
          className="text-[#C61F1F] w-[48px] h-[48px] rounded-[50%] bg-[#1D1D1D]"
          onClick={() => swiperInstance?.slideNext()}
        >
          {" "}
          {" > "}{" "}
        </button>
      </div>
    </div>
  );
}

export default Slider;
