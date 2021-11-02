import React from "react";
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import Profile from "./Profile";
import Search from "./Countries";
import CountryDetails from "./CountryDetails";
import CityDetails from "./CityDetails";
import Footer from "../components/Footer";
import "../styles/Application.css";

function App() {
  return (
    <div className="application-content">
      <section className="application-router">
      <Router>
        <ul className="menu-list">
          <span className="menu-title">
          <NavLink className="menu-title-link" activeClassName="menu-title-active" to="/">
          <div className="menu-logo">
                  WFS
                </div>
          </NavLink>
          </span>
          <NavLink className="menu-item-link" activeClassName="menu-item-active" to="/search">
            <li className="menu-item">
              Search
            </li>
          </NavLink>   
          <NavLink className="menu-item-link" activeClassName="menu-item-active" to="/profile">
            <li className="menu-item">
              Profile
            </li>
          </NavLink> 
        </ul>
        <Switch>
          <Route exact={true} path="/">
            <SetHome />
          </Route>
          <Route path="/search">
            <SetSearch />
          </Route>
          <Route path="/countryDetails">
            <SetCountryDetails />
          </Route>
          <Route path="/cityDetails">
            <SetCityDetails />
          </Route>
          <Route path="/signin">
            <SetSignIn />
          </Route>
          <Route path="/signup">
            <SetSignUp />
          </Route>
          <Route path="/profile">
            {sessionStorage.getItem("crypto") ? <SetProfile /> :  <SetSignIn />}
          </Route>
          <Route path="/">
            <SetNotFound />
          </Route>
        </Switch>
      </Router>
      </section>
      
      <section className="application-footer">
        <Footer />
      </section>
    </div>
  );

  function SetHome() {
    return (
        <Home />
    );
  }

  function SetSearch() {
    return (
        <Search />
    );
  }

  function SetCountryDetails() {
    return (
        <CountryDetails />
    );
  }
  
  function SetCityDetails() {
    return (
        <CityDetails />
    );
  }

  function SetSignIn() {
    return (
        <SignIn />
    );
  }

  function SetSignUp() {
    return (
        <SignUp />
    );
  }

  function SetProfile() {
      return (
          <Profile />
      );
  }

  function SetNotFound() {
    return (
      <div className="main-content-container">
          <fieldset class="no-data-available-fieldset">
                <legend><h1>Page not found :(</h1></legend>
                <h2>This page doens't exists</h2>
            </fieldset> 
      </div>
    );
  }
}

export default App;
