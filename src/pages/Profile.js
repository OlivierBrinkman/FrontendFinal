import React, { Component, useEffect } from "react"
import { createContext , useState, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import Loader from "../assets/Loader.gif"
import Session from "../components/Session";
import Maps from "../components/Maps";
import BreadCrumbs from '../components/BreadCrumbs';

function Profile() {

    const [session, setSession] = useState({})
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    let history = useHistory();

    useEffect(() => {
        setSession(JSON.parse(Session.getSession()))
        if(localStorage.getItem("session") === null) {
            history.push("/signin")
        }
    });

    var getLocation = function () {
        navigator.geolocation.getCurrentPosition(setLocation);
    }

    var setLocation = function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
    }

    var logout = function() {
        Session.closeSession();
        history.push("/signin")
        window.location.reload();
    }

   
        return (
            <div className="page-container">
        <BreadCrumbs startPage="Profile" country="" city="" pageIndex="0" />
        <h1 className="page-title">Profile Page</h1>

                    <div className="profile-content">
                <section className="profile-info-container">
                    <h3>Welcome {session.username}</h3>
                    <div className="profile-info-item">
                        <span className="profile-details-label">Username</span>
                        <span className="profile-details-value">{session.username}</span>
                    </div>
                    <div className="profile-info-item">
                        <span className="profile-details-label">Email</span>
                        <span className="profile-details-value">{session.email}</span>
                    </div>
                    <div className="profile-info-item">
                        <span className="profile-details-label">Password</span>
                        <span className="profile-details-value">****</span>
                    </div>
                    <button className="auth-button" onClick={getLocation}>Retrieve your location</button>
                    <div className="profile-info-item">
                        <span className="profile-details-label">Latitude</span>
                        <span className="profile-details-value">{lat}</span>
                    </div>
                    <div className="profile-info-item">
                        <span className="profile-details-label">Longitude</span>
                        <span className="profile-details-value">{long}</span>
                    </div>
                    <button className="auth-button" onClick={logout}>Log out</button>
                </section>
         <section className="profile-location-container">
                <Maps isCurrentLocation={true} />
            </section>
            </div>
        </div>
  
       
        );     
    }

export default Profile;


