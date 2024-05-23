import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import SlideSwiper from "../../component/swiper";

const Section5 = () => {
  return (
    <div className="section5">
        <h6>UPDATE CORNER</h6>
        <div className="section-5-head-container">
          <div className="row">
            <div className="col-md-9 align-self-end">
              <h2>Featured Highlights</h2>
            </div>
            <div className="col-md-3">
              <div className="align-btn-center4">
                <div className="sliderarrowbtn float-end position-relative">
                  <div className="left-carousel">
                    <img
                      src="/assets/home/carousel-left-arrow.svg"
                      className="one-swiper-button-prev"
                      alt="img"
                    />
                  </div>
                  <div className="right-carousel">
                    <img
                      src="/assets/home/carousel-right-arrow.svg"
                      className="one-swiper-button-next"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mainfeaturecard">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".one-swiper-button-next",
              prevEl: ".one-swiper-button-prev",
            }}
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
              <div className="featurecard">
                <div>
                  <img className="featureimg" src="/assets/Img/sybersyc.png" />
                </div>
                <div className="featurecardfooter">
                  <span>September 9, 2023</span> &nbsp;&nbsp;{" "}
                  <span>Posted By Polisys</span>
                  <h4>Digital Personal Data & Privacy Protection Act</h4>
                  <p>
                    In episode 4 of our ‘Gateway to data privacy and protection’
                    series, we discuss with Aniket Bhosle, Cyber Consulting
                    Partner at ...
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecard">
                <div>
                  <img className="img-fluid" src="/assets/Img/sybersyc.png" />
                </div>
                <div className="featurecardfooter">
                  <span>September 9, 2023</span> &nbsp;&nbsp;{" "}
                  <span>Posted By Polisys</span>
                  <h4>Digital Personal Data & Privacy Protection Act</h4>
                  <p>
                    In episode 4 of our ‘Gateway to data privacy and protection’
                    series, we discuss with Aniket Bhosle, Cyber Consulting
                    Partner at ...
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecard">
                <div>
                  <img className="img-fluid" src="/assets/Img/sybersyc.png" />
                </div>
                <div className="featurecardfooter">
                  <span>September 9, 2023</span> &nbsp;&nbsp;{" "}
                  <span>Posted By Polisys</span>
                  <h4>Digital Personal Data & Privacy Protection Act</h4>
                  <p>
                    In episode 4 of our ‘Gateway to data privacy and protection’
                    series, we discuss with Aniket Bhosle, Cyber Consulting
                    Partner at ...
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecard">
                <div>
                  <img className="img-fluid" src="/assets/Img/sybersyc.png" />
                </div>
                <div className="featurecardfooter">
                  <span>September 9, 2023</span> &nbsp;&nbsp;{" "}
                  <span>Posted By Polisys</span>
                  <h4>Digital Personal Data & Privacy Protection Act</h4>
                  <p>
                    In episode 4 of our ‘Gateway to data privacy and protection’
                    series, we discuss with Aniket Bhosle, Cyber Consulting
                    Partner at ...
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecard">
                <div>
                  <img className="img-fluid" src="/assets/Img/sybersyc.png" />
                </div>
                <div className="featurecardfooter">
                  <span>September 9, 2023</span> &nbsp;&nbsp;{" "}
                  <span>Posted By Polisys</span>
                  <h4>Digital Personal Data & Privacy Protection Act</h4>
                  <p>
                    In episode 4 of our ‘Gateway to data privacy and protection’
                    series, we discuss with Aniket Bhosle, Cyber Consulting
                    Partner at ...
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  )
}

export default Section5