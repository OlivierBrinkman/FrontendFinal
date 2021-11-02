import React from "react";
import "../styles/components/Loader.css";
import Loading from "../assets/loading.gif";
class Loader extends React.Component {
  render() {
    return (
      <div data-testid="loading-container" class="loading-container">
        <img  src={Loading} className="loading-gif" alt="Loading GIF" />
      </div>
    );
  }
}
export default Loader;
