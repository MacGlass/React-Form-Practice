import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box'
import uuid from 'uuid/v4'
import NewBoxForm from './NewBoxForm';


class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
    this.addBox = this.addBox.bind(this)
    this.removeBox = this.removeBox.bind(this)
  }

  addBox(box) {
    let newBox = { ...box, id: uuid() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  removeBox(id) {
    this.setState(state => ({
      boxes: state.boxes.filter(box => box.id !== id)
    }));
  }

  render() {
    return (

      <div>

        <NewBoxForm addBox={this.addBox} />

        {this.state.boxes.map(box => (

          <Box width={box.width} height={box.height} backgroundColor={box.backgroundColor} key={box.id} id={box.id} removeBox={this.removeBox}/>

        ))}

      </div>

    )
  }
}

export default BoxList;
