import React, { Component } from 'react'
import Loader from '../assets/Loader.gif'
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import Maps from '../components/Maps'
import NumberFormat from 'react-number-format';
import { v4 as uuidv4 } from 'uuid';
export default class CityDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isLoading : true,  
            hasError : false,
            city: this.props.city, 
            response: {}, 
            coordinations: {}, 
            temp : 0,
            feels_like: 0,
            wind: {}, 
            apiKey: "df716b8afa6bab5a0fff51fadb22005f",
            forecastRespone: []
        };
    }
          
    componentDidMount() {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid="+this.state.apiKey+"&units=metric")
            .then(res => res.json())
            .then((result) => {
                this.setState({response : result, coordinations: result.coord, temp: result.main.temp, feels_like : result.main.feels_like, wind : result.wind, });
                setTimeout(() => {
                    this.setState({isLoading : false})
                }, 500);
                fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+this.state.response.coord.lat+"&lon="+this.state.response.coord.lon+"&appid="+this.state.apiKey+"&units=metric")
                .then(res => res.json())
                .then((result) => {
                    this.setState({forecastRespone : result.daily})
                    console.log(result.daily[0])
                })
                .catch(() => 
                {
                    this.setState({hasError : true, isLoading: false});    
                });    
            })
            .catch(() => 
            {
                this.setState({hasError : true, isLoading: false});    
        });       
    }

    render() {

        if(this.state.isLoading) {
            return (
                <div className="page-loader-container">
                    <img id="page-loader-gif" width="150px" height="150px" src={Loader} />
                </div>
            )
        }
        else {
            if(this.state.hasError) {
                return (
                    <fieldset class="no-data-available-fieldset">
                        <legend><h1>Error Message</h1></legend>
                        <h2>Unfortunately we were unable to request data {this.state.city}</h2>
                    </fieldset> 
                )
            }
            else {
                return (
                    <div className="city-details-content">
                        <h1>{this.state.city}</h1>

                        <section className="city-info-container">
                            <h4>Current Weather</h4>
                            <div className="city-info-item">
                                <span className="city-details-label">Temperature</span>
                                <span className="city-details-value">{this.state.temp} ℃</span>
                            </div>
                            <div className="city-info-item">
                                <span className="city-details-label">Feels like</span>
                                <span className="city-details-value">{this.state.feels_like} ℃</span>
                            </div>
                        </section>
    
                        <section className="city-info-container">
                            <h4>GPS</h4>
                            <div className="city-info-item">
                                <span className="city-details-label">Longitude</span>
                                <span className="city-details-value"> {this.state.coordinations.lon}</span>
                            </div>
                            <div className="city-info-item">
                                <span className="city-details-label">Latitute</span>
                                <span className="city-details-value"> {this.state.coordinations.lat}</span>
                            </div>
                        </section>
    
                        <section className="city-info-container">
                            <h4>Wind</h4>
                            <div className="city-info-item">
                                <span className="city-details-label">Speed</span>
                                <span className="city-details-value"> {this.state.wind.speed}</span>
                            </div>
                            <div className="city-info-item">
                                <span className="city-details-label">Direction</span>
                                <span className="city-details-value">{this.state.wind.deg}°</span>
                            </div>
                        </section>
                    
                        <h3>Forecast</h3>
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
                        </div>
                        <ul className="daily-forecast-list">
                            {this.state.forecastRespone.map((forecast) => (
                                <li className="daily-forecast-item" key={uuidv4()}>
                                    <div class="forecast-value forecast-date-value">
                                        <SimpleDateTime dateSeparator="-"  showTime="0" showYear="0" >{forecast.dt}</SimpleDateTime>
                                    </div>
                                    <div class="forecast-value">
                                       <span><NumberFormat decimalScale='0' decimalSeparator="" displayType={'text'} value={forecast.temp.min} /> ℃</span>
                                    </div>
                                    <div class="forecast-value">
                                    <span><NumberFormat decimalScale='0' decimalSeparator="" displayType={'text'} value={forecast.temp.max} /> ℃</span>
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
                                </li>
                            ))}
                        </ul>
                              
                        </div>
                    
                    <h3>Location</h3>
                    <div className="city-details-maps-container">
                        <Maps isCountry={false} lat={this.state.response.coord.lat} long={this.state.response.coord.lon}/>
                    </div>
                    </div>
                )
            } 
        }
    }
}
