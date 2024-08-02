import React from 'react';
import AboutUsHero from "../../component/AboutUsComponent/AboutUsHero";
import Section2 from "../../component/AboutUsComponent/Section2";
import Section3 from "../../component/AboutUsComponent/Section3";
import Section4 from "../../component/AboutUsComponent/Section4";
import Section5 from "../../component/AboutUsComponent/Section5";
import Section6 from "../../component/AboutUsComponent/Section6";
import Section7 from "../../component/AboutUsComponent/Section7";
import BannerPlaceholder from "../BannerPlaceholder";
import BuildingFuture from "../BuildingFuture";
import GetInTouch from '../GetInTouch';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const AboutUs = () => {
    console.log("images.about_us_sec2_img.src")
    return (
      <>
      <div>
      {/* <div className="about-us-main">
        <div className="about-us-sub-heading">
          <p className="about-sub-head">Polisys India {">"} About Us</p>
        </div>
        <div className="hero-section-left-div">
          <div>
            <h3 className="hero-section-left-content">
            Know More
            </h3>
            <h1 className="hero-left-heading">
            About Us
            </h1>
            <div className="row">
              <div className="col-lg-6">
                
            <p className="hero-left-para">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
              </div>
              <div className="col-lg-6">
                <div className='hero-right-section-wrapper'>
                <p className="hero-right-para">Featured</p>
                <p className="hero-right-para">
                How can value realized today reshape tomorrow ?
                </p>
                <p className="hero-right-date">13 Aug 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <AboutUsHero />
      {/* <div className="about-us-section2">
        <div className="about-us-sec2-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <p className="about-us-sec2-top-para">GET A GLANCE</p>
                <h2 className="about-us-sec2-head">
                Our Purpose
                </h2>
                <p className="about-us-sec2-title">
                Fostering brighter futures through inventive thinking and the shared pool of knowledge.
                </p>
                <p className="about-us-sec2-para">
                Polisys is a company specializing in IT services, consulting, and business solutions, having collaborated with numerous global industry leaders for the last five decades. We are firm believers that innovation and shared knowledge have the potential to shape our collective future with a more significant purpose.
                </p>
                <div className='about-us-sec2-read-more-wrapper'>
                  <div className="about-us-sec2-read-more-wrapper2">
  
                <p className="about-us-sec2-read-more">Read More</p>
                <Image src={ReadMoreImg} alt="image" />
                </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
              <Image src={Image1} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Section2 />
      {/* <div className="about-us-section3">
        <div className="about-us-sec3-wrapper">
          <div className="row">
          <div className="col-lg-7">
            <div>
              <p className="about-us-sec3-title">Our Roots & Basis</p>
              <h2 className="about-us-sec3--left-head">Committed to a positive impact.</h2>
              <p className="about-us-sec3-left-content">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
   Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-us-sec3-page-title">
              <p>Our Commitment</p>
              <p>Our Context</p>
              <p>Our Values</p>
              <p>Our Stories</p>
            </div>
            <div className="about-us-sec3-right-img">
            <Image src={Image2} alt="image" />
            </div>
          </div>
          </div>
        </div>
      </div> */}
      <Section3 />
      {/* <Section4 /> */}
      {/* <div className="about-us-section5">
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
      </div> */}
      <Section5 />
      <Section6 />
      {/* <div className="about-us-section7">
        <div className="about-us-section7-wrapper">
          <h2 className=''>
          Read our annual report
          </h2>
          <p>
          Please provide the specific report you'd like me to read, or let me know if you'd like me <br /> to summarize a report on EY's progress in building a better working world.
          </p>
          <button className=''>
          Read Report
          </button>
        </div>
      </div> */}
      <Section7 />
      
      <div className='abbanerpla'>
        <BannerPlaceholder />
      </div>
      <BuildingFuture />
      <div>
      <div className="section7">
        <center>
          <h1>
            As a team we strive together, collaborate and provide the best
            experience for our clients.
          </h1>
        </center>

        <div className="w-100">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },

            576: {
              slidesPerView: 1,
              spaceBetween: 0,
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
            <div className=" exprience">
              <h2>12+</h2>
              <p>Years of experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" exprience">
              <h2>150+</h2>
              <p>Project completed</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" exprience">
              <h2>250+</h2>
              <p>Leading companies</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      </div>
      <GetInTouch />
      </div>
      </>
    )
  }
  export default AboutUs