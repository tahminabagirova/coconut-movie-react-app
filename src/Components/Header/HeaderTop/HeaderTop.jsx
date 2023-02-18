import React from "react";
import "./HeaderTop.scss";
import { Link } from "react-router-dom";
import Phone from "../../Svgs/Icons/Phone";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <Link to="/!" className="phone">
              <Phone/>
              +994509990460
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end">
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