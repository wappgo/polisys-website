"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

 const SlideSwiper = () => {
  return (
    <div>
          <Swiper
            grabCursor={false}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
          >
              <SwiperSlide> <img className="trustlogo" src="/assets/Img/Logo1.svg" /></SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
    </div>
  )
}


export default SlideSwiper