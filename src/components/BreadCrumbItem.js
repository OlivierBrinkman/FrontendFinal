import React from "react";
import "../styles/components/BreadCrumbs.css";
class BreadCrumbItem extends React.Component {
  render() {
    return (
        <a data-testid="breadcrumb-item" className={this.props.className} href={"/" + this.props.linkTo}>
            {this.props.title} {" "} <span className="breadcrumb-separator">{">"}</span>
        </a>
    );
  }
}
export default BreadCrumbItem;
