import React from 'react';
import { useRouter } from 'next/navigation';

const Section1 = () => {

  const router = useRouter();
  
  return (
    <div className="section1">
      <div className="sec1-head-wrap">
        <h1 className="grotheng col-10">
          <span>Growth Engine</span>for policy innovation and political
          advancement .
        </h1>
        <div className="sec1-head-background">

        </div>
      </div>

        <div className="row">
          <div className="col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus orci cum turpis
              augue elementum. Imperdiet sodales semper ut mattis dolor
              convallis. Lorem consectetur montes lectus amet.
            </p>
          </div>
          <div className="col-md-5">
            <div className="text-center mobile-view-align">
              <button onClickCapture={()=>router.push("/contact-us")} className="bookameeting-btn">Book A Meeting</button>
            </div>
          </div>
        </div>
        <div className=" imgdiv">
          <div className="row">
            <div className="col-12 col-lg-5 col-sm-12 col-sx-12">
              <img
                className="image-container"
                src="/assets/Img/dsfsdfdsf.png"
              />
            </div>
            <div className="col-12 col-lg-7 col-sm-12">
              <img className="home-img2 " src="/assets/Img/dgfdsgdfg.png" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Section1