import React from 'react';
import Image from "next/image";
import ReadMoreImg from "../../../public/assets/aboutUs/about_us_read_more.svg";
import Image1 from "../../../public/assets/aboutUs/about_us_sec2_img.png";

const Section2 = () => {
  return (
    <div>
        <div className="about-us-section2">
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
    </div>
    </div>
  )
}

export default Section2