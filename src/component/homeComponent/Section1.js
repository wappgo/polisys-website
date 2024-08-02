import React, { useEffect,useRef } from 'react';
// import { useRouter } from 'next/navigation';
import { useNavigate } from 'react-router-dom';

const Section1 = () => {
  const videoRef = useRef(null);
  const router = useNavigate();
  useEffect(() => {
    const video = videoRef.current;
    // if (video) {
    //   const playPromise = video.play();
    //   if (playPromise !== undefined) {
    //     playPromise.then(_ => {
    //       // Autoplay started
    //     }).catch(error => {
    //       // Autoplay failed, user interaction required
    //       console.error('Autoplay failed:', error);
    //     });
    //   }
    // }
  }, []);

  return (
    <div className='section1home backlineargr'style={{position:'relative'}}>
      {/* <video  ref={videoRef} style={{ width: "100%", height: "100%", filter: "brightness(0.5)" }} src="/assets\home\3163534-hd_1920_1080_30fps.mp4" autoPlay loop muted /> */}
      <div className="section1">

        <div className="">
          <h1 className="grotheng">
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
            <div className="text-center mobile-view-align bookmetbtnres" style={{zIndex:"10",position:"relative"}}>
              <button onClickCapture={() => router("/contact-us")} className="bookameeting-btn">Book A Meeting</button>
              
            </div>

            <div className='onlymob'>
              <p className="homor">or</p>
              <div className='d-flex justify-content-center'>
                <button className='whatbtn'>
                  <img src='/assets/home/icon _whatsapp.svg' />
                </button>
                <button className='whatbtn'>
                  <img src='/assets/home/mail.svg' />
                </button>
                <button className='whatbtn'>
                  <img src='/assets/home/call.svg' />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*<div className=" imgdiv">
          <div className="row">
            <div className="col-12 col-lg-5 col-sm-12 col-xs-12 pe-4">
              <img
                className="image-container"
                src="/assets/Img/dsfsdfdsf.png"
              />
            </div>
            <div className="col-12 col-lg-7 col-sm-12 col-xs-12 ps-4">
              <img className="home-img2" src="/assets/Img/dgfdsgdfg.png" />
            </div>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default Section1