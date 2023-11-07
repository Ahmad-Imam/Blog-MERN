import React, { useContext, useRef, useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../../context/Context";
import { LoginFailed, LoginStart, LoginSuccess } from "../../context/Actions";
import axios from "axios";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(LoginContext);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginStart());
    try {
      const res = await axios.post("/api/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(LoginSuccess(res.data));
      console.log(isFetching);
    } catch (err) {
      console.log(err);
      dispatch(LoginFailed());
    }
  }
  // console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="loginFormEmail"
          placeholder="Enter your email"
          ref={emailRef}
        />
        <label htmlFor="">Password</label>{" "}
        <input
          type={!showPassword ? "password" : "text"}
          className="loginFormPass"
          placeholder="Enter your password"
          ref={passwordRef}
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
        <button className="loginButton" type="submit" disabled={isFetching}>
          Sign In
        </button>
      </form>
      <Link className="link" to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
