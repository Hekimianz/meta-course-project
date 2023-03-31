import React from "react";
export default function Review(props) {
  return (
    <div className="review--card">
      <h2 className="review--name">{props.name}</h2>
      <div>
        <img className="review--img" src={props.picture} alt="person" />
        <span className="review--text">{props.review}</span>
      </div>
    </div>
  );
}
