import React, { Component } from "react";
import '/home/hawk/Documents/Projects/React Portfolio Website/portfolio/src/App.css';


export default class Skills extends Component {
  render() {
    return (
      <div className="box1">
          <h3>SKILLS</h3>
          <img src="https://img.icons8.com/dusk/128/000000/s.png" className="p"/>
              <p className="titles">Languages</p>
              <p className="content">C, C++, Java</p><br></br>
              <p className="titles">Database</p>
              <p className="content">MongoDB</p><br></br>
              <p className="titles">Web Technology</p>
              <p className="content">HTML, CSS, Javascript, AJAX, 
              jQUERY, Node js, Mongoose, React js</p><br></br>
              <p className="titles">Softwares</p>
              <p className="content">VS Code, Eclipse, Sublime</p>
      </div>
    );
  }
}
