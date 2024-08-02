import React, { useEffect,useRef } from 'react'

const AboutUsHero = () => {
  const videoRef = useRef(null);
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
    <div>
        <div className="about-us-main">
      <div className="about-us-sub-heading">
        <p className="about-sub-head">Polisys India {">"} About Us</p>
      </div>
      <div className="hero-section-left-div" style={{"z-index": "10"}}>
      
      
        <div className="">
          <div className="section1home">
            <video  ref={videoRef} style={{ width: "100%", height: "100%", filter: "brightness(0.5)" }} src="/assets\aboutUs\aboutbackvid.mp4" autoPlay loop muted />
          </div>
          <div className="abouthero">
          <h3 className="hero-section-left-content">
          Know More
          </h3>
          <h1 className="hero-left-heading">
          About Us
          </h1>
          <div className="row">
            <div className="col-lg-6">
              
          <p className="hero-left-para">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
            </div>
            <div className="col-lg-6">
              <div className='hero-right-section-wrapper'>
              <p className="hero-right-para">Featured</p>
              <p className="hero-right-para">
              How can value realized today reshape tomorrow ?
              </p>
              <p className="hero-right-date">13 Aug 2023</p>
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

export default AboutUsHero