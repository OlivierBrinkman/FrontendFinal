import React, { useEffect, useState } from "react";
import "../styles/pages/Search.css";
import axios from "axios";
import NumberFormat from "react-number-format";
import BreadCrumbs from "../components/BreadCrumbs";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Loader from "../components/Loader";
function CityDetails() {

  //Variables and states
  const selectedCity = sessionStorage.getItem("city");
  const selectedCountry = sessionStorage.getItem("country");
  const [coordWeather, setCoordWeather] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  //Endpoint paths
 
  //Get weather by country name and coordinates
  useEffect(() => {
    setLoading(true);
    let apiKey = "API KEY HERE";
    let weatherByCityNamePath ="https://api.openweathermap.org/data/2.5/weather?q="+sessionStorage.getItem("city")+"&appid="+apiKey +"&units=metric";
    let weatherByCoordinatesPath ="https://api.openweathermap.org/data/2.5/onecall?lat=";
  
    axios.post(weatherByCityNamePath).then(function (response) {
      axios.post(weatherByCoordinatesPath +response.data.coord.lat +"&lon="+response.data.coord.lon+"&appid="+apiKey+"&units=metric")
      .then(function (response) {
          setCoordWeather(response.data.current);
          setDailyForecast(response.data.daily.slice(1, 8));
          setHourlyForecast(response.data.hourly.slice(1, 8));
      })
      .catch(() => {
        return false;
      }) 
    })
    .catch(error => {
      alert(error)
    })
  setLoading(false); 
  }, []);

  return (
    <div className="page-jumbotron">
      <div className="page-container">
        <section className="page-header">
          <BreadCrumbs
            startPage="Search"
            country={selectedCountry}
            city={selectedCity}
            pageIndex="2"
          />
          <h1 className="page-title">{selectedCity}</h1>
        </section>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="content-container city-details-container">
              <div className="details-container">
                <div className="country-details-row">
                  <h6 className="details-container-label">Temperature</h6>
                  <div className="details-container-value">
                    {coordWeather.temp}
                  </div>
                </div>
                <div className="country-details-row country-details-row-last">
                  <h6 className="details-container-label">Feels Like</h6>
                  <div className="details-container-value">
                    {coordWeather.feels_like}
                  </div>
                </div>
              </div>
              <div className="details-container">
                <div className="country-details-row">
                  <h6 className="details-container-label">Clouds</h6>
                  <div className="details-container-value">
                    {coordWeather.clouds}
                  </div>
                </div>
                <div className="country-details-row country-details-row-last">
                  <h6 className="details-container-label">Wind Speed</h6>
                  <div className="details-container-value details-container-value-last">
                    {coordWeather.wind_speed}Km/h
                  </div>
                </div>
              </div>
              <div className="details-container">
                <div className="country-details-row">
                  <h6 className="details-container-label">UV Index</h6>
                  <div className="details-container-value">
                    {coordWeather.uvi}
                  </div>
                </div>
                <div className="country-details-row country-details-row-last">
                  <h6 className="details-container-label">Humidity</h6>
                  <div className="details-container-value details-container-value-last">
                    {coordWeather.humidity}
                  </div>
                </div>
              </div>
              <div className="details-container details-container-last">
                <div className="country-details-row">
                  <h6 className="details-container-label">Sunrise</h6>
                  <div className="details-container-value">
                    <SimpleDateTime
                      timeSeparator=":"
                      format="MYD"
                      showTime="1"
                      showDate="0"
                      meridians="1"
                    >
                      {coordWeather.sunrise}
                    </SimpleDateTime>
                  </div>
                </div>
                <div className="country-details-row country-details-row-last">
                  <h6 className="details-container-label">Sunset</h6>
                  <div className="details-container-value details-container-value-last">
                    <SimpleDateTime
                      timeSeparator=":"
                      format="MYD"
                      showTime="1"
                      showDate="0"
                      meridians="1"
                    >
                      {coordWeather.sunset}
                    </SimpleDateTime>
                  </div>
                </div>
              </div>
            </div>
            <section className="section-flex-forecast">
              <div className="day-forecast-col">
                <div className="forecast-table-header">
                  <div className="forecast-table-col">
                    <span>Time</span>
                  </div>
                  <div className="forecast-table-col  text-align-center">
                    <span>Time</span>
                  </div>
                  <div className="forecast-table-col text-align-right">
                    <span>Weather</span>
                  </div>
                </div>
                {hourlyForecast.map((forecast) => (
                  <item className="forecast-table-row">
                    <div className="forecast-table-col">
                      <SimpleDateTime
                        timeSeparator=":"
                        format="MYD"
                        showTime="1"
                        showDate="0"
                        meridians="1"
                      >
                        {forecast.dt}
                      </SimpleDateTime>
                    </div>
                    <div className="forecast-table-col  text-align-center">
                      <NumberFormat
                        decimalScale="0"
                        decimalSeparator=""
                        displayType={"text"}
                        value={forecast.temp}
                      />{" "}
                      ℃{" "}
                    </div>
                    <div className="forecast-table-col-image">
                      <img
                        id="wicon"
                        src={
                          "http://openweathermap.org/img/w/" +
                          forecast.weather[0].icon +
                          ".png"
                        }
                        alt="Weather icon"
                      />
                    </div>
                  </item>
                ))}
              </div>
              <div className="forecast-table week-forecast-col">
                <div className="forecast-table-header">
                  <div className="forecast-table-col">
                    <span>Day</span>
                  </div>
                  <div className="forecast-table-col  text-align-center">
                    <span>Minimum</span>
                  </div>
                  <div className="forecast-table-col  text-align-center">
                    <span>Maximum</span>
                  </div>
                  <div className="forecast-table-col text-align-right">
                    <span>Weather</span>
                  </div>
                </div>
                {dailyForecast.map((forecast) => (
                  <item className="forecast-table-row">
                    <div className="forecast-table-col">
                      <SimpleDateTime
                        dateSeparator="-"
                        showTime="0"
                        showYear="0"
                      >
                        {forecast.dt}
                      </SimpleDateTime>
                    </div>
                    <div className="forecast-table-col  text-align-center">
                      <span>
                        <NumberFormat
                          decimalScale="0"
                          decimalSeparator=""
                          displayType={"text"}
                          value={forecast.temp.min}
                        />{" "}
                        ℃
                      </span>
                    </div>
                    <div className="forecast-table-col  text-align-center">
                      <span>
                        <NumberFormat
                          decimalScale="0"
                          decimalSeparator=""
                          displayType={"text"}
                          value={forecast.temp.max}
                        />{" "}
                        ℃
                      </span>
                    </div>
                    <div className="forecast-table-col-image">
                      <img
                        id="wicon"
                        src={
                          "http://openweathermap.org/img/w/" +
                          forecast.weather[0].icon +
                          ".png"
                        }
                        alt="Weather icon"
                      />
                    </div>
                  </item>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default CityDetails;
