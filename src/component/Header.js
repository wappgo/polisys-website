"use client";
import React, { useState } from "react";
import { images } from "./constant/index.js";
// import Link from "next/link";
// import Head from "next/head";
// import Script from "next/script";
// import { Link } from "react-router-dom";
import Button from "./Button";
import InsightsHeadComp from "./InsightsHeadComp.js";
import ServicesHeadComp from "./ServicesHeadComp.js";
import IndustriesHeadComp from "./IndustriesHeadComp.js";
// import { usePathname,useRouter } from 'next/navigation';
import { Redirect, Link, useLocation, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [insightsDisplay, setInsightsDisplay] = useState(false);
  const [servicesDisplay, setServicesDisplay] = useState(false);
  const [industriesDisplay, setIndustriesDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(false);

  // const pathName = usePathname();
  const router = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const handleInsightsClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setInsightsDisplay(!insightsDisplay);
    setServicesDisplay(false);
    setIndustriesDisplay(false);
  };
  const handleInsightsClick1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setInsightsDisplay(true);
    setServicesDisplay(false);
    setIndustriesDisplay(false);
  };
  const handleInsightsClick2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setInsightsDisplay(false);
    setServicesDisplay(false);
    setIndustriesDisplay(false);
  };


  const handleServicesClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setServicesDisplay(!servicesDisplay);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  };

  const handleServicesClick1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setServicesDisplay(true);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  };

  const handleServicesClick2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setServicesDisplay(false);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  };


  const handleIndustriesClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIndustriesDisplay(!industriesDisplay);
    setServicesDisplay(false);
    setInsightsDisplay(false);
  };

  const handleIndustriesClick1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIndustriesDisplay(true);
    setServicesDisplay(false);
    setInsightsDisplay(false);
  };

  const handleIndustriesClick2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIndustriesDisplay(false);
    setServicesDisplay(false);
    setInsightsDisplay(false);
  };

  const headerClickHandler = () => {
    setInsightsDisplay(false);
    setServicesDisplay(false);
    setIndustriesDisplay(false);
    // router("/contact-us")
  };

  const handleAboutClick1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setAboutDisplay(true)
    setServicesDisplay(false);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  }

  const handleAboutClick2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setAboutDisplay(false)
    setServicesDisplay(false);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  }
  

  const handleContactClick1 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setContactDisplay(true)
    setAboutDisplay(false)
    setServicesDisplay(false);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  } 

  const handleContactClick2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setContactDisplay(false)
    setAboutDisplay(false)
    setServicesDisplay(false);
    setInsightsDisplay(false);
    setIndustriesDisplay(false);
  } 

  return (
    <>
      {/* <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </head> */}

      <div className="header-display-style">
        <nav class="navbar navbar-expand-lg header-display navbar-dark bg-dark">
          <Link className="header-logo" to="/" onClick={() => {
            setInsightsDisplay(false);
            setServicesDisplay(false);
            setIndustriesDisplay(false);
          }}>
            <img src="./assets/Img/headericon.svg" alt="Header Icon" />
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
          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <div className="header-desktop-display">
              <div className="header-list-wrap mt-2">
                <ul className="navbar-nav mr-auto list-display">
                  <li onClick={handleInsightsClick} 
                  onMouseEnter={handleInsightsClick1}
                  onMouseLeave={handleInsightsClick2}
                 >
                    <Link
                      className={
                        splitLocation[1] === "darkeye" || insightsDisplay
                          ? "list-styling-active"
                          : "list-styling"
                      }
                      to="/darkeye"
                    >
                      Dark-Eye
                    </Link>
                  </li>
                  <li onClick={handleServicesClick}
                  onMouseEnter={handleServicesClick1}
                  onMouseLeave={handleServicesClick2}>
                    <Link className={splitLocation[1] === "services" || servicesDisplay ? "list-styling-active" : "list-styling"} to="services">
                      Services
                    </Link>
                  </li>
                  <li onClick={handleIndustriesClick}
                  onMouseEnter={handleIndustriesClick1}
                  onMouseLeave={handleIndustriesClick2}>
                    <Link className={splitLocation[1] === "strengths" || industriesDisplay ? "list-styling-active" : "list-styling"} to="#">
                      Strengths
                    </Link>
                  </li>
                   {/* <li onClick={headerClickHandler}>
                    <Link className={splitLocation[1] === "careers" ? "list-styling-active" : "list-styling"} to="#">
                      Careers
                    </Link>
                  </li> */}
                  <li onClick={headerClickHandler}
                  onMouseEnter={handleAboutClick1}
                  onMouseLeave={handleAboutClick2}
                  >
                    <Link className={splitLocation[1] === "about-us" || aboutDisplay ? "list-styling-active" : "list-styling"} to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li onClick={headerClickHandler}
                  onMouseEnter={handleContactClick1}
                  onMouseLeave={handleContactClick2}
                  >
                    <Link className={splitLocation[1] === "contact-us" || contactDisplay ? "list-styling-active" : "list-styling"} to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-mobile-display">
            </div>
            <div className="list-styling headerleftcon m-0" >
              <div class="headerleftcon2" style={{"visibility": "hidden"}}>
                <img
                  width="24px"
                  height="24px"
                  // src={images.profile_icon.default}
                  src="./assets\Img\profile_icon.svg"
                />
                <p class="mypolicytitle" onClick={headerClickHandler}>
                  My Polisys
                </p>
              </div>
              <div className="">
                <p onClickCapture={() => router("/contact-us")} class="btn1 " onClick={headerClickHandler}>
                  Get In Touch
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="header-sub-sticky">
          <div className="insight-transform" >

            <div
              onMouseEnter={handleInsightsClick1}
              onMouseLeave={handleInsightsClick2}
              style={{
                transform: `${insightsDisplay ? "translateY(0px)" : "translateY(-742px)"
                  }`,
                transition: "transform 0.8s ease",
              }}
            >
              <InsightsHeadComp />
            </div>
          </div>
          <div className="services-transform">
            <div
              // onMouseOut={handleMouseservicesDisplay}
              onMouseEnter={handleServicesClick1}
                  onMouseLeave={handleServicesClick2}
              style={{
                transform: `${servicesDisplay ? "translateY(-325px)" : "translateY(-920px)"
                  }`,
                transition: "transform 0.8s ease-in-out",
              }}
            >
              <ServicesHeadComp />
            </div>
          </div>
          <div className="indusries-transform">
            <div
              // onMouseOut={handleMouseindustriesDisplay}
              onMouseEnter={handleIndustriesClick1}
              onMouseLeave={handleIndustriesClick2}
              style={{
                transform: `${industriesDisplay
                  ? "translateY(-652px)"
                  : "translateY(-1240px)"
                  }`,
                transition: "transform 0.8s ease-in-out",
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
