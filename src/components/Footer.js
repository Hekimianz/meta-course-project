import React from "react";
import "./styles/Footer.css";
import logo from "../assets/logo2.png";
export default function Footer() {
  return (
    <footer>
      <img src={logo} id="foot--img" alt="" />
      <section id="foot--navCont">
        <nav>
          <ul>
            <h2 className="foot--title">Navigation</h2>
            <li>
              <a className="footer--link">Home</a>
            </li>
            <li>
              <a className="footer--link">About</a>
            </li>
            <li>
              <a className="footer--link">Menu</a>
            </li>
            <li>
              <a className="footer--link">Reservations</a>
            </li>
            <li>
              <a className="footer--link">Order Online</a>
            </li>
            <li>
              <a className="footer--link">Login</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <h2 className="foot--title">Contact</h2>
            <li>
              <a className="footer--link">Address</a>
            </li>
            <li>
              <a className="footer--link">Phone Number</a>
            </li>
            <li>
              <a className="footer--link">Email</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <h2 className="foot--title">Social Media</h2>
            <li>
              <a className="footer--link">Address</a>
            </li>
            <li>
              <a className="footer--link">Phone Number</a>
            </li>
            <li>
              <a className="footer--link">Email</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
