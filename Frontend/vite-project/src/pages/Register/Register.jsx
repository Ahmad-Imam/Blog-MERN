import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username + " " + email + " " + password);
    setError(false);
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login", { replace: true });
      // res.data && window.location.replace("/login");

      console.log(res);
    } catch (err) {
      // console.log(err);
      setError(true);
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerFormUsername"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerFormEmail"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>{" "}
        <input
          type={!showPassword ? "password" : "text"}
          className="registerFormPass"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          Show Password
          <input
            id="check"
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <button className="registerButton" type="submit">
          Sign Up
        </button>
        {error && <span>Something Went wrong</span>}
      </form>
      <Link className="link" to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}
