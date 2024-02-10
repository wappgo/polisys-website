import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
        <div className='row'>
            <div className='col-3 col-md-3 footerlogo'>
                <img src="/assets/Img/Group 8.svg" />

                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
            </div>
            <div className='col-1 col-md-1 footerlogo'></div>
            <div className='col-3 col-md-3 reachat'>
                <div>
                    <h3>Reach Us At</h3>

                    <div className="d-flex">
                        <img src="/assets/Img/19.svg" /> 
                        <h6>Sukabumi Utara, Indore- India</h6>
                    </div>

                    <div className="d-flex">
                        <img src="/assets/Img/19.svg" /> 
                        <h6>Sukabumi Utara, Indore- India</h6>
                    </div>

                    <div className="d-flex">
                        <img src="/assets/Img/19.svg" /> 
                        <h6>Sukabumi Utara, Indore- India</h6>
                    </div>
                </div>
            </div>
            <div className='col-2 col-md-2 importlink'>
            <div>
                    <h3>Important Links</h3>

                    <div className="d-flex">
                        <h6>Connect with us</h6>
                    </div>

                    <div className="d-flex">
                        <h6>Our Locations</h6>
                    </div>

                    <div className="d-flex">
                        <h6>Sitemap</h6>
                    </div>

                    <div className="d-flex">
                        <h6>Privacy Policy</h6>
                    </div>
                </div>
            </div>
            <div className='col-3 col-md-3 importlink'>
            <div>
                    <h3>Join our Newsletter</h3>

                    <div className="d-flex">
                        <h6>Enter your email address to join newsletter</h6>
                        
                    </div>
                    <div className="d-flex ">
                        <input className="emailAddinput" placeholder="Email Address" />
                        <div className="subEmail">
                                <img src="/assets/Img/20.svg" className="footersubarr" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer