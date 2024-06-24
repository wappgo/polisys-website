import React from 'react';
// import { useRouter } from 'next/navigation';
import { useNavigate } from 'react-router-dom';

const Section6 = () => {

  const router = useNavigate();

  return (
    <div className="section6">
        <h1>
          What methods can you employ to swiftly transform and create enduring
          value?
        </h1>
        <div className="row">
          <div className="col-md-8">
            <p className="section6-para">
              Lorem ipsum dolor sit amet consectetur. Tellus orci cum turpis
              augue elementum. Imperdiet sodales semper ut mattis dolor
              convallis. Lorem consectetur montes lectus amet.
            </p>
          </div>
          <div className="col-md-4">
            <div className='insights-sec6-more-button'>
            <button onClickCapture={()=>router("/services")} className="knowmoreservice">
              Know more about Services
            </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Section6;