"use client";
import React from "react";
import HeroSection from "../../component/insightsComponent/HeroSection";
import Section1 from "../../component/insightsComponent/Section1";
import Section4 from "../../component/insightsComponent/Section4";
import Section5 from "../../component/insightsComponent/Section5";
import Section6 from "../../component/insightsComponent/Section6";
import Section7 from "../../component/insightsComponent/Section7";
import Section8 from "../../component/insightsComponent/Section8";
import Section9 from "../../component/insightsComponent/Section9";
import Section10 from "../../component/insightsComponent/Section10";
import Section11 from "../../component/insightsComponent/Section11";

const Insights = () => {
  return (
    <>
      <div className="insights-main">
        <div className="insights-sub-heading">
          <p className="insights-sub-head">
            Polisys India {">"} Insights {">"} Information & Technology
          </p>
        </div>
        {/* <div className="insights-hero-section" style={{position:'relative'}}>
        <div className="row w-100">
          <div className='col-lg-12'>
          <p className="insights-hero-tag">
          Insights
          </p> 
          <h1 className="insights-hero-heading">
          Technology
          </h1>
          <p className="insights-hero-para">
          At the heart of business evolution lies technology, empowering organizations to revamp their business and operational frameworks while swiftly adapting to competitive challenges.
          </p>
          <p className="insights-hero-lets-talk">
          Let’s Talk
          </p>
          <div className="" style={{position:'absolute', right: "0", bottom: "113px"}}>
              <button className="insights-hero-btn">Contact</button>
            </div>
          </div>
        </div>
      </div> */}
        <HeroSection />
        {/* <div className='insights-section1'>
        <div className="insights-section1-wrapper">
          <h2>
          In what ways can Polisys provide assistance?
          </h2>
          <p>
          As customer expectations shift, the convergence of technology, media, and telecom becomes increasingly intricate. Media firms embrace tech innovations, tech companies craft intelligent content, and telecom enterprises expand into tech and media sectors. Polisys's worldwide network of specialized TMT experts aids businesses in achieving sustainability, risk mitigation, revenue diversification, and cost reduction.
          </p>
        </div>
      </div> */}
        <Section1 />
        <Section4 />
        {/* <div className="insights-section5">
          <div>
            <p className="insights-section5-heading">INNOVATION CORNER</p>
            <p className="insights-section5-heading2">
              Featured Video Presentations
            </p>
          </div>
          <div className="insights-sec5">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="insights-sec5-left-head">
                  Business trendspotting: 5G
                </h2>
                <p className="insights-sec5-left-para">
                  What will be the influence of groundbreaking 5G technology on
                  consumers and enterprises? How will it foster connectivity and
                  notably affect India's economic expansion? Arnab Basu, our
                  Advisory leader, delves into these prospects in the inaugural
                  episode of our fresh series, Business Trendspotting.
                </p>
                <p className="insights-sec5-left-para2">Read More</p>
              </div>
              <div className="col-lg-6">
                <div className="insight-sec5-img-wrapper">
                  <Image src={InsightsImage} />
                  <h2 className="insight-sec5-img">Lorem Ipsum Heading</h2>
                </div>
              </div>
            </div>
            <div className="insights-sec5-div2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="insight-sec5-img-wrapper">
                    <Image src={InsightsImage} />
                    <h2 className="insight-sec5-img">Lorem Ipsum Heading</h2>
                  </div>
                </div>
                <div className="col-lg-6">
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
        </div> */}
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        {/* <div className="insights-section10">
          <div>
            <h1 className="insights-sec10-heading">Meet our Technology consulting team</h1>
            <div className="insights-sec10-wrapper">
            <div className="row">
            <div className="col-lg-4">
              <div className="insights-sec9-img">
                <Image src={Image1} alt="image1" />
                <div className="insights-sec10-img-head-div">
                  <h2 className="insights-sec10-img-head-div2">
                  Jhon Manhatten Brooks
                  </h2>
                  <p className="insights-sec10-img-para-div">Polisys India Technology Consulting Leader</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="insights-sec9-img">
                <Image src={Image1} alt="image1" />
                <div className="insights-sec10-img-head-div">
                  <h2 className="insights-sec10-img-head-div2">
                  Jhon Manhatten Brooks
                  </h2>
                  <p className="insights-sec10-img-para-div">Polisys India Technology Consulting Leader</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="insights-sec9-img">
                <Image src={Image1} alt="image1" />
                <div className="insights-sec10-img-head-div">
                  <h2 className="insights-sec10-img-head-div2">
                  Jhon Manhatten Brooks
                  </h2>
                  <p className="insights-sec10-img-para-div">Polisys India Technology Consulting Leader</p>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div className="inshights-sec10-show-more-wrapper">
              <p className="inshights-sec10-show-more">Show More</p>
              <Image src={ShowMore}/>
            </div>
          </div>
        </div> */}
        <Section10 />
        <Section11 />
      </div>
    </>
  );
};

export default Insights;
