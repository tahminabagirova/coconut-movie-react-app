import React from "react";
import "./HeaderBottom.scss";
import { Link } from "react-router-dom";
import Ishesabi from "../../Svgs/Logo/Ishesabi";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-3">
                <Link className="logo">
                    <Ishesabi/>
                </Link>
            </div>
            <div className="col-md-9 d-flex justify-content-end">
                <div className="navbar-nav">
                    <Link>Nədir?</Link>
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