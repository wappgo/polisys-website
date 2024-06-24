import React from 'react';
// import Image from "next/image";
import { Image } from 'react-bootstrap';
// import InsightsImage from "../../../public/assets/insights/insights_img.png";
const InsightsImage = `${process.env.PUBLIC_URL}assets/insights/insights_img.png`
const Section5 = () => {
  return (
    <div>
      <div className="insights-section5">
          <div>
            <p className="insights-section5-heading">INNOVATION CORNER</p>
            <p className="insights-section5-heading2">
              Featured Video Presentations
            </p>
          </div>
          <div className="insights-sec5">
            <div className="row">
              <div className="col-lg-6 ">
                <h2 className="insights-sec5-left-head">
                  Business trendspotting: 5G
                </h2>
                <p className="insights-sec5-left-para col-lg-12">
                  What will be the influence of groundbreaking 5G technology on
                  consumers and enterprises? How will it foster connectivity and
                  notably affect India's economic expansion? Arnab Basu, our
                  Advisory leader, delves into these prospe..0cts in the inaugural
                  episode of our fresh series, Business Trendspotting.
                </p>
                <p className="insights-sec5-left-para2">Read More</p>
              </div>
              <div className="col-lg-6 ">
                <div className="insight-sec5-img-wrapper">
                  <img src={InsightsImage} style={{width:"100%"}} />
                  <h2 className="insight-sec5-img">Lorem Ipsum Heading</h2>
                </div>
              </div>
            </div>
            <div className="insights-sec5-div2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="insight-sec5-img-wrapper">
                    <img src={InsightsImage} style={{width:"100%"}} />
                    <h2 className="insight-sec5-img">Lorem Ipsum Heading</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className='insights-sec5-head-wrapper'>
                  <h2 className="insights-sec5-left-head">
                    Business trendspotting: 5G
                  </h2>
                  <p className="insights-sec5-left-para">
                    What will be the influence of groundbreaking 5G technology
                    on consumers and enterprises? How will it foster
                    connectivity and notably affect India's economic expansion?
                    Arnab Basu, our Advisory leader, delves into these prospects
                    in the inaugural episode of our fresh series, Business
                    Trendspotting.
                  </p>
                  <p className="insights-sec5-left-para2">Read More</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Section5