import React from "react";
import "./HeaderBottom.scss";
import { Link } from "react-router-dom";
import Ishesabi from "../../Svgs/Logo/Ishesabi";
import HamburgerMenu from "../../Svgs/Icons/HamburgerMenu";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-3 col-12 logo-parent">
                <Link className="logo">
                    <Ishesabi/>
                </Link>
                <button className="hamburger-menu-btn">
                  <HamburgerMenu/>
                </button>
            </div>
            <div className="col-lg-9 d-flex justify-content-end">
                <div className="navbar-nav">
                    <Link className="active">Nədir?</Link>
                    <Link>Özəlliklər</Link>
                    <Link>Müştərilər</Link>
                    <Link>Sektorlar</Link>
                    <Link>Paketlər</Link>
                    <Link>Bloqlar</Link>
                    <Link>Bizimlə əlaqə</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;