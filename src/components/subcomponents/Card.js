import React from "react";
import icon from "../../assets/Dishicon.svg";
export default function Card(props) {
  return (
    <div className="card--cont">
      <img className="card--img" alt="plate of food" src={props.image} />
      <div className="card--spans">
        <span className="card--dish">{props.dish}</span>
        <span className="card--price">{props.price}</span>
      </div>
      <p className="card--desc">{props.desc}</p>
      <span className="card--cta">
        Order a delivery <img className="card--orderIcon" alt="" src={icon} />
      </span>
    </div>
  );
}
