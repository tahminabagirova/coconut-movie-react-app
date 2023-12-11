import React from "react";
import "./Header.scss";
import HeaderTop from "../header/HeaderTop/HeaderTop";
import HeaderBottom from "../header/HeaderBottom/HeaderBottom";


const Header = () => {
  return (
    <div className="header">
        <HeaderTop/>
        <HeaderBottom/>
    </div>
  );
};

export default Header; 