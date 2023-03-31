import React from "react";
import image from "../../assets/restauranfood.jpg";
export default function Hero() {
  return (
    <section id="hero--cont">
      <div className="hero--text">
        <h1 id="hero--title">Little Lemon</h1>
        <h2 id="hero--subtitle">Chicago</h2>
        <p id="hero--p">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button type="button" id="hero--btn">
          Reserve a table
        </button>
      </div>
      <img className="hero--img" src={image} alt="food on plate" />
    </section>
  );
}
