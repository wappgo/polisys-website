import React from 'react';
import "../../styles/bg.css";
import { images } from "../../constant/index";

const IndustriesHeadComp = () => {
  return (
    <div className="d-none d-lg-block">
        <div className="industries-drop-main">
        <div className="industries-drop-main-sub">
            <div className="row">
                <div className="col-lg-3">
                    <div className="industries-drop1">
                        <h2 className="industries-margin-20">
                        Industries
                        </h2>
                        <p>
                        Explore how Polisys's insights and services are contributing to reshaping the future of your specific industry.
                        </p>
                        <button className="">Know More</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='d-flex'>
                    <div className="industries-drop2">
                        <h1>
                        We Specialize Working In
                        </h1>
                        <p className="industries-margin-20 d-flex flex-row justify-content-between">
                        Information & Technology
                        <img src={images.industries_right_arrow.default.src} />
                        </p>
                        <p className="industries-margin-20 d-flex flex-row justify-content-between">
                        Law & Legal Proceedings
                        <img src={images.industries_right_arrow.default.src} />
                        </p>
                        <p className="industries-margin-20 d-flex flex-row justify-content-between">
                        Finance & Wealth
                        <img src={images.industries_right_arrow.default.src} />
                        </p>
                        <p className="industries-margin-20 d-flex flex-row justify-content-between">
                        Media & Marketing
                        <img src={images.industries_right_arrow.default.src} />
                        </p>
                        <p className="d-flex flex-row justify-content-between">
                        Policies & Decision Making
                        <img src={images.industries_right_arrow.default.src} />
                        </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="industries-drop3">
                        <h1>
                        Our Recent Updates
                        </h1>
                        <div className="d-flex flex-row">
                        <span>01</span>
                        <p clasName="industries-margin-20">
                          Polisys engages young talent to develop AI
                         solutions to solve real-world problems 
                        </p>
                        </div>
                        <div className="d-flex flex-row">
                        <span>02</span>
                        <p clasName="industries-margin-20">
                         Polisys engages young talent to develop AI
           solutions to solve real-world problems 
                        </p>
                        </div>
                        <div className="d-flex flex-row">
                        <span>03</span>
                        <p clasName="industries-margin-20">
                        Polisys engages young talent to develop AI
           solutions to solve real-world problems 
                        </p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IndustriesHeadComp