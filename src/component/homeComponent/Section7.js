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
  const [carousel, setCarousel] = useState(1)

  const changeCarouselTitleCol = (cal) => {
    if (cal == "Add") {
      if (carousel == 5) {
        setCarousel(1)
      } else {
        setCarousel(carousel + 1)
      }

    } else if (cal == "Sub") {
      if (carousel == 1) {
        setCarousel(5)
      } else {
        setCarousel(carousel - 1)
      }

    }

  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(thumbsSwiper, 'ta;slfa');
  return (
    <div className="sectionn imfosec">

      <div className='row'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button infiteacc" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                 <span>01</span> Information & Technology
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button infiteacc " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <span>02</span> Cyber Security
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button infiteacc " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <span>03</span> Marketing Solutions
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button infiteacc" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                <span>04</span> Legal Services
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingFour">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                <button class="accordion-button infiteacc " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                <span>05</span> Law & Legal Proceedings
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                <button class="accordion-button infiteacc " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                <span>06</span> Finance & Wealth
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ul className="row p-0 liststy">
        <div className="col-md-10 align-self-center">
          <div className="d-flex justify-content-between">


            <li className={carousel == 1 ? "li-style-none text-center infotecol" : "li-style-none text-center"}>Information & Technology</li>

            <li className={carousel == 2 ? "li-style-none text-center infotecol" : "li-style-none text-center"}>Legal</li>

            <li className={carousel == 3 ? "li-style-none text-center infotecol" : "li-style-none text-center"}>Government & Public Sector</li>

            <li className={carousel == 4 ? "li-style-none text-center infotecol" : "li-style-none text-center"}>Finance</li>


            <li className={carousel == 5 ? "li-style-none text-center infotecol" : "li-style-none text-center"}>Media</li>


          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-md-12">
              <div className="align-btn-center3">
                <div className="sliderarrowbtn float-end">
                  <div className="left-carousel" >
                    <img
                      onClick={() => changeCarouselTitleCol("Sub")}
                      src="/assets/home/carousel-left-arrow.svg"
                      className="two-swiper-button-prev w-100"
                      alt="img"
                    />
                  </div>
                  <div className="right-carousel" >
                    <img
                    onClick={() => changeCarouselTitleCol("Add")}
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
          <div className="row gx-5">
            <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <div className='d-flex flex-column'>
                <div className="sec2-heading m-0">
                  <p className='m-0'>
                    Information <br /> & Technology
                  </p>
                </div>
                <div className='mt-auto shrimg'>
                  <img src="/assets/home/section7_rectangle.png" style={{ width: "100%" }} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-8 ">
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
                  <div className="flex-styles row gy-2">
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>

                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row gx-5">
            <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <div className='d-flex flex-column'>
                <div className="sec2-heading">
                  <p>Legal</p>
                </div>
                <div className='mt-auto shrimg'>
                  <img src="/assets/home/section7_rectangle.png" style={{ width: "100%" }} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-8 ">
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
                  <div className="flex-styles row gy-2">
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>

                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>
                    <div className="col-6">

                      <div className='techpoint'>
                        <div className='techpointimg '>
                          <img
                            src="/assets/home/star-icon.svg"
                            className=""
                            alt="img"
                          />
                        </div>
                        <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>



                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row gx-5">
            <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <div className='d-flex flex-column'>
                <div className="sec2-heading m-0">
                  <p className='m-0'>Government & Public Sector</p>
                </div>
                <div className='mt-auto shrimg'>
                  <img src="/assets/home/section7_rectangle.png" style={{ width: "100%" }} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-8 ">
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
                <div className="flex-styles row gy-2">
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>

                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row gx-5">
            <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <div className='d-flex flex-column'>
                <div className="sec2-heading">
                  <p>Finance</p>
                </div>
                <div className='mt-auto shrimg'>
                  <img src="/assets/home/section7_rectangle.png" style={{ width: "100%" }} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-8 ">
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
                <div className="flex-styles row gy-2">
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>

                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row gx-5">
            <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <div className='d-flex flex-column'>
                <div className="sec2-heading">
                  <p>Media</p>
                </div>
                <div className='mt-auto shrimg'>
                  <img src="/assets/home/section7_rectangle.png" style={{ width: "100%" }} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-8 ">
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
                <div className="flex-styles row gy-2">
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>

                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    <div className="col-6">
                     
                      <div className='techpoint'>
                      <div className='techpointimg '>
                      <img
                        src="/assets/home/star-icon.svg"
                        className=""
                        alt="img"
                      />
                      </div>
                      <div className='techpointtext'>Etiam eu turpis molestie</div>
                      </div>


                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  )
}

export default Section7