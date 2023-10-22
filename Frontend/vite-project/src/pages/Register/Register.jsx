import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerFormUsername"
          placeholder="Enter your username"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerFormEmail"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>{" "}
        <input
          type="password"
          className="registerFormPass"
          placeholder="Enter your password"
        />
        <button className="registerButton">Sign Up</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
