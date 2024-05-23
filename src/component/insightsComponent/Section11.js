import React from 'react';
import { useRouter } from 'next/navigation';

const Section11 = () => {

  const router = useRouter();
  
  return (
    <div className="section8">
        <div className="row contactsec">
          <div className=" col-sm-7">
            <h6>LET’S TALK</h6>

            <h2>Get in touch with us</h2>

            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>

            <button onClickCapture={()=>router.push("/contact-us")} className="contactus-btn">Contact Us</button>
          </div>
          <div className="col-5 col-md-5">
            <div className="contact-us-img">
              <img className="" src="/assets/Img/contactimg.png" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Section11