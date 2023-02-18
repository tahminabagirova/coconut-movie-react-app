import React from "react";
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