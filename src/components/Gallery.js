import React from "react";
import "../styles/components/Gallery.css";
import GalleryItem from "../components/GalleryItem";
import Design2 from "../assets/designs/design_2.png";
import Design3 from "../assets/designs/design_3.png";
import Design4 from "../assets/designs/design_4.png";
import Design5 from "../assets/designs/design_5.png";
import Inspiration1 from "../assets/inspiration/inspiration_1.jpg";
import Inspiration2 from "../assets/inspiration/inspiration_2.jpg";
import Inspiration3 from "../assets/inspiration/inspiration_3.jpg";
import Inspiration4 from "../assets/inspiration/inspiration_4.jpg";
import Inspiration5 from "../assets/inspiration/inspiration_5.jpg";
import Inspiration6 from "../assets/inspiration/inspiration_6.jpg";
import Mockup1 from "../assets/wireframes/mockup_1.jpg";
import Mockup2 from "../assets/wireframes/mockup_2.jpg";
import Mockup3 from "../assets/wireframes/mockup_3.jpg";
import Mockup4 from "../assets/wireframes/mockup_4.jpg";
class Gallery extends React.Component {
  render() {
    return (
      <div data-testid="gallery-container" className="gallery-container">
        <section className="gallery-section">
          <h3>Inspirations</h3>
          <div className="gallery-row">
            <GalleryItem
              imagePath={Inspiration1}
              title="Inspiration 1"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Inspiration2}
              title="Inspiration 2"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Inspiration3}
              title="Inspiration 3"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
          </div>
          <div className="gallery-row">
            <GalleryItem
              imagePath={Inspiration4}
              title="Inspiration 4"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Inspiration5}
              title="Inspiration 5"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Inspiration6}
              title="Inspiration 6"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
          </div>
        </section>

        <section className="gallery-section">
          <h3>Wireframes</h3>
          <div className="gallery-row">
            <GalleryItem
              imagePath={Mockup1}
              title="Wireframe 1"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Mockup2}
              title="Wireframe 2"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Mockup3}
              title="Wireframe 3"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Mockup4}
              title="Wireframe 4"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
          </div>
        </section>

        <section className="gallery-section">
          <h3>Designs</h3>
          <div className="gallery-row">
            <GalleryItem
              imagePath={Design2}
              title="Design 1"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Design3}
              title="Design 2"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Design4}
              title="Design 3"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
            <GalleryItem
              imagePath={Design5}
              title="Design 4"
              subTitle="Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus lobortis, ac aliquam elit"
            />
          </div>
        </section>
      </div>
    );
  }
}
export default Gallery;
