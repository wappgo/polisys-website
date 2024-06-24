
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import Image from "next/image";
import SlideSwiper from "../swiper.jsx";
// import "../../public/assets/styles/style.css";
// import Footer from "@/component/Footer.js";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import Section1 from "./Section1.js";
import Section3 from "./Section3.js";
import Section4 from "./Section4.js";
import Section5 from "./Section5.js";
import Section6 from "./Section6.js";
import Section7 from "./Section7.js";
import Section8 from "./Section8.js";
import Section9 from "./Section9.js";
import Section10 from "./Section10.js";
import Section11 from "./Section11.js";

export default function Home() {
  return (
    <div className="maindiv">
      <div className=""></div>
      {/* <div className="section1">
        <h1 className="grotheng col-10">
          <span>Growth Engine</span>for policy innovation and political
          advancement .
        </h1>

        <div className="row">
          <div className="col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus orci cum turpis
              augue elementum. Imperdiet sodales semper ut mattis dolor
              convallis. Lorem consectetur montes lectus amet.
            </p>
          </div>
          <div className="col-md-5">
            <div className="text-center">
              <button className="bookameeting-btn">Book A Meeting</button>
            </div>
          </div>
        </div>
        <div className=" imgdiv">
          <div className="row">
            <div className="col-12 col-lg-5 col-sm-12 col-sx-12">
              <img
                className="image-container"
                src="/assets/Img/dsfsdfdsf.png"
              />
            </div>
            <div className="col-12 col-lg-7 col-sm-12">
              <img className="home-img2 " src="/assets/Img/dgfdsgdfg.png" />
            </div>
          </div>
        </div>
      </div> */}
      <Section1 />
      <div className="section2"></div>
      <hr className="divider_hr2" />

      {/* <div className="section3">
        <h1>Our Trusted Client</h1>
        <div className="section3-container">
          <div className="row trustedClient">
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
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}
      <Section3 />

      {/* <div className="section4">
        <h3>
          Organizations must adapt strategies and build capabilities to address
          current challenges and seize future opportunities in today's
          converging business landscape.
        </h3>
      </div> */}
      <Section4 />

      {/* <div className="section5">
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
      </div> */}
      <Section5 />
      {/* <div className="section6">
        <h1>
          What methods can you employ to swiftly transform and create enduring
          value?
        </h1>
        <div className="row">
          <div className="col-md-8">
            <p className="section6-para">
              Lorem ipsum dolor sit amet consectetur. Tellus orci cum turpis
              augue elementum. Imperdiet sodales semper ut mattis dolor
              convallis. Lorem consectetur montes lectus amet.
            </p>
          </div>
          <div className="col-md-4">
            <button className="knowmoreservice">
              Know more about Services
            </button>
          </div>
        </div>
      </div> */}
      <Section6 />

      {/* <div className="sectionn">
        <ul className="row p-0">
          <div className="col-md-10 align-self-center">
            <div className="d-flex justify-content-between">
              <li className="li-style-none">Information & Technology</li>
              <li className="li-style-none">Legal</li>
              <li className="li-style-none">Government & Public Sector</li>
              <li className="li-style-none">Finance</li>
              <li className="li-style-none">Media</li>
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
                        className="two-swiper-button-prev"
                        alt="img"
                      />
                    </div>
                    <div className="right-carousel">
                      <img
                        src="/assets/home/carousel-right-arrow.svg"
                        className="two-swiper-button-next"
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
          modules={[Autoplay, Navigation]}
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
              <div className="col-md-4">
                <div>
                  <div className="sec2-heading">
                    <p>
                      Information <br /> & Technology
                    </p>
                  </div>
                  <div>
                    <img src="/assets/home/section7_rectangle.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
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
              <div className="col-md-4">
                <div>
                  <div className="sec2-heading">
                    <p>Legal</p>
                  </div>
                  <div>
                    <img src="/assets/home/section7_rectangle.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
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
              <div className="col-md-4">
                <div>
                  <div className="sec2-heading">
                    <p>Government & Public Sector</p>
                  </div>
                  <div>
                    <img src="/assets/home/section7_rectangle.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
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
              <div className="col-md-4">
                <div>
                  <div className="sec2-heading">
                    <p>Finance</p>
                  </div>
                  <div>
                    <img src="/assets/home/section7_rectangle.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
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
              <div className="col-md-4">
                <div>
                  <div className="sec2-heading">
                    <p>Media</p>
                  </div>
                  <div>
                    <img src="/assets/home/section7_rectangle.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
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
      </div> */}
       <Section7 />

      {/* <div className="sectionn2-container">
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
                <button className="contact-btn">Contact Us</button>
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
      </div> */}
      <Section8 />
      {/* <div className="sectionn3">
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
                      <div className="col-md-10">
                        <button className="sec-3-right-btn">
                          Read Full Article
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
                      <div className="col-md-10">
                        <button className="sec-3-right-btn">
                          Read Full Article
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="align-btn-center">
              <div className="col-md-2 d-flex float-end">
                <div className="left-carousel">
                  <img
                    src="/assets/home/carousel-left-arrow.svg"
                    className="four-swiper-button-prev"
                    alt="img"
                  />
                </div>
                <div className="right-carousel">
                  <img
                    src="/assets/home/carousel-right-arrow.svg"
                    className="four-swiper-button-next"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Section9 />
      <hr className="divider_hr" />
      {/* <div className="section7">
        <center>
          <h1>
            As a team we strive together, collaborate and provide the best
            experience for our clients.
          </h1>
        </center>

        <div className="row  w-100">
          <div className="col-lg-4 exprience">
            <h2>12+</h2>
            <p>Years of experience</p>
          </div>

          <div className="col-lg-4 exprience">
            <h2>150+</h2>
            <p>Project completed</p>
          </div>

          <div className="col-lg-4 exprience">
            <h2>250+</h2>
            <p>Leading companies</p>
          </div>
        </div>
      </div> */}
      <Section10 />

      <hr className="divider_hr" />

      {/* <div className="section8">
        <div className="row contactsec">
          <div className=" col-sm-7">
            <h6>LET’S TALK</h6>

            <h2>Get in touch with us</h2>

            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>

            <button className="contactus-btn">Contact Us</button>
          </div>
          <div className="col-5 col-md-5">
            <div className="contact-us-img">
              <img className="" src="/assets/Img/contactimg.png" />
            </div>
          </div>
        </div>
      </div> */}
      <Section11 />

      {/* <hr className="faded_divider_hr" /> */}

      {/* <Footer /> */}
    </div>
  );
}
