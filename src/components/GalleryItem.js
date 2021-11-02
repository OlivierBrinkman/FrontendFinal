import React from "react";
import "../styles/components/Gallery.css";
class GalleryItem extends React.Component {
  render() {
    return (
      <div className="gallery-item">
        <img src={this.props.imagePath} alt="Inspiration Example" />
        <section className="gallery-item-text">
          <h4>{this.props.title}</h4>
          <span>{this.props.subTitle}</span>
        </section>
      </div>
    );
  }
}
export default GalleryItem;
