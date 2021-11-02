import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/pages/Search.css";
import { v4 as uuidv4 } from "uuid";
import ListItem from "../components/ListItem";
import axios from "axios";
import BreadCrumbs from "../components/BreadCrumbs";

function Countries() {
  //Variables and states
  let history = useHistory();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("_");

  //Endpoint paths
  let countriesPath = "https://countriesnow.space/api/v0.1/countries";

  //Get all countries
  useEffect(() => {
    axios
      .get(countriesPath)
      .then(function (response) {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.warn("An unexpected exception occured : " + error);
      });
  });

  //Country clicked eventhandler
  const countrySelected = (selectedCountry) => {
    sessionStorage.removeItem("country");
    sessionStorage.setItem("country", selectedCountry);
    if (sessionStorage.getItem("country")) {
      history.push("/countryDetails");
    } else {
      alert("Error: Country = Null @Search");
    }
  };

  let countrySearched = (event) => {
    let searchValue = event.target.value;
    if (!searchValue) {
      setSearch("_");
    } else {
      setSearch(event.target.value);
    }
  };

  return (
    <div className="page-jumbotron">
      <div className="page-container">
        <section className="page-header">
          <BreadCrumbs startPage="Search" country="" city="" pageIndex="0" />
          <h1 className="page-title">Search</h1>
        </section>

        <div className="search-container main-search-widget">
          <form method="get">
            <input
              type="text"
              className="search-widget"
              placeholder="Search for a country"
              name="country"
              onChange={countrySearched}
            />
          </form>

          <div className="page-list-results">
            {countries
              .filter((country) =>
                country.country.toLowerCase().includes(search.toLowerCase())
              )
              .map((filteredCountry) => (
                <ListItem
                  key={uuidv4()}
                  isCountry="true"
                  parentCallback={countrySelected}
                  title={filteredCountry.country}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countries;
