import React, {useState} from "react"
import Session from "../components/Session"
import FileOne from '../assets/home-file-1.png';
import FileTwo from '../assets/home-file-2.png';
import FileThree from '../assets/home-file-3.png';
import Dummy from '../assets/dummy.jpg';
import ReactTooltip from 'react-tooltip';

import Design1 from "../assets/design_home.png";
import Design2 from "../assets/design_profile.png";
import Design3 from "../assets/design_search-2.png";
import Design4 from "../assets/design_search-3.png";

import Mockup1 from "../assets/mockup_home.jpg"
import Mockup2 from "../assets/mockup_profile.jpg";
import Mockup3 from "../assets/mockup_citydetails.jpg";
import Mockup4 from "../assets/mockup_country-details.jpg";

import Ontwerp from "../assets/Functioneel-Ontwerp-FrontEnd.pdf";


function Home() {
    var htmlOpen = " </";
    var htmlClose = ">";
    var reactOpen = "{";
    var reactClose = "}";

    return (
      <div className="home-container">
        <section className="home-header-section">
          <div className="home-header-text">
              <h1>Final integral<span className="special-header-bold"><span id="special-char-left" className="special-header-char">{htmlOpen}</span>Frontend<span  id="special-char-right" className="special-header-char">{htmlClose}</span> </span>assignment</h1>
              <h4>Build with<span className="special-header-bold"><span id="special-char-left" className="special-header-char">{reactOpen}</span>React.JS<span id="special-char-right" className="special-header-char">{reactClose}</span></span>by <span className="special-header-bold">Olivier Brinkman</span></h4>
          </div>
      </section>
      <section className="home-intro-section">
        <h1>Introductie</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat nulla id nibh elementum egestas quis vitae tortor. Phasellus eu egestas ligula, ac convallis orci. Cras erat tortor, lobortis ultricies erat rhoncus, euismod cursus lacus. Curabitur volutpat risus sed sapien porta, eget efficitur arcu fermentum. Nam gravida, nunc a dapibus aliquet, lectus nibh vestibulum sapien, at venenatis lorem sem ac magna. Aliquam laoreet odio et maximus lobortis. Cras id aliquam leo. Fusce ac hendrerit nunc. Pellentesque in purus efficitur, tincidunt dui nec, posuere eros. Maecenas a cursus leo. Suspendisse leo lacus, porttitor non dolor ac, elementum mattis ligula. In quis dolor ante.</p>
      </section>
   
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
              <a  href={Ontwerp} className="file-article-download-button" download>Download here</a>
        </article>
        <article className="file-article file-middle">
              <div>
                  <img className="file-icon" src={FileOne} />
              </div>
              <h2 className="file-article-title">Verantwoordingsdocument</h2>
              <a  href={Ontwerp} className="file-article-download-button" download>Download here</a>
        </article>
        <article className="file-article">
              <div>
                  <img className="file-icon" src={FileThree} />
              </div>
              <h2 className="file-article-title">Installatiehandleiding</h2>
              <a  href={Ontwerp} className="file-article-download-button" download>Download here</a>
        </article>
      </div>
      </section>
  </div>
  );
}
export default Home;
