import React, { Component } from "react";
import '/home/hawk/Documents/Projects/React Portfolio Website/portfolio/src/App.css';

export default class Project extends Component {
  render() {
    return (
      <div className="box1">
          <h3>PROJECTS</h3>
          <img src="https://img.icons8.com/dusk/128/000000/p.png" className="p"/>
              <p className="titles">Rubber Ducky</p>
              <p className="content">This is project based on Cyber Security which steals<br></br>
              all the keypressed and stored password from the system.</p><br></br>
              <p className="titles">Portfolio Website</p>
              <p className="content">This project contains the portfolio website of the front end <br></br>
              developer which is made using HTML, CSS, Javascript.</p>
      </div>
      
    );
  }
}
