import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Section10 = () => {
  return (
    <div className="section7">
      <center>
        <h1>
          As a team we strive together, collaborate and provide the best
          experience for our clients.
        </h1>
      </center>

      <div className="w-100">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },

            576: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className=" exprience">
              <h2>12+</h2>
              <p>Years of experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" exprience">
              <h2>150+</h2>
              <p>Project completed</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" exprience">
              <h2>250+</h2>
              <p>Leading companies</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section10;
