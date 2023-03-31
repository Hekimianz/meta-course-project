import React from "react";
import Card from "./Card";
import greekSalad from "../../assets/greekSalad.jpg";
import brochetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon.jpg";
export default function Specials() {
  return (
    <section id="spec--cont">
      <div id="spec--head">
        <h2>This week's specials!</h2>
        <button id="spec--btn">Online Menu</button>
      </div>
      <div id="spec--cards">
        <Card
          image={greekSalad}
          dish="Greek Salad"
          price="$12.99"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis malesuada risus. Donec commodo, urna vel auctor consectetur."
        />
        <Card
          image={brochetta}
          dish="Brochetta"
          price="$5.88"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis malesuada risus. Donec commodo, urna vel auctor consectetur."
        />
        <Card
          image={lemonDessert}
          dish="Lemon Dessert"
          price="$8.00"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis malesuada risus. Donec commodo, urna vel auctor consectetur."
        />
      </div>
    </section>
  );
}
