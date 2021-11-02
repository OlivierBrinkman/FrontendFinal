import React, { Component } from 'react';
import "../styles/ListItem.css";
import { v4 as uuidv4 } from 'uuid';
class ListItem extends React.Component {
  
  onClick = (event) => {
    this.props.parentCallback(this.props.title);
    event.preventDefault();
  }

  render() {
    return (
      <div onClick={this.onClick} className="list-item">
        <li key={uuidv4()}>
          <span name="title" className="list-item-title">{this.props.title}</span> 
        </li>
      </div>
    );
  }
}
export default ListItem;