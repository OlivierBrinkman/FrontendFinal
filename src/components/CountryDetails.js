import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../assets/Loader.gif'

export default class CountryDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            response: {},
            countryName: this.props.countryName,
            flag: '',
            isLoading : true,
            hasError : false
        };
    }


    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/name/" + this.state.countryName)
            .then(res => res.json())
            .then((result) => {
            this.setState({
                response : result[0], 
                isLoading: false
            })
        }) 
        .catch(() => {
            this.setState({hasError : true, isLoading: false});    
        });
    }

    render() {
            if(!this.state.isLoading) {
                if(!this.state.hasError){
                        return (
                            <div className="country-details-content">
                                <section className="country-details-header">
                                    <img className="country-flag-image"src={this.state.response.flag} alt="flag"/>
                                </section>
                                <section className="country-details-info">
                                    <h6>Capital</h6>
                                    <div className="country-details-info-item"><span>{this.state.response.capital} </span></div>
                                    <h6>Region</h6>
                                    <div className="country-details-info-item"><span>{this.state.response.region} / {this.state.response.subregion}</span></div>
                                    <h6>Population</h6>
                                    <div className="country-details-info-item"><span>
                                        <NumberFormat thousandSeparator={true} prefix={''} displayType={'text'} value={this.state.response.population}/>
                                    </span></div>
                                    <h6>Timezone</h6>
                                    <select id="timezone-selection">
                                        {this.state.response.timezones.map((timezone) => (
                                             <option key={uuidv4()} id="timezone-item" value="timezone">{timezone}</option>
                                        ))}
                                    </select>
                                </section>
                            </div>
                        )
                }     
            }
            else {
                return (
                    <img id="page-loader-gif" src={Loader} />
                )
            }
    }
}