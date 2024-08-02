import React from 'react';
import { useNavigate } from 'react-router-dom';



const GetInTouch = () => {
    const router = useNavigate();
    return (
        <div>
            <div className="section8">
            <div className="row contactsec">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <h6>LET’S TALK</h6>

            <h2>Get in touch with us</h2>

            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>

            <button onClickCapture={()=>router("/contact-us")} className="contactus-btn">Contact Us</button>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="contact-us-img">
              <img className="" src="/assets/Img/contactimg.png" />
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default GetInTouch
