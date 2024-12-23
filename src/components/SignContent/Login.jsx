import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Header from "../Header/index";

const Login = () => {
  const [err, setErr] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <Header />
        <img
          className="sign-logo"
          src="/images/LOGO.png"
          style={{ width: "60px", display: "flex" }}
          alt="Logo"
        />
        <span className="register-title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
            />
            <i
              className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"} password-toggle`}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button className="register-btn">Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
