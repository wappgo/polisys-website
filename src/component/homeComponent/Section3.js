import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Section3 = () => {
  return (
    <div className="section3">
        <h1 className="ourtrust">Our Trusted Client</h1>
        <div className="section3-container">
          <div className="row trustedClient">
            <div className="col-12">

              <h2 className="cliensec">Sorry ! We never reveal our clients ! Because here we work for their privacy 🔐 .</h2>

              
              {/*<Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  425: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
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
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="/assets/Img/Logo1.svg"
                    alt="Logo 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="/assets/Img/Logo2.svg"
                    alt="Logo 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="/assets/Img/Logo3.svg"
                    alt="Logo 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="/assets/Img/Logo4.svg"
                    alt="Logo 4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid"
                    src="/assets/Img/Logo4.svg"
                    alt="Logo 4"
                  />
                </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Section3