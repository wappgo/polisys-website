import React from 'react';
import { images } from "../../constant/index";
import Link from "next/link";
import Button from "./Button"


const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg header-display">
          <a className="navbar-brand" href="#">
            <img src={images.header_icon.default.src}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto list-display">
              <li className="nav-item active">
                {/* <a className="nav-link list-styling" href="#">
                  Home <span className="sr-only">(current)</span>
                </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link list-styling" href="#">
                Insights
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-styling" href="#">
                Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-styling" href="#">
                Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-styling" href="#">
                Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-styling" href="#">
                About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link list-styling" href="#">
                Contact Us
                </Link>
              </li>
              <li className="nav-item list-styling">
              <img src={images.profile_icon.default.src}/><p>My Polisys</p>
              </li>
              <li className="nav-item">
              <Button />
              </li>
            </ul>
            {/* <span className="navbar-text">Navbar text with an inline element</span> */}
          </div>
        </nav>
    </>
  )
}

export default Header