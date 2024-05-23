import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Section5 = () => {
  return (
<div className="about-us-section5">
      <div className="about-us-sec5-wrapper">
        <h1 className="about-us-sec5-head">The distinction that sets us Apart in the industry</h1>
        <p className="about-us-sec5-para">
        In a highly competitive industry, what distinguishes a company is not just its offerings but its unwavering commitment to excellence and innovation. At Oakland C.E., we understand that to rise above the competition, we must constantly strive for distinction in every aspect of our business. Our journey in the energy sector has been defined by innovation and expertise.
        </p>
        <div className="col-12">
              <Swiper
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
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="about-us-sec5-logo1">
                  <img style={{background: 'var(--r, #FD3C3C)', padding: '7px'}}
                    className="img-fluid"
                    src="/assets/aboutUs/material-symbols_equalizer.svg"
                    alt="Logo 1"
                    />
                    <h2 className="about-us-sec5-logo1-head">Inovation</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="about-us-sec5-logo1">
                  <img style={{background: 'var(--r, #FD3C3C)', padding: '7px'}}
                    className="img-fluid"
                    src="/assets/aboutUs/material-symbols_groups.svg"
                    alt="Logo 1"
                    />
                    <h2 className="about-us-sec5-logo1-head">Expertise</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="about-us-sec5-logo1">
                  <img style={{background: 'var(--r, #FD3C3C)', padding: '7px'}}
                    className="img-fluid"
                    src="/assets/aboutUs/mdi_star.svg"
                    alt="Logo 1"
                    />
                    <h2 className="about-us-sec5-logo1-head">Quality</h2>
                    </div>
                </SwiperSlide>
              </Swiper>
            </div>
      </div>
    </div>
  )
}

export default Section5