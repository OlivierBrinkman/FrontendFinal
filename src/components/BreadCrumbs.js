import React, { Component } from 'react';
import "../styles/BreadCrumbs.css";

class BreadCrumbs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startPage : this.props.startPage,
            country: this.props.country,
            city: this.props.city,
            pageIndex : this.props.pageIndex
          };
      }

  render() {
    if(this.state.pageIndex === "0") {
        return (
            <div className="breadcrumbs">
                <a className="breadcrumb breadcrumb-active" href={"/"+this.state.startPage}><span>{this.state.startPage}  <span className="breadcrumb-separator">{">"}</span></span></a>         
            </div>
        )
    }
    else if (this.state.pageIndex === "1") {
        return (
            <div className="breadcrumbs">
                <a className="breadcrumb" href={"/"+this.state.startPage}><span>{this.state.startPage} <span className="breadcrumb-separator">{">"}</span></span></a>         
                <a className="breadcrumb breadcrumb-active" href="/countryDetails"><span>{this.state.country} <span className="breadcrumb-separator">{">"}</span></span></a>  
            </div>
        )
    }
    else if (this.state.pageIndex === "2") {
        return (
            <div className="breadcrumbs">
                <a className="breadcrumb" href={"/"+this.state.startPage}><span>{this.state.startPage}  <span className="breadcrumb-separator">{">"}</span></span></a>         
                <a className="breadcrumb" href="/countryDetails"><span>{this.state.country}  <span className="breadcrumb-separator">{">"}</span></span></a>  
                <a className="breadcrumb breadcrumb-active" href="/cityDetails"><span>{this.state.city}  <span className="breadcrumb-separator">{">"}</span></span></a>  
            </div>
        )
    }
    else if (this.state.pageIndex === "3") {
        return (
            <div className="breadcrumbs">
                <a className="breadcrumb" href={"/"+this.state.startPage}><span>{this.state.startPage} <span className="breadcrumb-separator">{">"}</span></span></a>         
                <a className="breadcrumb" href="/countryDetails"><span>{this.state.country}  <span className="breadcrumb-separator">{">"}</span></span></a>  
                <a className="breadcrumb" href="/cityDetails"><span>{this.state.city}  <span className="breadcrumb-separator">{">"}</span></span></a>  
                <a className="breadcrumb breadcrumb-active" href="/cityDayDetails"><span>Hourly Forecast</span></a>  
            </div>
        )
    }
    else {
        return(
            <span>Something isn't working.</span>
        )
    }
  }
}
export default BreadCrumbs;