import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, backgroundColor: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addBox(this.state);
    this.setState({ width: 0, height: 0, backgroundColor: "" })
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="width">Width:</label>
        <input id="width" name="width"
          value={this.state.width}
          onChange={this.handleChange} />

        <label htmlFor="height">Height:</label>
        <input id="height" name="height"
          value={this.state.height}
          onChange={this.handleChange} />

        <label htmlFor="backgroundColor">backgroundColor:</label>
        <input id="backgroundColor" name="backgroundColor"
          value={this.state.backgroundColor}
          onChange={this.handleChange} />

        <button>Add a Box</button>

      </form>
    );
  }
}

export default NewBoxForm;
