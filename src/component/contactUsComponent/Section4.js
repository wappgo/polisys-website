import React from 'react'
import { Image } from 'react-bootstrap'
// import Image from "next/image";
// import Image1 from "../../../public/assets/contactUs/contact_us_section3.png";
const Image1 = `${process.env.PUBLIC_URL}/assets/contactUs/contact_us_section3.png`
const Section4 = () => {
  return (
    <div>
      <div className="contact-us-section4">
          <img src={Image1} style={{width:"100%"}}/>
        </div>
    </div>
  )
}

export default Section4