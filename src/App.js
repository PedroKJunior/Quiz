import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './js/Routes'
import Slider from "./components/sliderColor/Slider"

class App extends Component {

  constructor(){
    super()
    this.state = {
        power: true,
        color: "dark"
    }
  }

  clickSlider() {
      this.setState({
          power : !this.state.power,
          color: this.state.power? "light" : "dark"
      })
  }

  render() {
    return (
      <div className={`container-fluid ${ this.state.color }`}>
        <div className="row">
          <div className="col-12 button-toggle">
            <span>Dark</span>
            <Slider  power={this.state.power} click={this.clickSlider.bind(this)} />
            <span>Light</span>
          </div>
        </div>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}
export default App;
