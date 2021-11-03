import React, { useState ,useEffect} from "react";
import "../styles/pages/SignInSignUp.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import {setCrypto, setPrivateKey} from "../authentication/Authentication"
import Loader from "../components/Loader";
function SignIn() {

  const { handleSubmit, register } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("crypto") !== null) {
      history.push("/profile");
    }
  });

  let onSubmit = function(data) {
    if(!data.username||!data.password) {
        setErrorMessage("All fields are mandatory") 
    }
    else {
        setLoading(true);
        var body = {
          username: data.username,
          password: data.password,
        }
        axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signin",body,{headers: {"Content-Type" : "application/json"}}).then((response) => {
          setPrivateKey(response.data.accessToken);
          setCrypto(response.data)
          history.push("/profile");
          window.location.reload();
        })
        .catch((e) => {
          setErrorMessage("Invalid Credentials / " + e);
        });
        setLoading(false);
      }
  }

  return (
    <div className="page-jumbotron">
      <div className="page-container">
        <div className="auth-form signin-form">
          <h1>Sign in</h1>
          <span className="error-message">{errorMessage}</span>
          {loading ? (<Loader />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="username-field">
                Username
                <input
                  className="auth-input"d
                  type="text"
                  id="username-field"
                  name="username"
                  {...register("username")}
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
                Sign In{" "}
              </button>
            </form>
          )}
        </div>
        <NavLink className="signup-signin-redirect-text" to="/signup">
          <div className="signup-signin-redirect">
            <span>Sign up here</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SignIn;
