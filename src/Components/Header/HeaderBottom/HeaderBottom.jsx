import React, { useState } from "react";
import "./HeaderBottom.scss";
import coconut from "../../../Assets/Img/Logo/coconut.webp";
import HamburgerMenu from "../../Svgs/Icons/HamburgerMenu";
import { Link } from "react-scroll";


const HeaderBottom = () => {
  const [NavbarNav, setNavbarNav] = useState(false);

  const fixed = () => {
    if (window.scrollY > 50) {
      setNavbarNav(true);
    } else {
      setNavbarNav(false);
    }
  };

  window.addEventListener("scroll", fixed);
  return (
    <div className={`header-bottom ${NavbarNav ? "fixed" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-3 col-12 logo-parent">
                <Link className="logo" to="">
                  <img src={coconut} alt="" />
                </Link>
                <button className="hamburger-menu-btn">
                  <HamburgerMenu/>
                </button>
            </div>
            <div className="col-lg-9 d-flex justify-content-end">
              <div className="navbar-nav">
                <Link activeClass="active" to="whatIsIt">Home</Link>
                <Link to="features">Watchlist</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;