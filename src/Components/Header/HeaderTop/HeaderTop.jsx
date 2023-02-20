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
          <div className="col-6 d-flex align-items-center">
            <Link to="/!" className="header-mini-link">
              <Phone/>
              +994509990460
            </Link>

            <Link to="/!" className="header-mini-link">
              <Envelope/>
              info@ishesabi.com
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <div className="lang-switcher">
              <Link className="active">AZ</Link>
              <Link>EN</Link>
              <Link>RU</Link>
            </div>
            <Link to="/!" className="btn btn-ish">
              Təklif al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;