import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import { Button } from "react-bootstrap"
import Switch from "react-switch";
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";
import Pdf from '../../src/JaredBerkowitzResume.pdf';



class Me extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    var profilepic = "images/myProfile.jpg";

    return (
        <section id="about">
          <div className="col-md-12">
            <h1 className="mb-5" style={{ color: "black" }}>
              <span>Education</span>
            </h1>
            <div className="row center mx-auto mb-5">
              <div className="col-md-12 col-sm-12 mx-auto mb-5 center">
                  <div className="card meCard">
                    <div className="card-header">
                      <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                      ></span>
                    </div>
                    <div
                      className=" card-body font-trebuchet d-flex text-justify ml-5 mr-5 "
                      style={{
                        height: "auto",
                        fontSize: "1.4rem",
                        lineHeight: "250%",
                      }}
                    >
                      <br />   
      
                      <ul className="mt-5 col-md-12 col-sm-6 col-xs-4 " style={{ maxwidth: "80%", overflowWrap: "break-word"}}>
                                  <li className="d-flex align-items-center"><i class="fas fa-gift display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i><span className={"text-success"}><h3>Birthday:   </h3></span><span><h3 className="ml-3"> 06.03.1996</h3></span></li>
                                  <li className="d-flex align-items-center text-truncate "><i class="fas fa-map-marker-alt display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i><span className={"text-success"}><h3>Location:   </h3></span><span><h3 className="ml-3"> Long Island, New York</h3></span></li>
                                  <li className="d-flex align-items-center"><i class="fas fa-book-open display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i> <span className={"text-success"}><h3>Study:   </h3></span><span><h3 className="ml-3 text-align" style={{overflow: "hidden"}}> Computer Programming and Information Systems</h3></span></li>
                                  <li className="d-flex align-items-center text-truncate"><i class="fas fa-envelope display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i><span className={"text-success"}><h3>Degree:   </h3></span><span><h3 className="ml-3"> Bachelor's</h3></span></li>
                                  <li className="d-flex align-items-center text-truncate"><i class="fas fa-phone-alt display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i> <span className={"text-success"}><h3>Cell Phone:   </h3></span><span><h3 className="ml-3">631-827-5359</h3></span></li>
                                  <li className="d-flex align-items-center text-truncate"><i class="fas fa-gift display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i> <span className={"text-success"}><h3>Email:   </h3></span><span><h3 className="ml-3"> jaredberkowitz2@gmail.com</h3></span></li>
                                  
                                  <li className="d-flex align-items-center mt-5" >
                                      <div className=" "><Button variant="success" href={Pdf} size="xl" active className="btn draw-border col-md-12 col-sm-12 text-responsive" style={{fontSize: '17px'}}>Download CV</Button></div>
                                  </li>
                          </ul>  

                    
                          <br />
                          <br />
                          
                      {about}
                    </div>
                  </div>
                </div>
                </div>
              </div>

        </section>



    );
  }
}

export default Me;
