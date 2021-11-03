import React from "react";
import "../styles/pages/Search.css";
import NumberFormat from "react-number-format";
import SimpleDateTime from "react-simple-timestamp-to-date";

class ForecastTableItem extends React.Component {
  render() {
    return (
      <item className="forecast-table-row">
        <div className="forecast-table-col">
          <SimpleDateTime
            timeSeparator=":"
            format="MYD"
            showTime="1"
            showDate="0"
            meridians="1"
          >
           {this.props.dateTime}
          </SimpleDateTime>
        </div>
        <div className="forecast-table-col  text-align-center">
          <NumberFormat
            decimalScale="0"
            decimalSeparator=""
            displayType={"text"}
            value={this.props.temp}
          />{" "}
          ℃{" "}
        </div>
        <div className="forecast-table-col-image">
          <img
            id="wicon"
            src={
              "http://openweathermap.org/img/w/" +
              this.props.iconCode +
              ".png"
            }
            alt="Weather icon"
          />
        </div>
      </item>
    )
  }
}
export default ForecastTableItem;
