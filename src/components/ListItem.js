import React from "react";
import "../styles/components/ListItem.css";
class ListItem extends React.Component {
  onClick = (event) => {
    this.props.parentCallback(this.props.title);
    event.preventDefault();
  };

  render() {
    return (
      <div data-testid="list-item" onClick={this.onClick} className="list-item">
          <span data-testid="list-item-title" name="title" className="list-item-title">
            {this.props.title}
          </span>
      </div>
    );
  }
}
export default ListItem;
