import React from "react";
import "../styles/components/BreadCrumbs.css";
import BreadCrumbItem from "./BreadCrumbItem";

class BreadCrumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPage: this.props.startPage,
      country: this.props.country,
      city: this.props.city,
      pageIndex: this.props.pageIndex
    };
  }

  render() {
    if (this.state.pageIndex === "0") {
      return (
        <div data-testid="breadcrumbs" className="breadcrumbs">
            <BreadCrumbItem className="breadcrumb breadcrumb-active" linkTo={this.state.startPage} title={this.state.startPage}/>
        </div>
      );
    } else if (this.state.pageIndex === "1") {
      return (
        <div data-testid="breadcrumbs" className="breadcrumbs">
           <BreadCrumbItem className="breadcrumb" linkTo={this.state.startPage} title={this.state.startPage}/>
           <BreadCrumbItem className="breadcrumb breadcrumb-active" linkTo="countryDetails" title={this.state.country}/>
        </div>
      );
    } else if (this.state.pageIndex === "2") {
      return (
        <div data-testid="breadcrumbs" className="breadcrumbs">
           <BreadCrumbItem className="breadcrumb" linkTo={this.state.startPage} title={this.state.startPage}/>
           <BreadCrumbItem className="breadcrumb" linkTo="countryDetails" title={this.state.country}/>
           <BreadCrumbItem className="breadcrumb breadcrumb-active" linkTo="cityDetails" title={this.state.city}/>
        </div>
      );
    } else {
      return <span data-testid="breadcrumb-item">Something isn't working.</span>;
    }
  }
}
export default BreadCrumbs;
