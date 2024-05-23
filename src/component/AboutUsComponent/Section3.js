import Image from "next/image";
import Image2 from "../../../public/assets/aboutUs/about_us_sec3_right_img.png";
import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Pagination, Autoplay, Navigation, FreeMode, Thumbs } from "swiper/modules";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const Section3 = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div>
        <div className="about-us-section3">
          <div className="about-us-sec3-wrap1">
            <div>
              <h2 className="about-us-sec3-head">Our Roots & Basis</h2>
            </div>
            <div>
              <ul className="about-us-sec3-ul">
                <Swiper
        onSwiper={setThumbsSwiper}
        // spaceBetween={130}
        breakpoints={{
          320: {
            spaceBetween: 80,
          },
          425: {
            spaceBetween: 120,
          },
          576: {
            spaceBetween: 120,
          },
          768: {
            spaceBetween: 120,
          },
          1024: {
            spaceBetween: 120,
          },
          1600: {
            spaceBetween: 120,
          },
          2600: {
            spaceBetween: 120,
          },
        }}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
        activeClass="active-slide"
      >
        <SwiperSlide>
          <li className="about-us-sec3-ls">Our Commitment</li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="about-us-sec3-ls">Our Context</li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="about-us-sec3-ls">Our Values</li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="about-us-sec3-ls">Our Stories</li>
        </SwiperSlide>
      </Swiper>
              </ul>
            </div>
          </div>
          {/* <div className="about-us-sec3-wrap2">
            <div>
              <h2 className="about-us-sec3-heads">Committed to a positive impact.</h2>
              <p className="about-us-sec3-para">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
 Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus.
              </p>
            </div>
            <div>
              <Image className="about-us-sec3-img" src={Image2} alt="Image"/>
            </div>
          </div> */}
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
            nextEl: ".five-swiper-button-next",
            prevEl: ".five-swiper-button-prev",
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
          <div className="about-us-sec3-wrap2">
            <div>
              <h2 className="about-us-sec3-heads">Committed to a positive impact.</h2>
              <p className="about-us-sec3-para">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
 Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus.
              </p>
            </div>
            <div>
              <Image className="about-us-sec3-img" src={Image2} alt="Image"/>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="about-us-sec3-wrap2">
            <div>
              <h2 className="about-us-sec3-heads">Committed to a positive impact.</h2>
              <p className="about-us-sec3-para">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
 Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus.
              </p>
            </div>
            <div>
              <Image className="about-us-sec3-img" src={Image2} alt="Image"/>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="about-us-sec3-wrap2">
            <div>
              <h2 className="about-us-sec3-heads">Committed to a positive impact.</h2>
              <p className="about-us-sec3-para">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
 Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus.
              </p>
            </div>
            <div>
              <Image className="about-us-sec3-img" src={Image2} alt="Image"/>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="about-us-sec3-wrap2">
            <div>
              <h2 className="about-us-sec3-heads">Committed to a positive impact.</h2>
              <p className="about-us-sec3-para">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
 Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus.
              </p>
            </div>
            <div>
              <Image className="about-us-sec3-img" src={Image2} alt="Image"/>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
        <div className="about-us-arrow-contain">
        <div className="about-us-arrow-wrap">
                <div className="abt-us-left-arrw">
                  <div className="five-swiper-button-prev">
                    <HiArrowLeft className="" />
                  </div>
                </div>
                <div className="abt-us-right-arrw">
                  <div className="five-swiper-button-next">
                    <HiArrowRight className="" />
                  </div>
                </div>
              </div>
              </div>
    </div>
    </div>
  )
}

export default Section3