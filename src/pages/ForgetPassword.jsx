import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import "./styles/ForgetPassword.css";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    const templateParams = {
      email: data.email,
      message: "Click the link below to reset your password.",
    };

    emailjs
      .send(
        "service_8xwklam", // EmailJS Service ID
        "template_n9ezifn", //  EmailJS Template ID
        templateParams,
        "6RUXOyGH9Oe4r9V0D" // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="forgetpwdpage">
      <div className="forget-password-container">
        <h2>Forgot Password?</h2>
        <p>Enter your email below. We will send you a link to reset your password.</p>

        {submitted ? (
          <p className="success-message">Check your email for the password reset link.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" {...register("email")} placeholder="Enter your email here..." />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <button type="submit" className="submit-btn">Send Reset Link</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
