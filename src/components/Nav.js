import React from "react";
import logo from "../assets/Logo.svg";

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" id="nav--logo" />
      <ul id="nav--nav">
        <li className="nav--link">
          <a>Home</a>
        </li>
        <li className="nav--link">
          <a>About</a>
        </li>
        <li className="nav--link">
          <a>Menu</a>
        </li>
        <li className="nav--link">
          <a>Reservations</a>
        </li>
        <li className="nav--link">
          <a>Order Online</a>
        </li>
        <li className="nav--link">
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
}
