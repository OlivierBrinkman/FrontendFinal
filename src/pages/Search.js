import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ListItem from "../components/ListItem";
import axios from 'axios';
import BreadCrumbs from '../components/BreadCrumbs';
function Search() {   

    //Variables and states
    let history = useHistory();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("_");
    let [maxRecords, setMaxRecords] = useState(10);
    //Endpoint paths
    let countriesPath = "https://countriesnow.space/api/v0.1/countries"

    //Get all countries
    useEffect(() => {
      axios.get(countriesPath).then(function (response) {    
        setCountries(response.data.data)
      }).catch((error) => {
        console.warn("An unexpected exception occured : " + error);
      })
    },[maxRecords]);


    //Country clicked eventhandler
    const countrySelected = (selectedCountry) => { 
        localStorage.removeItem("country"); 
        localStorage.setItem("country", selectedCountry);
        if(localStorage.getItem("country")) {
           history.push("/countryDetails")
        }
        else {
           alert("Error: Country = Null @Search")
        }
    }

    let countrySearched = (event) => {
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
        <BreadCrumbs startPage="Search" country="" city="" pageIndex="0" />
            <h1 className="page-title">Search</h1>    
            <div className="content-container content-container-search">     
            <div className="search-container">
            <form method="get">
                <input type="text" className="search-widget" placeholder="Search for a country" name="country"onChange={countrySearched}  />
            </form>
            <div className="page-list-results">
            {countries.filter(country => country.country.toLowerCase().includes(search.toLowerCase())).map(filteredCountry => (
              <ListItem isCountry="true" parentCallback={countrySelected} title={filteredCountry.country}/>
            ))}
            </div>
            </div>
            </div>
      </div>
      </div>
    )
}

export default Search;