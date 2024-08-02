import React, { useRef, useEffect }  from 'react';
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

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Section8 = () => {

  const router = useNavigate();

  const splideRef = useRef(null);

  const goNext = () => {
    splideRef.current.go(">");
  };

  const goPrev = () => {
    splideRef.current.go("<");
  };

  return (
    <div className="sectionn2-container">
    <div className="sectionn2">
      <div className="row dareeymar">
        <div className="col-lg-4">
          <div className="sectionn2-left-container">
            <h6 className='darkeyepolhead'>The Dark Eye by Polisys</h6>
            <h2 className='darkeyesuhe'>
            Ensuring Comprehensive Monitoring and Management for Effective Governance.
            </h2>
            <p className='darkpar'>
            Leading the state requires constant vigilance and effective management. The Dark Eye by Polisys offers a 360-degree monitoring solution to keep you informed of all events, both good and bad. Our platform supports the Chief Minister’s office in maintaining control and fostering effective governance.
            </p>
            <div className='mobile-view-align contdiv'>
            <button  onClickCapture={()=>router("/contact-us")} className="contact-btn contbtn">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
        {/* <Swiper
              slidesPerView={3}
              spaceBetween={30}
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
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <div className="container1 marzer">
                  
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
                      <div className="">
                        <div className="conbot">
                        <h6>Public Connect</h6>
                        <p>
                          Tracks sentiments, grievances, & feedback, ensuring
                          timely responses & effective communication.
                        </p>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container1 marzer">
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
                    <div>
                    <div className="conbot">
                    <h6>Suspicious Tracking</h6>
                    <p>
                      Monitors potential threats, providing early warnings to
                      prevent adverse events.
                    </p>
                  </div>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container1 marzer">
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
                    <div>
                      <div className="conbot">
                    <h6>
                      Corem ipsum dolor sit amet, cons ectetur adipiscing elit.
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus orci cum
                      turpis augue elementum.{" "}
                    </p>
                    </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          <div className="align-btn-center2 corbtn">
            <div className="">
              <div className="three-swiper-button-prev">
                <HiArrowLeft className="recent-case-left-arrow m-0" />
              </div>
            </div>
            <div className="">
              <div className="three-swiper-button-next">
                <HiArrowRight className="recent-case-right-arrow m-0" />
              </div>
            </div>
          </div> */}

<Splide
              aria-label="My Favorite Images"
              ref={splideRef}
              className="saplidcrawl"
              options={{
                rewind: true,
                gap: "1rem",
                padding: "0rem",
                perPage: 3,
                arrows: false,
                pagination: false,
                breakpoints: {
                  1300: {
                    perPage: 2,
                    gap: "10rem",
                  },
                  1024: {
                    perPage: 1,
                    gap: "1rem",
                  },
                  992: {
                    perPage: 2,
                    gap: "0.2rem",
                  },
                  768: {
                    perPage: 1,
                    gap: "0.5rem",
                  },
                  576: {
                    perPage: 1,
                    gap: "0rem",
                  },
                },
              }}
            >
              <SplideSlide>
                <div className="container1 marzer">
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
                    <div className="">
                      <div className="conbot">
                        <h6>Public Connect</h6>
                        <p>
                          Tracks sentiments, grievances, & feedback, ensuring
                          timely responses & effective communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="container1 marzer">
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
                    <div>
                      <div className="conbot">
                        <h6>Suspicious Tracking</h6>
                        <p>
                          Monitors potential threats, providing early warnings
                          to prevent adverse events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="container1 marzer">
                  <div className="container3-wrap">
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
                    <div>
                      <div className="conbot">
                        <h6>
                          Corem ipsum dolor sit amet, cons ectetur adipiscing
                          elit.
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Tellus orci
                          cum turpis augue elementum.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <div className="splide__arrows">
              <button className="splide_prev" onClick={() => goPrev()}>
                <HiArrowLeft className="recent-case-left-arrow m-0" />
              </button>
              <button className="splide_next" onClick={() => goNext()}>
                <HiArrowRight className="recent-case-right-arrow m-0" />
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section8