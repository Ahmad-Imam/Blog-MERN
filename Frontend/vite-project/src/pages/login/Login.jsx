import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="loginFormEmail"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>{" "}
        <input
          type="password"
          className="loginFormPass"
          placeholder="Enter your password"
        />
        <button className="loginButton">Sign In</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
