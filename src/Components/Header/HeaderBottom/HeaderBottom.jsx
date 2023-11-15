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
                <Link activeClass="active" to="whatIsIt" smooth={true} spy={true}>Nədir?</Link>
                <Link activeClass="active" to="features" smooth={true} spy={true}>Özəlliklər</Link>
                <Link activeClass="active" to="partners" smooth={true} spy={true}>Müştərilər</Link>
                <Link activeClass="active" to="sectors" smooth={true} spy={true}>Sektorlar</Link>
                <Link activeClass="active" to="" smooth={true} spy={true}>Paketlər</Link>
                <Link activeClass="active" to="" smooth={true} spy={true}>Bloqlar</Link>
                <Link activeClass="active" to="" smooth={true} spy={true}>Bizimlə əlaqə</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;