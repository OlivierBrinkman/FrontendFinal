import React, { useEffect, useState } from "react";
import "../styles/BreadCrumbs.css";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import BreadCrumbs from '../components/BreadCrumbs';
import NumberFormat from 'react-number-format';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
function CityDayDetails() {

    //Variables and states
    let apiKey = "df716b8afa6bab5a0fff51fadb22005f";
    const selectedCity = localStorage.getItem("city");
    const selectedCountry = localStorage.getItem("country");
    const[hourlyForecast, setHourlyForecast] = useState([])

    //Endpoint paths
    let weatherByCityNamePath = "https://api.openweathermap.org/data/2.5/weather?q="+selectedCity+"&appid="+apiKey+"&units=metric"
    let weatherByCoordinatesPath = "https://api.openweathermap.org/data/2.5/onecall?lat=";

    //Get hourly forecast by city coordinates 
    useEffect(() => {
        axios.post(weatherByCityNamePath).then(function (response) {
            axios.post(weatherByCoordinatesPath+response.data.coord.lat+"&lon="+response.data.coord.lon+"&appid="+apiKey+"&units=metric").then(function (response) {    
                setHourlyForecast(response.data.hourly)
            })
        })
    },[]);

    return (
        <div className="page-jumbotron">
            <div className="page-container">
        <BreadCrumbs startPage="Search" country={selectedCountry} city={selectedCity} pageIndex="3" />
        <h1 className="page-title">Hourly Forecast - 48 Hours</h1>
            <div className="city-details-forecast-container">
                <div className="forecast-headers-container">
                                <span className="forecast-header">Day</span>
                                <span className="forecast-header">Minimum</span>
                                <span className="forecast-header">Maximum</span>
                                <span className="forecast-header">Weather</span>
                                <span className="forecast-header">Description</span>
                                <span className="forecast-header">Humidity</span>
                                <span className="forecast-header">Pressure</span>
                                <span className="forecast-header">Feels Like - Day</span>
                                <span className="forecast-header">Feels Like - Night</span>       
                                <span className="forecast-header">Hourly</span> 
                </div>
                <ul className="daily-forecast-list">
                            {hourlyForecast.map((forecast) => (
                                <li className="daily-forecast-item" key={uuidv4()}>
                                    <div class="forecast-value forecast-date-value">
                                    
                                    <SimpleDateTime timeSeparator=":" format="MYD" showTime="1" showDate="0" meridians="1">{forecast.dt}</SimpleDateTime>
                                    </div>
                                    <div class="forecast-value">
                                       <span><NumberFormat decimalScale='0' decimalSeparator="" displayType={'text'} value={forecast.temp} /> ℃</span>
                                    </div>
                                    <div class="forecast-value">
                                    <span><NumberFormat decimalScale='0' decimalSeparator="" displayType={'text'} value={forecast.feels_like} /> ℃</span>
                                    </div>
                                    <div class="forecast-value">
                                       <span>{forecast.weather[0].main}</span>
                                    </div>
                                    <div class="forecast-value">
                                    <span>{forecast.weather[0].description}</span>
                                    </div>
                                    <div class="forecast-value">
                                       <span>{forecast.humidity}</span>
                                    </div>
                                    <div class="forecast-value">
                                    <span>{forecast.pressure}</span>
                                    </div>
                                    <div class="forecast-value">
                                       <span><NumberFormat decimalScale='0' decimalSeparator="" displayType={'text'} value={forecast.feels_like.day} /> ℃</span>
                                    </div>
                                    <div class="forecast-value">
                                    <span><NumberFormat decimalScale='0' decimalSeparator="" displayType={'text'} value={forecast.feels_like.night} /> ℃</span>
                                    </div>
                                    <div class="forecast-value">
                                    <button>Details</button>
                                    </div>
                                </li>
                            ))}
                </ul>      
            </div>      
        </div>
        </div>
 
    )
}
export default CityDayDetails;
