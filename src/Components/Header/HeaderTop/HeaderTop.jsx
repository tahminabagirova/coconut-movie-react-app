import React from "react";
import "./HeaderTop.scss";
import { Link } from "react-router-dom";
import Phone from "../../Svgs/Icons/Phone";
import Envelope from "../../Svgs/Icons/Envelope";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 d-flex align-items-center left-side">
            <Link to="/!" className="header-mini-link">
              <Phone/>
              +994999999999
            </Link>

            <Link to="/!" className="header-mini-link">
              <Envelope/>
              info@coconutmovie.com
            </Link>
          </div>
          <div className="col-lg-6 col-12 right-side">
            <div className="lang-switcher">
              <Link className="active">AZ</Link>
              <Link>EN</Link>
              <Link>RU</Link>
            </div>
            <Link to="/!" className="btn btn-ish">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;