import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeBox(this.props.id);
  }

  render() {

    let divStyle = {
      id: this.props.id,
      height: this.props.height + 'px',
      width: this.props.width + 'px',
      backgroundColor: this.props.backgroundColor
    }
    return (

      <div>

        <div style={divStyle}>

          <button onClick={this.handleDelete}>
            X
          </button>

        </div>

      </div>

    )
  }

}

export default Box;
