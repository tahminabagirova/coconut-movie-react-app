import React from "react";
import "./Header.scss";
import HeaderTop from "../Header/HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";


const Header = () => {
  return (
    <div className="header">
        <HeaderTop/>
        <HeaderBottom/>
    </div>
  );
};

export default Header;