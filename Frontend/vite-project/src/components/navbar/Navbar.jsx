import React from "react";

import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/"}>
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/"}>
              Contact
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/"}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <img
          className="navImage"
          src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        />
        <i className=" navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
