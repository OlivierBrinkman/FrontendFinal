
import React, { Component, useState } from 'react'
import Countries from '../components/Countries'
import Cities from '../components/Cities'
import CityDetails from '../components/CityDetails'
import CountryDetails from '../components/CountryDetails'
import Maps from '../components/Maps'
import { findAllInRenderedTree } from 'react-dom/test-utils'

 function Search () {

    var navigationText = 'Countries > '

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);


    
    var countryClicked = function(country) {
        console.log(country);
        toggleStep(2);
        setSelectedCountry(country);
    }
        
    var cityClicked = function(city) {
        toggleStep(3);
        setSelectedCity(city);  
    }


    var toggleStep = function(tab) {
        if(tab === 1) {
            setStep1(true);
            setStep2(false);
            setStep3(false);
        }
        else if(tab === 2) {
            setStep1(false);
            setStep2(true);
            setStep3(false);
        }
        else if(tab === 3) {
            setStep1(false);
            setStep2(false);
            setStep3(true);
        }
    }

    if(step1) {
        return (
            <div className="component-section">
                <a className="navigation-link">{navigationText}</a><span className="current-page-crumb"></span>
                <Countries countryClicked={countryClicked} />
            </div>
        )
    }
    else if(step2) {
            return (
                <div className="component-section">
                    <a onClick={() => toggleStep(1)} className="navigation-link">{navigationText}</a><span className="current-page-crumb">{selectedCountry.country}</span>
                    <div className="country-details-component">
                        <h1>{selectedCountry.country}</h1>
                        <div className="country-details-parent">
                            <div className="country-details">
                                <CountryDetails countryName={selectedCountry.country} />
                            </div>
                            <div className="country-maps">
                                <Maps isCountry={true} selectionKey={selectedCountry.country}/>
                            </div>
                        </div>
                        <div className="country-cities">
                            <Cities cities={selectedCountry.cities} cityClicked={cityClicked} />
                        </div>
                    </div>
                </div>
            )
    }
    else if(step3) {
                return (
                    <div className="component-section">
                        <a onClick={() => toggleStep(2)} className="navigation-link">{navigationText}</a><span className="current-page-crumb">{selectedCity}</span>
                        <div className="city-details">
                            <CityDetails city={selectedCity}/>
                        </div>
                    </div>
                )
    }
     
}

export default Search;