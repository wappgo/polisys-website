import React from 'react';

const Section2 = () => {
  return (
    <div>
        <div className="contact-us-section2">
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
                        <textarea placeholder="Message" className="contact-us-inputs contact-us-message w-100">
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
        </div>
    </div>
  )
}

export default Section2