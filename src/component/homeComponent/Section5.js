import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Image from "next/image";
import SlideSwiper from "../../component/swiper";

const Section5 = () => {
  return (
    <div className="section5">
        <h6>INSIGHTS CORNER</h6>
        <div className="section-5-head-container">
          <div className="fethigcom">
            <div className="featheightext">
              <h2>Featured Highlights</h2>
            </div>
            <div className="">
              <div className="align-btn-center4">
                <div className="sliderarrowbtn float-end position-relative">
                  <div className="left-carousel">
                    <img
                      src="/assets/home/carousel-left-arrow.svg"
                      className="d-block one-swiper-button-prev w-100"
                      alt="img"
                    />
                  </div>
                  <div className="right-carousel">
                    <img
                      src="/assets/home/carousel-right-arrow.svg"
                      className="d-block one-swiper-button-next w-100"
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
              460: {
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
              <div className="featurecard">
                <div>
                  <img className="img-fluid featimg m-0" src="/assets/Img/sybersyc.png" />
                </div>
                <div className="featurecardfooter">
                  <span>#1 insights</span> 
                  <h4>Information & Technology</h4>
                  <p>
                  We provide innovative IT solutions to enhance productivity and streamline operations. Partner with us for reliable, cutting-edge technology that empowers your business to thrive.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecard">
                <div>
                  <img className="img-fluid featimg m-0" src="/assets/home/Rectangle 682.png" />
                </div>
                <div className="featurecardfooter">
                  <span>#2 insights</span> 
                  <h4>Law & Legal Proceedings</h4>
                  <p>
                  we offer expert legal services tailored to meet your needs. Our experienced attorneys specialize in various areas, including corporate law, litigation, and estate planning. We provide reliable legal support for all your legal needs.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="featurecard">
                <div>
                  <img className="img-fluid featimg m-0" src="/assets/home/financeandwea.png" />
                </div>
                <div className="featurecardfooter">
                  <span>#3 insights</span> 
                  <h4>Finance & Wealth</h4>
                  <p>
                  We provide expert financial and wealth management services. Our advisors specialize in investment planning, retirement strategies, and asset management. We secure your financial future with personalized solutions.
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