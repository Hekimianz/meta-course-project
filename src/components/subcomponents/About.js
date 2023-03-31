import React from "react";
import image1 from "../../assets/restaurant.jpg";
import image2 from "../../assets/mario2.jpg";
export default function About() {
  return (
    <section id="about--cont">
      <div className="about--info">
        <h2 className="about--title">About us</h2>
        <p className="about--text">
          Little Lemon is a Mediterranean restaurant created by Mario and
          Adrian, two friends with a passion for cooking and a love for fresh,
          vibrant flavors. Inspired by the bright, sunny flavors of the
          Mediterranean, they set out to create a menu that celebrates the rich
          culinary traditions of the region. From fresh salads and savory dips
          to hearty main courses and delicious desserts, every dish at Little
          Lemon is made with care using only the freshest ingredients. With a
          cozy atmosphere and friendly service, Little Lemon is the perfect
          place to enjoy a meal with friends and family. Come join us and
          experience the taste of the Mediterranean!
        </p>
      </div>
      <div className="about--imgs">
        <img className="img2" src={image2} alt="" />
      </div>
    </section>
  );
}
