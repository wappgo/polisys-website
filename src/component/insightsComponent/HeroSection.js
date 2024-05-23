import React from 'react';
import Image from "next/image";
import ArrowImage from "../../../public/assets/insights/arrow-right-circle.svg";
import { useRouter } from 'next/navigation';
const HeroSection = () => {
  
  const router = useRouter();
  
  return (
    <div>
        <div className="insights-hero-section" style={{position:'relative'}}>
        <div className="row w-100">
          <div className='col-lg-12'>
          <p className="insights-hero-tag">
          Insights
          </p> 
          <h1 className="insights-hero-heading">
          Technology
          </h1>
          <div className="col-lg-6">
          <p className="insights-hero-para">
          At the heart of business evolution lies technology, empowering organizations to revamp their business and operational frameworks while swiftly adapting to competitive challenges.
          </p>
          </div>
          <div className="insights-hero-lets-talk-wrapper">
          <p onClickCapture={()=>router.push("/contact-us")} className="insights-hero-lets-talk">
          Let’s Talk
          </p>
          <Image onClickCapture={()=>router.push("/contact-us")} src={ArrowImage}/>
          </div>
          <div className="hero-contact-btn">
              <button onClickCapture={()=>router.push("/contact-us")} className="insights-hero-btn">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection