import React from "react";
import "../styles/components/Documents.css";
class Documents extends React.Component {

  render() {
    return (
      <section className="documents-section">
        <h3>Documents</h3>
        <div data-testid="documents-row" className="documents-row">
          <article className="document-item">
            <h4>Functioneel Ontwerp</h4>
            <span>
              Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus
              lobortis, In malesuada tortor at risus lobortis, ac aliquam elit
            </span>
            <button className="default-button" type="submit">
              Download
            </button>
          </article>

          <article className="document-item">
            <h4>Functioneel Ontwerp</h4>
            <span>
              Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus
              lobortis, In malesuada tortor at risus lobortis, ac aliquam elit
            </span>
            <button className="default-button" type="submit">
              Download
            </button>
          </article>
         
          <article className="document-item">
            <h4>Functioneel Ontwerp</h4>
            <span>
              Lorem ipsum dolor sit amet, conelit. In malesuada tortor at risus
              lobortis, In malesuada tortor at risus lobortis, ac aliquam elit
            </span>
            <button className="default-button" type="submit">
              Download
            </button>
          </article>
        </div>
      </section>
    );
  }
}
export default Documents;
