import React from "react";
import Accordion from "./Accordion";
import BannerPlaceholder from "../BannerPlaceholder";
import BuildingFuture from "../BuildingFuture";
import OurExperience from "../OurExperience";
import GetInTouch from "../GetInTouch";
const Image1 = `${process.env.PUBLIC_URL}assets/Img/Que.png`;

const index = () => {
  return (
    <div>
      <div className="serviceloc">
        <div className="insights-sub-heading">
          <p className="insights-sub-head">
            Polisys India {">"} Insights {">"} Information & Technology
          </p>
        </div>
      </div>

      <div className="electiodiv">
          <p className="elecanalyze">
            Election Analytics <span className="horez">|</span> Fundraising
            Support <span className="horez">|</span>{" "}
            <span className="lightertext"> Strategic Campaign Planning </span>{" "}
            <span className="horez">|</span> Legislative Support{" "}
            <span className="horez">|</span> Policy Impact Analysis
          </p>
        </div>

      <div className="mainServicediv">
        

        <div className="row secmarbt">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div>
              <div>
                <span className="servtag">Services</span>
                <h1 className="servstrategic">Strategic Campaign Planning</h1>
                <p className="servpara">
                  At the heart of business evolution lies technology, empowering
                  organizations to revamp their business and operational
                  frameworks while swiftly adapting to competitive challenges.
                </p>
              </div>

              <div className="reltopdiv">
                <h6 className="Relattophead">Related Topics</h6>
                <div className="d-flex flex-wrap">
                  <button className="topbn">Election Analytics</button>
                  <button className="topbn">Fundraising Support</button>
                  <button className="topbn">Legislative Support</button>
                  <button className="topbn">Policy Impact Analysis</button>
                  <button className="topbn">
                    Voter Outreach and Mobilization
                  </button>
                  <button className="topbn">Policy Formulation</button>
                  <button className="topbn">Stakeholder Engagement</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 align-self-center servads">
              
                <img alt="servads" src="./assets/img/servadd.svg" />
              
          </div>
        </div>

        <div>
          <h1 className="polstra">
            In what ways can Polisys <span>“Strategic Campaign Planning”</span> provide
            assistance?
          </h1>
          <p className="polistratpara">
            As customer expectations shift, the convergence of technology,
            media, and telecom becomes increasingly intricate. Media firms
            embrace tech innovations, tech companies craft intelligent content,
            and telecom enterprises expand into tech and media sectors.
            Polisys's worldwide network of specialized TMT experts aids
            businesses in achieving sustainability, risk mitigation, revenue
            diversification, and cost reduction.
          </p>
          <p className="polistratpara1">
            In the fast-paced world of modern marketing, having a
            well-structured plan is crucial for achieving success. This is where
            Polisys' "Strategic Campaign Planning" comes into play. Designed to
            provide comprehensive assistance, Polisys' approach can transform
            your marketing efforts into a streamlined, effective campaign that
            drives results. Let's explore the various ways Polisys' Strategic
            Campaign Planning can support your business.
          </p>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              <ul className="polili">
                <li>How well do you understand your market and competitors?</li>
                <li>
                  Are your campaign objectives clearly defined and aligned with
                  your business goals?
                </li>
                <li>
                  Do you know who your target audience is and what they respond
                  to best?
                </li>
                <li>
                  How creative and engaging is your current campaign strategy?
                </li>
                <li>
                  Is your campaign integrated across all relevant digital
                  platforms?
                </li>
                <li>
                  Are you making the most efficient use of your marketing budget
                  and resources?
                </li>
                <li>
                  How effectively are you tracking the performance of your
                  campaign?
                </li>
                <li>
                  Do you have the ability to make real-time adjustments to your
                  strategy?
                </li>
                <li>
                  Are you continuously optimizing your campaigns based on
                  performance data?
                </li>
                <li>
                  Would expert consultation and support improve your campaign
                  planning and execution?
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <img className="queimg" src={Image1} alt="" />
            </div>
          </div>
        </div>

        <div>
          <Accordion />
        </div>

        <div>
          <BannerPlaceholder />
        </div>

        <div>
          <p className="servpopa">
            Polisys' "Strategic Campaign Planning" offers a comprehensive suite
            of services that can transform your marketing efforts. From in-depth
            market analysis to continuous optimization, Polisys provides the
            expertise and tools you need to create successful campaigns that
            drive results. Embrace the power of strategic planning and watch
            your business thrive with Polisys by your side.Polisys' "Strategic
            Campaign Planning" offers a comprehensive suite of services that can
            transform your marketing efforts. From in-depth market analysis to
            continuous optimization, Polisys provides the expertise and tools
            you need to create successful campaigns that drive results. Embrace
            the power of strategic planning and watch your business thrive with
            Polisys by your side.
          </p>
        </div>
      </div>
      <div className="section4">
        <h3>
          Organizations must adapt strategies and build capabilities to address
          current challenges and seize future opportunities in today's
          converging business landscape.
        </h3>
      </div>
      <div>
        <BuildingFuture />
      </div>
      <div>
        <OurExperience />
      </div>

      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default index;
