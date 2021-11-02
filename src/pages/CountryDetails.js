import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import NumberFormat from "react-number-format";
import ListItem from "../components/ListItem";
import BreadCrumbs from '../components/BreadCrumbs';

function CountryDetails() {
  
  //Variables and states
  const [country, setCountry] = useState([]);
  const [citites, setCities] = useState([]);
  const [flag, setFlag] = useState({});
  const selectedCountry = localStorage.getItem("country");
  let [maxRecords, setMaxRecords] = useState(10);
  let history = useHistory();
  let [search, setSearch] = useState("");

  //Endpoint paths
  let countryPath = "https://restcountries.com/v3/name/" + selectedCountry
  let citiesPath = "https://countriesnow.space/api/v0.1/countries/cities"

  //Get country information by country name
  useEffect(() => {
    axios.get(countryPath).then(function (response) {
      setCountry(response.data[0])
      setFlag(response.data[0].flags[0])
      
      axios.post(citiesPath, {country: selectedCountry}).then(function (response) {
          setCities(response.data.data)
      })
    })
  },[maxRecords]);

  //City clicked  
  let citySelected_EH = (selectedCity) => { 
    localStorage.removeItem("city"); 
    localStorage.setItem("city", selectedCity);
    if(localStorage.getItem("city")) {
      history.push("/cityDetails")
    }
    else {
     alert("Error: City = Null @CountryDetails")
    }
  }

  //Searched for a city 
  let citySearched = (event) => {
    let searchValue = event.target.value;
    if(!searchValue) {
      setSearch("_")
    }
    else {
      setSearch(event.target.value)
    }
     
  }

  return (
    <div className="page-jumbotron">
      <div className="page-container">
          <BreadCrumbs startPage="Search" country={selectedCountry} city="" pageIndex="1" />
          <div className="country-details-component">
              <h1 className="page-title">{selectedCountry}</h1>
              <div className="content-container">
                <div className="country-details-container">
                  <div className="country-info-container">
                 
                    <div className="country-details-row">
                      <div className="details-container-value">
                      <img className="country-flag-image" src={flag} />
                      </div>
                    </div>
                    <div className="country-details-row">
                    <h6 className="details-container-label">Capital</h6>
                      <div className="details-container-value">
                        {country.capital}
                      </div>
                    </div>
                    <div className="country-details-row">
                      <h6 className="details-container-label">Region</h6>
                      <div className="details-container-value">
                          <span>{country.region}</span>
                      </div>
                    </div>
                    <div className="country-details-row"> 
                    <h6 className="details-container-label">Sub Region</h6>
                      <div className="details-container-value">
                          <span>{country.subregion}</span>
                      </div>
                    </div>
                    <div className="country-details-row country-details-row-last">
                    <h6 className="details-container-label">Population</h6>
                      <div className="details-container-value ">
                            <span>
                                <NumberFormat
                                  thousandSeparator={true}
                                  prefix={""}
                                  displayType={"text"}
                                  value={country.population}
                                />
                            </span>
                      </div>
                    </div>
                   
                  </div>
                  <div className="country-details-flag-container">
                  <div className=" content-container-search">     
                        <div className="search-container">
                        <form method="get">
                            <input type="text" className="search-widget" placeholder="Search for a country" name="country"onChange={citySearched}  />
                        </form>
                        <div className="page-list-results">
                        {citites.filter(city => city.toLowerCase().includes(search.toLowerCase())).map(filteredCity => (
                        <ListItem key={uuidv4()} redirectTo="cityDetails" parentCallback={citySelected_EH} title={filteredCity}/>
                      ))} 
                        </div>
                        </div>
                        </div>
        
                  </div> 
                </div>

              </div>
          </div> 
      </div>
      </div>
  )
}
export default CountryDetails;
