"use client";
import React, { useState } from "react";
import { images } from "../../constant/index";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Button from "./Button";
import InsightsHeadComp from "./InsightsHeadComp.js";
import ServicesHeadComp from "./ServicesHeadComp.js";
import IndustriesHeadComp from "./IndustriesHeadComp.js";
import { usePathname,useRouter } from 'next/navigation';

const Header = () => {
  const [insightsDisplay, setInsightsDisplay] = useState(false);
  const [servicesDisplay, setServicesDisplay] = useState(false);
  const [industriesDisplay, setIndustriesDisplay] = useState(false);

  const pathName = usePathname();
  const router = useRouter();

  const handleInsightsClick = () => {
    setInsightsDisplay(!insightsDisplay);
    setServicesDisplay(false);
    setIndustriesDisplay(false);
  };

  const handleServicesClick = () => {
    setServicesDisplay(!servicesDisplay);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  };

  const handleIndustriesClick = () => {
    setIndustriesDisplay(!industriesDisplay);
    setServicesDisplay(false);
    setInsightsDisplay(false);
  };

  const headerClickHandler = () => {
    setInsightsDisplay(false);
    setServicesDisplay(false);
    setIndustriesDisplay(false);
  };
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="header-display-style">
        <nav class="navbar navbar-expand-lg header-display navbar-dark bg-dark">
          <Link class="header-logo" href="/">
            <img src={images.header_icon.default.src} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="header-desktop-display">
            <div className="header-list-wrap mt-2">
              <ul className="navbar-nav mr-auto list-display">
                <li onClick={handleInsightsClick}>
                  <Link className={pathName == "/insights" ? "list-styling-active" : "list-styling"} href="/insights"> 
                    Insights
                  </Link>
                </li>
                <li onClick={handleServicesClick}>
                  <Link className={pathName == "/services" ? "list-styling-active" : "list-styling"} href="#">
                    Services
                  </Link>
                </li>
                <li onClick={handleIndustriesClick}>
                  <Link className={pathName == "/industries" ? "list-styling-active" : "list-styling"} href="#">
                    Industries
                  </Link>
                </li>
                <li onClick={headerClickHandler}>
                  <Link className={pathName == "/careers" ? "list-styling-active" : "list-styling"} href="#">
                    Careers
                  </Link>
                </li>
                <li onClick={headerClickHandler}>
                  <Link className={pathName == "/about-us" ? "list-styling-active" : "list-styling"} href="/about-us">
                    About Us
                  </Link>
                </li>
                <li onClick={headerClickHandler}>
                  <Link className={pathName == "/contact-us" ? "list-styling-active" : "list-styling"} href="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            </div>
            <div className="header-mobile-display">
            </div>
            <div className="list-styling headerleftcon">
              <div class="headerleftcon2">
                <img
                  width="24px"
                  height="24px"
                  src={images.profile_icon.default.src}
                />
                <p class="mypolicytitle" onClick={headerClickHandler}>
                  My Polisys
                </p>
              </div>
              <div className="">
                <p onClickCapture={()=>router.push("/contact-us")} class="btn" onClick={headerClickHandler}>
                  Get In Touch
                </p>
              </div>
            </div>
          </div>
        </nav> 
        <div className="header-sub-sticky">
          <div className="insight-transform">
            <div
              style={{
                transform: `${
                  insightsDisplay ? "translateY(0px)" : "translateY(-742px)"
                }`,
                transition: "transform 0.5s ease",
              }}
            >
              <InsightsHeadComp />
            </div>
          </div>
          <div className="services-transform">
            <div
              style={{
                transform: `${
                  servicesDisplay ? "translateY(-310px)" : "translateY(-920px)"
                }`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <ServicesHeadComp />
            </div>
          </div>
          <div className="indusries-transform">
            <div
              style={{
                transform: `${
                  industriesDisplay
                    ? "translateY(-620px)"
                    : "translateY(-1240px)"
                }`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <IndustriesHeadComp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
