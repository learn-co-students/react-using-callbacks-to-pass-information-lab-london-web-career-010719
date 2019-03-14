import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clickHandler = (e) => {
    e.target.style.backgroundColor = this.props.getSelectedColor()
  } 

  
  render() {
    return (
      <div onClick={this.clickHandler} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}
