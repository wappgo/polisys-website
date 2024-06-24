import React from "react";
// import "../../../public/assets/styles/style.css";
// import Image1 from "../../../public/assets/contactUs/contact_us_section3.png";
// import Image from "next/image";
import ContactUsHero from "../../component/contactUsComponent/ContactUsHero";
import Section2 from "../../component/contactUsComponent/Section2";
import Section3 from "../../component/contactUsComponent/Section3";
import Section4 from "../../component/contactUsComponent/Section4";

const ContactUs = () => {
  
  return (
    <>
      <div>
        <div className="contact-us-main">
          <div className="contact-us-sub-heading">
            <p className="contact-sub-head">Polisys India {" > "} Contact Us</p>
          </div>
          {/* <div className="contact-us-hero-section-left-div">
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
            </div>
          </div> */}
          <ContactUsHero />
        </div>
        {/* <div className="contact-us-section2">
          <div>
            <div className="row">
              <div className="col-lg-5">
                <div clasName="">
                  <h1 className="contact-us-sec2-left-head">Location</h1>
                  <p className="contact-us-sec2-left-para">
                    Avenida Marta Lopes, Nº2
                    <br />
                    8400-401 Vila Real, Portugal
                  </p>
                </div>
                <div clasName="">
                  <h1 className="contact-us-sec2-left-head">Open hours</h1>
                  <p className="contact-us-sec2-left-para">
                    Weekdays - 9:00am to 6:00pm
                    <br />
                    Weekends - Closed
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <h1 className="contact-us-sec2-right-head">
                    How Can We <span>Help</span> ?
                  </h1>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          placeholder="Name"
                          className="contact-us-inputs"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          placeholder="Email"
                          className="contact-us-inputs"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          placeholder="Phone number"
                          className="contact-us-inputs"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          placeholder="Phone number"
                          className="contact-us-inputs"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="contact-us-message-container">
                        <textarea className="contact-us-inputs contact-us-message">
                          Message
                        </textarea>
                      </div>
                      <div className="contact-us-consent-container-wrapper">
                        <div className="contact-us-consent-container">
                          <input
                            className="contact-us-consent-btn"
                            type="checkbox"
                          />
                          <p>
                            I consent to Polisys processing my data for contact
                            purposes.
                          </p>
                        </div>
                      </div>
                      <button className="contact-us-form-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Section2 />
        {/* <div className="contact-us-section3">
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
        </div> */}
        <Section3 />
        {/* <div className="contact-us-section4">
          <Image src={Image1} style={{width:"100%"}}/>
        </div> */}
        <Section4 />
      </div>
    </>
  );
};

export default ContactUs;
