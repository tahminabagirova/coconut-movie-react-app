import React  from "react";
import "./FeaturesCard.scss";
import Features from "../Svgs/Icons/Features";

const FeaturesCard = () => {
    
    return(
        <div className="card features-card">
            <div className="icon"><Features/></div>
            <h4>Card title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta corrupti aliquam reiciendis</p>
        </div>
    );

};

export default FeaturesCard;