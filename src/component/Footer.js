"use client";
// import Image from "next/image";
import { Image } from "react-bootstrap";
// import "../../styles/bg.css";
// import { useRouter } from "next/navigation";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const router = useLocation();

  return (
    <>
    <div className="footer">
    <hr className="faded_divider_hr" />
      <div className="row">
        <div className="col-lg-4 col-md-3 footerlogo">
          <img src="/assets/Img/Group 8.svg" />

          <p>
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
        </div>

        <div className="col-lg-2 col-md-3 reachat">
          <div>
            <h3>Reach Us At</h3>

            <div className="d-flex">
              <img src="/assets/Img/19.svg" />
              <h6 className="footer-links-style">
                Sukabumi Utara, Indore- India
              </h6>
            </div>

            <div className="d-flex">
              <img src="/assets/home/mail_icon.svg" />
              <a className="anchor-styling" href={`mailto:"info@polisys.com"`}>
                <h6 className="footer-links-style">info@polisys.com</h6>
              </a>
            </div>

            <div className="d-flex">
              <img src="/assets/home/telephone_icon.svg" />
              <a className="anchor-styling" href="tel:+123456789">
                <h6 className="footer-links-style">022 4567 8976</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 importlink">
          <div>
            <h3>Important Links</h3>

            <div className="d-flex">
              <h6
                className="footer-links-style"
                onClickCapture={() => router.push("/contact-us")}
              >
                Connect with us
              </h6>
            </div>

            <div className="d-flex">
              <h6 className="footer-links-style">Our Locations</h6>
            </div>

            <div className="d-flex">
              <h6 className="footer-links-style">Sitemap</h6>
            </div>

            <div className="d-flex">
              <h6 className="footer-links-style">Privacy Policy</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 importlink">
          <div className="footer-bg">
            <div className="footer_img">
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
    </div>
      <div className="footer-bottom-content">
        <p className="footer-bottom-content-para">
        Copyright @polisys  2023 All Right Reserved
        </p>
        {/* <img className="footer-bgg" src="/assets/home/footer_clip.png" /> */}
      </div>
      </>
  );
};

export default Footer;
