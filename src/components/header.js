import React, { Component } from "react";
import "/home/hawk/Documents/Projects/React Portfolio Website/portfolio/src/App.css";
import passport from '/home/hawk/Documents/Projects/React Portfolio Website/portfolio/src/me.JPG';

export default class Header extends Component {
  render() {
    return (
      <div className="box" id="header">
          <img src={passport} className="pass"/>
        <h3>Resume</h3>
        <h5>Aayush Vishnoi</h5>
      </div>
    );
  }
}
