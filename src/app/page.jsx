"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import SlideSwiper from "../component/swiper.jsx";
import "../../public/assets/styles/style.css";
import Footer from "@/component/Footer.js";

// const options = {
//   loop: false,
//   dots: false,
//   nav: true,
//   // navText: [
//   //     '<span class="arrow tback">‹</span>',
//   //     '<span class="arrow tforward">›</span>',
//   // ],
//   autoWidth: true,
//   margin: 10,
//   responsive: {
//       0: {
//           items: 1,
//           // nav:false
//       },
//       600: {
//           items: 3,
//           // nav:false
//       },
//       1000: {
//           items: 4,
//           // nav:false
//       },
//       1200: {
//           items: 5,
//           // nav:false
//       }

//   }
// }

export default function Home() {
  return (
    <div className="maindiv">
      {/* <div className='polisyssec'>
        <h6 >Polisys India <span>-</span>  Insights <span>-</span>  Information & Technology </h6>
      </div>
      <div className='sectionpadding section1'>
        <div className='row'>
          <div className='col-6 col-md-6'>
            <h6>Insights</h6>

            <h2>Technology</h2>

            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

            

          </div>
          <div className='col-6 col-md-6'>

          </div>
        </div>

      </div> */}

      <div className="section1">
        <h1 className="grotheng">
          <span>Growth Engine</span> for policy innovation and political
          advancement .
        </h1>

        <div className="pbut">
          <div className="col-7 col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus orci cum turpis
              augue elementum. Imperdiet sodales semper ut mattis dolor
              convallis. Lorem consectetur montes lectus amet.
            </p>
          </div>
          <div className="col-5 col-md-5 ">
            <button className="bookameeting-btn">Book A Meeting</button>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="row imgdiv">
          <div className="col-5 col-md-5 paddleft">
            <img className="sec1img" src="/assets/Img/dsfsdfdsf.png" />
          </div>
          <div className="col-7 col-md-7 paddright">
            <img className="sec1img1" src="/assets/Img/dgfdsgdfg.png" />
          </div>
          <hr />
        </div>
      </div>

      <div className="section3">
        <h1>Our Trusted Client</h1>
        <div className="trustedClient">
          <img className="trustlogo" src="/assets/Img/Logo1.svg" />
          <img className="trustlogo" src="/assets/Img/Logo2.svg" />
          <img className="trustlogo" src="/assets/Img/Logo3.svg" />
          <img className="trustlogo" src="/assets/Img/Logo4.svg" />
          {/*          
         <Swiper
             slidesPerView={4}
             spaceBetween={30}
             pagination={{
               clickable: true,
             }}
             modules={[Pagination, Autoplay]}
             className="mySwiper"
             loop="true"
          >
              <SwiperSlide><img className="trustlogo" src="/assets/Img/Logo1.svg" /></SwiperSlide>
              <SwiperSlide><img className="trustlogo trustlogocent" src="/assets/Img/Logo2.svg" /></SwiperSlide>
              <SwiperSlide><img className="trustlogo trustlogocent" src="/assets/Img/Logo3.svg" /></SwiperSlide>
              <SwiperSlide><img className="trustlogo trustlogocent" src="/assets/Img/Logo4.svg" /></SwiperSlide>
            </Swiper> */}
        </div>
      </div>

      <div className="section4">
        <h3>
          Organizations must adapt strategies and build capabilities to address
          current challenges and seize future opportunities in today's
          converging business landscape.
        </h3>
      </div>

      <div className="section5">
        <h6>UPDATE CORNER</h6>

        <h2>Featured Highlights</h2>

        <div className="mainfeaturecard">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            navigation
            scrollbar={{ draggable: true }}
            modules={[Autoplay]}
            className="mySwiper"
            loop="true"
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
          </Swiper>
        </div>
      </div>
      <div className="section6">
        <h1>
          What methods can you employ to swiftly transform and create enduring
          value?
        </h1>
        <div className="sec6footer">
          <div className="col-7 col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus orci cum turpis
              augue elementum. Imperdiet sodales semper ut mattis dolor
              convallis. Lorem consectetur montes lectus amet.
            </p>
          </div>
          <div className="col-5 col-md-5 albtnend">
            <button className="knowmoreservice">
              Know more about Services
            </button>
          </div>
        </div>
      </div>

      <div className="section7">
        <center>
          <h1>
            As a team we strive together, collaborate and provide the best
            experience for our clients.
          </h1>

          <div className="expriencesection">
            <div className="exprience">
              <h2>12+</h2>
              <p>Years of experience</p>
            </div>

            <div className="exprience">
              <h2>150+</h2>
              <p>Project completed</p>
            </div>

            <div className="exprience">
              <h2>250+</h2>
              <p>Leading companies</p>
            </div>
          </div>
        </center>
      </div>

      <div className="section8">
        <div className="row contactsec">
          <div className="col-7 col-md-7">
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
            <img className="" src="/assets/Img/contactimg.png" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
