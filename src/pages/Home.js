import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Gallery from "../components/Gallery";
import Documents from "../components/Documents";
import "../styles/pages/Home.css";

function Home() {
  return (
    <div className="page-jumbotron">
      <div className="page-container">
        <section className="page-header">
          <BreadCrumbs startPage="Home" country="" city="" pageIndex="0" />
          <h1 className="page-title">Integrale Eindopdracht - @Frontend</h1>
        </section>
        <section className="home-intro-section">
          <article className="home-article-container home-article-text">
            <h3>Welcome</h3>
            <p>
              Lorem ipsum dolor sit amet, conelit. In malesuada tortor at
              risusLorem ipsum dolor sit ame Fusce fringilla sed ligula sit amet
              faucibus. Fusce quis elementum tortor.m dolor sit amet Lorem ipsum dolor sit amet, conelit. In malesuada tortor at
              risusLorem ipsum dolor sit ame Fusce fringilla sed ligula sit amet
              faucibus. Fusce q lobortis, ac aliquam elit
              </p>
              <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, conelit. In malesuada tortor at
              risusLorem ipsum dolor sit ame Fusce fringilla sed ligula sit amet
              faucibus. Fusce qm dolor sit amet Lorem ipsum dolor sit amet, conelit. In malesuada tortor at
              risusLorem ipsum dolor sit ame Fusce fringilla sed ligula sit amet
              faucibus. Fusce q
            </p>
          </article>
        </section>
        <section className="home-content-section">
          <Gallery />
        </section>

        <section className="home-documents-section">
          <Documents />
        </section>
      </div>
    </div>
  );
}

export default Home;
