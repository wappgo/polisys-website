import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Pagination, Autoplay, Navigation, FreeMode, Thumbs } from "swiper/modules";
// import Image from "next/image";
import SlideSwiper from "../../component/swiper.jsx";

const Section7 = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="sectionn">
      <ul className="row p-0">
        <div className="col-md-10 align-self-center">
          <div className="d-flex justify-content-between">
            {/* <li className="li-style-none">Information & Technology</li>
              <li className="li-style-none">Legal</li>
              <li className="li-style-none">Government & Public Sector</li>
              <li className="li-style-none">Finance</li>
              <li className="li-style-none">Media</li>
            </div> */}
            <Swiper
              onSwiper={thumbsSwiper}
              spaceBetween={1}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              activeclass="active-slide"
            >
              <SwiperSlide>
                <li className="li-style-none">Information & Technology</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="li-style-none">Legal</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="li-style-none">Government & Public Sector</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="li-style-none">Finance</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="li-style-none">Media</li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-md-12">
              <div className="align-btn-center3">
                <div className="sliderarrowbtn float-end">
                  <div className="left-carousel">
                    <img
                      src="/assets/home/carousel-left-arrow.svg"
                      className="two-swiper-button-prev w-100"
                      alt="img"
                    />
                  </div>
                  <div className="right-carousel">
                    <img
                      src="/assets/home/carousel-right-arrow.svg"
                      className="two-swiper-button-next w-100"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Navigation, FreeMode, Thumbs]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={{
          nextEl: ".two-swiper-button-next",
          prevEl: ".two-swiper-button-prev",
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
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div>
                <div className="sec2-heading">
                  <p>
                    Information <br /> & Technology
                  </p>
                </div>
                <div>
                  <img src="/assets/home/section7_rectangle.png" style={{width:"100%"}} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  ">
              <div className="sectionn-right-container">
                <div className="sectionn-right-container-1">
                  <p className="sectionn-right-para">
                    Corem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.{" "}
                  </p>
                </div>
                <div className="flex-styles">
                  <div className="flex-styles row">
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div>
                <div className="sec2-heading">
                  <p>Legal</p>
                </div>
                <div>
                  <img src="/assets/home/section7_rectangle.png" style={{width:"100%"}} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  ">
              <div className="sectionn-right-container">
                <div className="sectionn-right-container-1">
                  <p className="sectionn-right-para">
                    Corem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.{" "}
                  </p>
                </div>
                <div className="flex-styles">
                  <div className="flex-styles row">
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div>
                <div className="sec2-heading">
                  <p>Government & Public Sector</p>
                </div>
                <div>
                  <img src="/assets/home/section7_rectangle.png" style={{width:"100%"}} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  ">
              <div className="sectionn-right-container">
                <div className="sectionn-right-container-1">
                  <p className="sectionn-right-para">
                    Corem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.{" "}
                  </p>
                </div>
                <div className="flex-styles">
                  <div className="flex-styles row">
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div>
                <div className="sec2-heading">
                  <p>Finance</p>
                </div>
                <div>
                  <img src="/assets/home/section7_rectangle.png" style={{width:"100%"}} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  ">
              <div className="sectionn-right-container">
                <div className="sectionn-right-container-1">
                  <p className="sectionn-right-para">
                    Corem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.{" "}
                  </p>
                </div>
                <div className="flex-styles">
                  <div className="flex-styles row">
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div>
                <div className="sec2-heading">
                  <p>Media</p>
                </div>
                <div>
                  <img src="/assets/home/section7_rectangle.png" style={{width:"100%"}} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  ">
              <div className="sectionn-right-container">
                <div className="sectionn-right-container-1">
                  <p className="sectionn-right-para">
                    Corem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.{" "}
                  </p>
                </div>
                <div className="flex-styles">
                  <div className="flex-styles row">
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                      <img
                        src="/assets/home/star-icon.svg"
                        className="list-spacing"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Section7