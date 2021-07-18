import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Loader from '../assets/Loader.gif'

export default class Countries extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                isLoading: true,
                countries: [],
                countriesToDisplay: []
            };
        }

        componentDidMount() {
            window.scrollTo(0, 0)
            fetch("https://countriesnow.space/api/v0.1/countries")
                .then(res => res.json())
                .then((result) => {
                this.setState({
                    countries : result.data, 
                    countriesToDisplay: result.data, 
                    isLoading : false
                });
            }) 
            .catch(error => {
                alert('There was an unexpected error : ', error.toString());
            });
        }
    
        countryClick(country) {
            this.props.countryClicked(country)
        }
        
        countrySearch(e) {
            var searchValue = e.target.value.toLowerCase();
            if (searchValue === "") {
                this.componentDidMount()
            }
            let searchResults = [];
            searchResults = this.state.countries.filter((country) => country.country.toLowerCase().includes(searchValue));
            this.setState({ countriesToDisplay: searchResults});
         }


        render() {
            if(!this.state.isLoading) {
                return (
                    <div className="country-search-component">
                        <h1>Search for a country</h1>
                        <div className="search-container">
                                <input id="search-input-widget" placeholder="Search"  onKeyUp={e => this.countrySearch(e)}/> 
                        </div>
                        <ul className="list">
                            {this.state.countriesToDisplay.map((item) => (
                              <li key={uuidv4()} className="list-item" onClick={() => this.countryClick(item)}>{item.country}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
            else {
                return (
                <div className="page-loader-container">
                    <img id="page-loader-gif" width="150px" height="150px" src={Loader} />
                </div>
                )
            }
        }           
}



