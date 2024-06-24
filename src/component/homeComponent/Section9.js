import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Image from "next/image";
import SlideSwiper from "../../component/swiper.jsx";
import { images } from '../constant/index.js';

const Section9 = () => {
  return (
    <div className="sectionn3">
        <div className="row">
          <div className="col-md-4 p-0">
            <div className="sectionn3-img">
              <img
                src="/assets/home/deep_knowledge.png"
                className="img-fluid"
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-8">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              navigation={{
                nextEl: ".four-swiper-button-next",
                prevEl: ".four-swiper-button-prev",
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="sectionn-right-container">
                  <div className="sec3-right-sub-contain">
                    <h1 className="sec3-right-head">
                      Deep knowledge in the field
                    </h1>
                    <p className="sec-3-right-p">
                      Our extensive experience and deep expertise in the energy
                      sector have positioned us as leaders in the industry. With
                      two decades of market leadership, we have honed our
                      knowledge in energy efficiency, LED lighting, photovoltaic
                      energy, and electric mobility to a level that sets us
                      apart. Our team's profound understanding of these domains
                      enables us to provide innovative, tailored solutions that
                      not only meet but exceed the expectations of our clients.
                    </p>
                    <div className="mr-4">
                      <p className="sec-3-right-date d-flex">
                        <img
                          src="/assets/home/calendar.svg"
                          className="calender-icon"
                          alt="img"
                        />
                        12th September 2023
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-10 mobile-view-align">
                        <button className="sec-3-right-btn">
                          Read Full Article
                          <img src='./assets/home/article-arrow.svg' />
                          {/* <img src={images.article_arrow.default} /> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sectionn-right-container">
                  <div className="sec3-right-sub-contain">
                    <h1 className="sec3-right-head">
                      Deep knowledge in the field
                    </h1>
                    <p className="sec-3-right-p">
                      Our extensive experience and deep expertise in the energy
                      sector have positioned us as leaders in the industry. With
                      two decades of market leadership, we have honed our
                      knowledge in energy efficiency, LED lighting, photovoltaic
                      energy, and electric mobility to a level that sets us
                      apart. Our team's profound understanding of these domains
                      enables us to provide innovative, tailored solutions that
                      not only meet but exceed the expectations of our clients.
                    </p>
                    <div className="mr-4">
                      <p className="sec-3-right-date d-flex">
                        <img
                          src="/assets/home/calendar.svg"
                          className="calender-icon"
                          alt="img"
                        />
                        12th September 2023
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-10 mobile-view-align">
                        <button className="sec-3-right-btn">
                          Read Full Article
                          {/* <img src={images.article_arrow.default} /> */}
                          <img src='./assets/home/article-arrow.svg' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="align-btn-center">
              <div className="col-md-2 d-flex float-end sec9arrow">
                <div className="left-carousel">
                  <img
                    src="/assets/home/carousel-left-arrow.svg"
                    className="four-swiper-button-prev w-100"
                    alt="img"
                  />
                </div>
                <div className="right-carousel">
                  <img
                    src="/assets/home/carousel-right-arrow.svg"
                    className="four-swiper-button-next w-100"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Section9