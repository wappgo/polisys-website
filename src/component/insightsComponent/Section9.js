import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Image from "next/image";
import { Image } from 'react-bootstrap';
// import Image1 from "../../../public/assets/insights/insights_explore_img1.png";
// import Image2 from "../../../public/assets/insights/insights_explore_img2.png";
// import Image3 from "../../../public/assets/insights/insights_explore_img3.png";
// import Circle from "../../../public/assets/insights/insights_red_circle.svg";
// import Arrow from "../../../public/assets/insights/insights_white_clip_arrow.svg";
import SlideSwiper from "../swiper.jsx";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const Image1 = `${process.env.PUBLIC_URL}assets/insights/insights_explore_img1.png`
const Image2 = `${process.env.PUBLIC_URL}assets/insights/insights_explore_img2.png`
const Image3 = `${process.env.PUBLIC_URL}assets/insights/insights_explore_img3.png`

const Section9 = () => {
  return (
    <div className="insights-section9">
      <div className="insights-sec9-top-wrap">
        <div className="">
          <p className="insights-section9-tag">
            EXPLORE INDUSTRIES THAT WE EXCEL
          </p>
          <h2 className="insights-section9-head">
            Explore Our Capabilities
          </h2>
        </div>
        <div className="insights-sec9-arrow-wrap">
          <div className="left-carousel insights-swiper-button-prev">
            <img
              src="/assets/home/carousel-left-arrow.svg"
              className="w-100"
              alt="img"
            />
          </div>
          <div className="right-carousel insights-swiper-button-next">
            <img
              src="/assets/home/carousel-right-arrow.svg"
              className="w-100"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".insights-swiper-button-next",
            prevEl: ".insights-swiper-button-prev",
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
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="insights-sec9-styling">
              <div className="insights-sec9-img">
                <img src={Image1} alt="image1" style={{width:"100%"}} />
                {/* <div className="insights-sec9-img1">
                  <Image src={Circle} alt="image1" />
                </div>
                <div className="insights-sec9-img2">
                  <Image src={Arrow} alt="image1" />
                </div> */}
                <div className="insights-sec9-img-head-div">
                  <h2 className="insights-sec9-img-head">
                    Information & Technology
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insights-sec9-styling">
              <div className="insights-sec9-img">
                <img src={Image2} alt="image1" style={{width:"100%"}}/>
                {/* <div className="insights-sec9-img1">
                  <Image src={Circle} alt="image1" />
                </div>
                <div className="insights-sec9-img2">
                  <Image src={Arrow} alt="image1" />
                </div> */}
                <div className="insights-sec9-img-head-div2">
                  <h2 className="insights-sec9-img-head">Banking & Finance</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insights-sec9-styling">
              <div className="insights-sec9-img">
                <img src={Image3} alt="image1"style={{width:"100%"}} />
                {/* <div className="insights-sec9-img1">
                  <Image src={Circle} alt="image1" />
                </div>
                <div className="insights-sec9-img2">
                  <Image src={Arrow} alt="image1" />
                </div> */}
                <div className="insights-sec9-img-head-div3">
                  <h2 className="insights-sec9-img-head">
                    Policies Implementation & Politics
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insights-sec9-styling">
              <div className="insights-sec9-img">
                <img src={Image3} alt="image1" style={{width:"100%"}} />
                {/* <div className="insights-sec9-img1">
                  <Image src={Circle} alt="image1" />
                </div>
                <div className="insights-sec9-img2">
                  <Image src={Arrow} alt="image1" />
                </div> */}
                <div className="insights-sec9-img-head-div3">
                  <h2 className="insights-sec9-img-head">
                    Policies Implementation & Politics
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Section9