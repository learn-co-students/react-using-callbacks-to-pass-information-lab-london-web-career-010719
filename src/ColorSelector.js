import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {

      return <div key={idx} onClick={this.handleClick} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )


  handleClick = (event) => (this.props.changeColor(event.target.style.backgroundColor))


  render() {

    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
