import React from "react";
import FooterImage from "../assets/footerWallpaper.png";
import "../styles/components/Footer.css";

class Footer extends React.Component {
  render() {
    return <img className="footer-image" src={FooterImage} alt="" />;
  }
}
export default Footer;
