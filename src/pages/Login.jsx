import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../pages/styles/Login.css";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Redirect if user is already logged in
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/products", { replace: true });
    }
  }, [navigate]);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login Successful!");

    // Simulate API authentication
    localStorage.setItem("authToken", "dummy_token"); // Replace with real token
    setIsLoggedIn(true);

    // Redirect immediately to products page
    navigate("/products", { replace: true });
  };

  return (
    <div className="Loginpage">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input type="password" {...register("password")} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="login-links">
            <Link to="/forgotpassword">Forgot Password?</Link>
            <Link to="/register">Don't have an account? Create one</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
