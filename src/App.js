import React, {Component, useState, useContext} from "react";
import Session from './components/Session';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./App.css";
import Cloud from "./assets/cloud.png"



function App() {

  const [session, setSession] = useState(Session.getSession())




  return (
    <Router>
      <ul className="menu-list">
        <span className="menu-title">
        <NavLink className="menu-title-link" activeClassName="menu-title-active" to="/">
          <img src={Cloud} width="28px" /> Weather Forecast Service
        </NavLink>
        </span>
        <NavLink className="menu-item-link" activeClassName="menu-item-active" to="/search">
          <li className="menu-item">
            Search
          </li>
        </NavLink>
        <NavLink className="menu-item-link" activeClassName="menu-item-active" to="/signin" hidden={session !== null}>
          <li className="menu-item">
            Sign in
          </li>
        </NavLink>
        <NavLink className="menu-item-link" activeClassName="menu-item-active" to="/profile" hidden={session === null}>
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
      <div className="main-content-container">
        <Search />
      </div>
    );
  }

  function SetSignIn() {
    return (
      <div className="main-content-container">
        <SignIn />
      </div>
    );
  }

  function SetSignUp() {
    return (
      <div className="main-content-container">
        <SignUp />
      </div>
    );
  }

  function SetProfile() {
      return (
        <div className="main-content-container">
          <Profile />
        </div>
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
