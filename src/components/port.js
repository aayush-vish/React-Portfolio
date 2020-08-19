import React, { Component } from "react";
import Header from "./header";
import Skills from "./skills";
import Sidebar from "./sidebar";
import Education from "./education";
import Contact from "./contact";
import Project from "./projects";

export default class MyComp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Skills/>
        <Education/>
        <Project/>
        <Contact/>
        {/* <Sidebar/> */}
      </div>
    );
  }
}
