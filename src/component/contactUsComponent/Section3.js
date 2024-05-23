import React from 'react';
import Image from "next/image";
import Image2 from "../../../public/assets/contactUs/contact_us_map_img.png";
import Image3 from "../../../public/assets/contactUs/contact_us_map_img2.png";

const Section3 = () => {
  return (
    <div>
      <div className="contact-us-section3">
          <div className="row">
            <div className="col-lg-9">
          <Image src={Image2} alt="image2"/>
            </div>
            <div className="col-lg-3">
              <div className="contact-img-mtop">

          <Image src={Image3} alt="image3"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Section3