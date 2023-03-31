import React from "react";
import "./styles/Main.css";
import Hero from "./subcomponents/Hero";
import Specials from "./subcomponents/Specials.js";
import Reviews from "./subcomponents/Reviews";
import About from "./subcomponents/About";

export default function Main() {
  return (
    <main>
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </main>
  );
}
