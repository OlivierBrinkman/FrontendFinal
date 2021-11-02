import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "../components/Loader";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const { handleSubmit, register } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("crypto") !== null) {
      history.push("/profile");
    }
  });

  async function onSubmit(data) {
    if (data.username === "" || data.email === "" || data.password === "") {
      setErrorMessage("All fields are mandatory");
    } 
    else {
      setLoading(true);
      var body = {
        username: data.username,
        email: data.email,
        password: data.password,
        role: ["user"]
      }
      axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signup",body,{
        headers: {
          "Content-Type" : "application/json"
      }})
      .then(() => {
        setFeedbackMessage("Your account has been created successfully, you will be redirected to the sign-in page in 5 seconds. ");
        setTimeout(() => {
         history.push('/signin')
        }, 5000);
      })
        .catch((e) => {
          setErrorMessage(e)
        });
        setLoading(false);
    }


    
  }

  return (
    <div className="page-jumbotron">
      <div className="page-container">
        <div className="auth-form signup-form">
          <h1>Sign Up</h1>
          <span className="error-message">{errorMessage}</span>
          <span className="feedback-message">{feedbackMessage}</span>
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <label htmlFor="username-field">
                Username
                <input
                  className="auth-input"
                  type="text"
                  id="username-field"
                  name="username"
                  {...register("username")}
                />
              </label>
              <label htmlFor="email-field">
                Email
                <input
                  className="auth-input"
                  type="email"
                  id="email-field"
                  name="email"
                  {...register("email")}
                />
              </label>
              <label htmlFor="password-field">
                Password
                <input
                  className="auth-input"
                  type="password"
                  id="password-field"
                  name="password"
                  {...register("password")}
                />
              </label>
              <button type="submit" className="auth-button">
                {" "}
                Sign Up
              </button>
            </form>
          )}
        </div>
        <NavLink className="signup-signin-redirect-text" to="/signin">
          <div className="signup-signin-redirect">
            <span>Sign in here</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
export default SignUp;
