import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class Cities extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            cities: this.props.cities,
            citiesToDisplay: this.props.cities,
            startIndex : 0, 
            endIndex :50,
            moreOrLessLabel : 'More'
        };
    }

    cityClicked(city) {
        this.props.cityClicked(city)
    }

    citySearch(e) {
        var searchValue = e.target.value.toLowerCase();
        if (searchValue === "") {
            this.setState({ citiesToDisplay: this.state.cities });
        }
        let searchResults = [];
        searchResults = this.state.cities.filter((city) =>
           city.toLowerCase().includes(searchValue)
         );
        this.setState({ citiesToDisplay: searchResults });
     }


     


     toggleMoreOrLess() {
        if(this.state.endIndex === 50) {
            this.setState({endIndex : 5000, moreOrLessLabel : 'Less'})
        }
        else {
            this.setState({endIndex : 50, moreOrLessLabel : 'More'})
        }
    }

    render() {
        window.scrollTo(0, 0)
        let listSize = this.state.citiesToDisplay.length;
        let slicedCities = this.state.citiesToDisplay.slice(this.state.startIndex, this.state.endIndex);
      
        return (
            <div>
                 <h3>Cities</h3>
                 <div className="search-container">
                       <input id="search-input-widget" placeholder="Search"  onKeyUp={e => this.citySearch(e)}/> 
                    </div>
                    <ul className="list">
                        {slicedCities.map((city) => (
                            <li className="list-item" key={uuidv4()}  onClick={() => this.cityClicked(city)}>{city}</li>
                        ))}
                    </ul>
                    { listSize >= 75  ? <div className="city-pagination-container">
                        <button onClick={() => this.toggleMoreOrLess()} class="more-button">{this.state.moreOrLessLabel}...</button>   
                    </div> : null }
            </div>
        )
    }
}


