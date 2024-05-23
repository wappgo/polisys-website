import React from 'react';
// import Video1 from "../../../public/assets/contactUs/contact_us_hero_bg_video.mp4"


const ContactUsHero = () => {
  return (
    <div style={{position:"relative"}}>
      <video style={{width:"100vw", height:"100%", filter: "brightness(0.5)"}} src={require('../../../public/assets/contactUs/contact_us_hero_bg_video.mp4')} autoPlay loop/>
        <div className="contact-us-hero-section-left-div">
            <div>
              <h3 className="contact-us-hero-section-left-content">
                Contact Us
              </h3>
              <h1 className="contact-us-hero-left-heading">Connect With Us</h1>
              <div className="row">
                <div className="col-lg-6">
                  <p className="contact-us-hero-left-para">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="contact-us-hero-right-section-wrapper">
                    <p className="contact-us-hero-right-para">
                      Recent News Letters
                    </p>
                    <p className="contact-us-hero-right-para">
                      How can value realized today reshape tomorrow ?
                    </p>
                    <p className="contact-us-hero-right-date">13 Aug 2023</p>
                  </div>
                </div>
              </div>
              <div>
  </div>
            </div>
          </div>
    </div>
  )
}

export default ContactUsHero