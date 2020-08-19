import React, { Component } from "react";
import '/home/hawk/Documents/Projects/React Portfolio Website/portfolio/src/App.css';


export default class Education extends Component {
  render() {
    return (
      <div className="box1">
          <h3>EDUCATION</h3>
          <img src="https://img.icons8.com/dusk/128/000000/e.png" className="p"/>
              <p className="titles">2018-2022</p>
              <p className="content">Graphic Era University,Dehradun,India<br></br>
              B.Tech,Computer Science & Engineering</p>
              <p className="titles">2017-2018</p>
              <p className="content">Krishna Public Collegiate,Kashipur,India<br></br>
              Intermediate(90%)</p>
              <p className="titles">2015-2016</p>
              <p className="content">Krishna Public Collegiate,Kashipur,India<br></br>
              High School(9.6 CGPA)</p>
      </div>
    );
  }
}
