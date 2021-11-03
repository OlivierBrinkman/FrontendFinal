import React, { useEffect } from "react"
import {useState} from "react";
import "../styles/pages/Profile.css";
import { useHistory } from "react-router-dom";
import BreadCrumbs from '../components/BreadCrumbs';
import { getCrypto, getPrivateKey } from "../authentication/Authentication";
import Map from '../components/Map';

function Profile() {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    let history = useHistory();
    let privateKey = getPrivateKey();
    let crypto = getCrypto();

    useEffect(() => {
        if(!crypto) {history.push('/signin');}
    },);
    
    let getLocation = function () {
        navigator.geolocation.getCurrentPosition(setLocation);
    }

    let setLocation = function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    }

    let logout = function() {
       sessionStorage.clear();
        history.push("/signin")
        window.location.reload();
    }

        return (
            <div className="page-jumbotron">
            <div className="page-container">
              <section className="page-header">
                  <BreadCrumbs startPage="Profile" country="" city="" pageIndex="0" />
                  <h1 className="page-title">Profile</h1>     
              </section>
              
            <div className="profile-info-content">
                <section className="profile-info-container">
                        <div className="profile-info-item">
                            <span className="profile-details-label">Username</span>
                            <span className="profile-details-value">{crypto.username}</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="profile-details-label">Email</span>
                            <span className="profile-details-value">{crypto.email}</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="profile-details-label">Password</span>
                            <span className="profile-details-value">****</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="profile-details-label">Position</span>
                            <span className="profile-details-value">{lat} / {long}</span>
                        </div> 
                        <button className="default-button" onClick={getLocation}>Retrieve your location</button>
                </section>
                <section className="profile-info-container">
                <div className="profile-info-item">
                            <span className="profile-details-label">Private Key</span>
                            <span className="profile-details-value">{privateKey}</span>
                </div>
                <div className="profile-info-item">
                            <span className="profile-details-label">Cryto Hash</span>
                            <span className="profile-details-value">{sessionStorage.getItem("crypto")}</span>
                </div>
                <button className="default-button" onClick={logout}>Log out</button>
            </section>
            </div>

            <div className="maps-container">
               <Map lat={lat} lon={long} />
            </div>
            </div>
          </div>
        );     
    }

export default Profile;


