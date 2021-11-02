import React, {Component, useState, useContext} from "react";
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CountryDetails from "./pages/CountryDetails";
import CityDetails from "./pages/CityDetails";
import CityDayDetails from "./pages/CityDayDetails";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

import "./App.css";
function App() {
  return (
    <Router>
      <ul className="menu-list">
        <span className="menu-title">
        <NavLink className="menu-title-link" activeClassName="menu-title-active" to="/">
              Weather Forecast Service
        </NavLink>
        </span>
        <NavLink className="menu-item-link" activeClassName="menu-item-active" to="/search">
          <li className="menu-item">
            Search
          </li>
        </NavLink>
        <NavLink className="menu-item-link" activeClassName="menu-item-active" to="/signin">
          <li className="menu-item">
            Sign in
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
        <Route path="/cityDayDetails">
          <SetCityDayDetails />
        </Route>
        <Route path="/signin">
          <SetSignIn />
        </Route>
        <Route path="/signup">
          <SetSignUp />
        </Route>
        <Route path="/profile">
          <SetProfile />
        </Route>
        <Route path="/">
          <SetNotFound />
        </Route>
      </Switch>
    </Router>
    
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

  function SetCityDayDetails() {
    return (
        <CityDayDetails />
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
