import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../styles/pages/Search.css";
import axios from "axios";
import NumberFormat from "react-number-format";
import ListItem from "../components/ListItem";
import BreadCrumbs from "../components/BreadCrumbs";
import Loader from "../components/Loader";

function CountryDetails() {
  
  //Variables and states
  const [country, setCountry] = useState([]);
  const [citites, setCities] = useState([]);
  const [flag, setFlag] = useState({});
  let history = useHistory();
  let [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const selectedCountry = sessionStorage.getItem("country");

  useEffect(() => {
    setLoading(true);
    let selectedCountry = sessionStorage.getItem("country");
    let countryPath = "https://restcountries.com/v3/name/" + selectedCountry;
    let citiesPath = "https://countriesnow.space/api/v0.1/countries/cities";
    axios.get(countryPath).then(function (response) {
      setCountry(response.data[0]);
      setFlag(response.data[0].flags[0]);
      axios.post(citiesPath, { country: selectedCountry })
        .then(function (response) {
          setCities(response.data.data);
        });
    }).catch(error => {
        alert(error)
      })
      setLoading(false); 
  },[]);

  let citySelected_EH = (selectedCity) => {
    sessionStorage.removeItem("city");
    sessionStorage.setItem("city", selectedCity);
    if (sessionStorage.getItem("city")) {
      history.push("/cityDetails");
    } else {
      alert("Error: City = Null @CountryDetails");
    }
  };

  let citySearched = (event) => {
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
          <BreadCrumbs
            startPage="Search"
            country={selectedCountry}
            city=""
            pageIndex="1"
          />
          <h1 className="page-title">{selectedCountry}</h1>
        </section>
        {loading ? (<Loader />) : (
          <div className="country-details-component">
            <div className="content-container">
              <div className="country-details-container">
                <div className="country-info-container">
                  <div className="country-details-row remove-row-padding">
                    <div className="details-container-value">
                      <img className="country-flag-image" src={flag} alt="Country Flag"/>
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
                        <input
                          type="text"
                          className="search-widget"
                          placeholder="Search for a country"
                          name="country"
                          onChange={citySearched}
                        />
                      </form>
                      <div className="page-list-results">
                        {citites
                          .filter((city) =>
                            city.toLowerCase().includes(search.toLowerCase())
                          )
                          .map((filteredCity) => (
                            <ListItem
                              key={uuidv4()}
                              redirectTo="cityDetails"
                              parentCallback={citySelected_EH}
                              title={filteredCity}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CountryDetails;
