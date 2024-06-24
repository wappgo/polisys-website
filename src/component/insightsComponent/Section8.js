import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Image from "next/image";
import SlideSwiper from "../../component/swiper.jsx";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
// import { useRouter } from 'next/navigation';
import { useNavigate } from 'react-router-dom';

const Section8 = () => {

  const router = useNavigate();

  return (
    <div className="sectionn2-container">
      <div className="sectionn2">
        <div className="row">
          <div className="col-lg-4">
            <div className="sectionn2-left-container">
              <h6>RECENT CASE STUDIES</h6>
              <h2>
                Delving into Practical Success Stories: Real-Life Case Studies
                Explored
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tellus orci cum turpis
                augue elementum. Imperdiet sodales semper ut mattis dolor
                convallis. Lorem consectetur montes lectus amet.
              </p>
              <button onClickCapture={() => router("/contact-us")} className="contact-btn">Contact Us</button>
            </div>
          </div>
          <div className="col-lg-8">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".three-swiper-button-next",
                prevEl: ".three-swiper-button-prev",
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="container1">
                  <div className="container1-wrap">
                    <div className="ellipse-wrapper">
                      <div className="ellipse-container">
                        <img
                          src="/assets/home/ellipse.svg"
                          className=""
                          alt="img"
                        />
                        <div className="ellipse-img-wrapper">
                          <img
                            src="/assets/home/ellipse-arrow.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <h6>
                      Corem ipsum dolor sit amet, cons ectetur adipiscing
                      elit.
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus orci cum
                      turpis augue elementum.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container1">
                  <div className="container2-wrap">
                    <div className="ellipse-wrapper">
                      <div className="ellipse-container">
                        <img
                          src="/assets/home/ellipse.svg"
                          className=""
                          alt="img"
                        />
                        <div className="ellipse-img-wrapper">
                          <img
                            src="/assets/home/ellipse-arrow.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <h6>
                      Corem ipsum dolor sit amet, cons ectetur adipiscing
                      elit.
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus orci cum
                      turpis augue elementum.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container1">
                  <div className="container1-wrap">
                    <div className="ellipse-wrapper">
                      <div className="ellipse-container">
                        <img
                          src="/assets/home/ellipse.svg"
                          className=""
                          alt="img"
                        />
                        <div className="ellipse-img-wrapper">
                          <img
                            src="/assets/home/ellipse-arrow.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <h6>
                      Corem ipsum dolor sit amet, cons ectetur adipiscing
                      elit.
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus orci cum
                      turpis augue elementum.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="align-btn-center2">
              <div className="arrow-style">
                <div className="three-swiper-button-prev">
                  <HiArrowLeft className="recent-case-left-arrow" />
                </div>
              </div>
              <div className="arrow-style2">
                <div className="three-swiper-button-next">
                  <HiArrowRight className="recent-case-right-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section8