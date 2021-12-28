import React, { Component } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Me from "./Me";
import AboutSite from "./AboutSite";

class Home extends Component {
  render() {
    return (
      <div>
        <AboutSite ></AboutSite>

        <Projects
          resumeProjects={this.props.resumeData.projects}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.props.sharedData.skills}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.props.resumeData.experience}
          resumeBasicInfo={this.props.resumeData.basic_info}
        />
        <Me>
          
        </Me>

        
      </div>
    );
  }
}

export default Home;
