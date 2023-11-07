import React from "react";
import { useContext } from "react";

import "./navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/Context";
import { Logout } from "../../context/Actions";

export default function Navbar() {
  const { user, dispatch } = useContext(LoginContext);
  const PF = "http://localhost:3000/images/";

  function handleLogOut() {
    dispatch(Logout());
  }

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
          {user && (
            <li className="navListItem" onClick={handleLogOut}>
              Logout
            </li>
          )}
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to={"/settings"}>
            <img className="navImage" src={PF + user.profilePic} />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className=" navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
