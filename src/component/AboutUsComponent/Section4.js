import React, {useState} from 'react';
import Image from "next/image";
import Image1 from "../../../public/assets/aboutUs/about_us_img1.png";
import Image2 from "../../../public/assets/aboutUs/about_us_img2.png";
import Image3 from "../../../public/assets/aboutUs/about_us_img3.png";
import ShowMore from "../../../public/assets/insights/arrow-right-circle1.svg";
import ShowLess from "../../../public/assets/insights/arrow-right-circle2.svg";

const Section4 = () => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className="about-us-section10">
          <div>
            <h1 className="about-us-sec10-heading">Our Leadership</h1>
            <div className="insights-sec10-wrapper">
            <div className="row">
            <div className="col-lg-4">
              <div className="insights-sec10-img-wrapper">
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
            <div className="col-lg-4">
            <div className="insights-sec10-img-wrapper">
              <div className="insights-sec9-img">
                <Image src={Image2} alt="image1" />
                <div className="insights-sec10-img-head-div">
                  <h2 className="insights-sec10-img-head-div2">
                  Jhon Manhatten Brooks
                  </h2>
                  <p className="insights-sec10-img-para-div">Polisys India Technology Consulting Leader</p>
                </div>
              </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="insights-sec10-img-wrapper">
              <div className="insights-sec9-img">
                <Image src={Image3} alt="image1" />
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
            {showMore && 
            <div className="mt-3">
            <div className="row">
            <div className="col-lg-4">
              <div className="insights-sec10-img-wrapper">
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
            <div className="col-lg-4">
            <div className="insights-sec10-img-wrapper">
              <div className="insights-sec9-img">
                <Image src={Image2} alt="image1" />
                <div className="insights-sec10-img-head-div">
                  <h2 className="insights-sec10-img-head-div2">
                  Jhon Manhatten Brooks
                  </h2>
                  <p className="insights-sec10-img-para-div">Polisys India Technology Consulting Leader</p>
                </div>
              </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="insights-sec10-img-wrapper">
              <div className="insights-sec9-img">
                <Image src={Image3} alt="image1" />
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
            </div>}
            </div>
            <div className="showmore-alignment">
            <button onClick={()=> setShowMore(!showMore)} className="inshights-sec10-show-more-wrapper">
            <p className="inshights-sec10-show-more">{!showMore ? "Show More" : "Show Less"}</p>
              {!showMore ? <Image src={ShowMore}/> : <Image src={ShowLess}/>}
            </button>
            </div>
          </div>
        </div>
  )
}

export default Section4