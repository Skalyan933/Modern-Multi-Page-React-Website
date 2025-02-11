import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import './/styles/Register.css'

const schema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    alert("Registration Successful!");
  };

  return (
    <div className="register-page"> 
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

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

        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" className="register-btn">Register</button>

        <div className="register-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
