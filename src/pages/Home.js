import React, {useState} from "react"
import FileOne from '../assets/home-file-1.png';
import FileTwo from '../assets/home-file-2.png';
import FileThree from '../assets/home-file-3.png';
import ReactTooltip from 'react-tooltip';
import Design1 from "../assets/design_home.png";
import Design2 from "../assets/design_profile.png";
import Design3 from "../assets/design_search-2.png";
import Design4 from "../assets/design_search-3.png";
import Mockup1 from "../assets/mockup_home.jpg"
import Mockup2 from "../assets/mockup_profile.jpg";
import Mockup3 from "../assets/mockup_citydetails.jpg";
import Mockup4 from "../assets/mockup_country-details.jpg";
import BreadCrumbs from '../components/BreadCrumbs';


function Home() {
    let htmlOpen = " </";
    let htmlClose = ">";
    let reactOpen = "{";
    let reactClose = "}";

    return (



<div className="page-jumbotron">
      <div className="page-container">
      <BreadCrumbs startPage="Home" country="" city="" pageIndex="0" />
            <h1 className="page-title">Integrale Eindopdracht @Frontend</h1>    
   
    <section className="home-gallery-section">
        <h1>Design's</h1>
        <ReactTooltip effect="solid" class="tooltip-widget"/>
        <div className="gallery-container">
                <div className="gallery-item">
                    <img className="gallery-image" src={Mockup1} />
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="gallery-item gallery-middle-item-1">
                <img   className="gallery-image" src={Mockup2} />
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="gallery-item gallery-middle-item-2">
                <img  className="gallery-image" src={Mockup3} />
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="gallery-item">
                <img   className="gallery-image" src={Mockup4} />
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
        </div>
        <div className="gallery-container">
                <div className="gallery-item">
                <img   className="gallery-image" src={Design1} alt="DesignOrMockup"/>
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="gallery-item gallery-middle-item-1">
                <img   className="gallery-image" src={Design2} alt="DesignOrMockup"/>
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="gallery-item gallery-middle-item-2">
                <img  className="gallery-image" src={Design3}  alt="DesignOrMockup"/>
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="gallery-item">
                <img className="gallery-image" src={Design4} alt="DesignOrMockup"/>
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> 
                </div>
        </div>
    </section>

    <section className="home-files-section">
        <h1>Documenten</h1>
      <div className="files-container">
        <article className="file-article">
              <div>
                <img className="file-icon" src={FileTwo} />
              </div>
              <h2 className="file-article-title">Functioneel ontwerp</h2>
              <a  href="#" className="file-article-download-button" download>Download here</a>
        </article>
        <article className="file-article file-middle">
              <div>
                  <img className="file-icon" src={FileOne} />
              </div>
              <h2 className="file-article-title">Verantwoordingsdocument</h2>
              <a  href="#" className="file-article-download-button" download>Download here</a>
        </article>
        <article className="file-article">
              <div>
                  <img className="file-icon" src={FileThree} />
              </div>
              <h2 className="file-article-title">Installatiehandleiding</h2>
              <a  href="#" className="file-article-download-button" download>Download here</a>
        </article>
      </div>
    </section>
    </div>
</div>















  );
}
export default Home;
