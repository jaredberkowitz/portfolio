import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import { Button } from "react-bootstrap"


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
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
                <div className="card ">
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
                    className="card-body font-trebuchet d-flex text-justify ml-3 mr-3 "
                    style={{
                      height: "auto",
                      fontSize: "200%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />

                        <div className="col-md-5 mt-5 ml-5">
                        <div className="profileStyling">
                            <span style={{ cursor: "auto",  height:"auto"}}>
                            <img
                                height="250px"
                                src={profilepic}
                                alt="Avatar placeholder"
                            />

                            </span>
                        </div>
                        </div>    
    
                        <ul className="mt-5 col-md-6 col-sm-5 col-xs-4 ">
                                <li className="d-flex align-items-center"><i class="fas fa-gift display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i><span className={"text-success"}><h3>Birthday:   </h3></span><span><h3 className="ml-3"> 06.03.1996</h3></span></li>
                                <li className="d-flex align-items-center"><i class="fas fa-map-marker-alt display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i><span className={"text-success"}><h3>Location:   </h3></span><span><h3 className="ml-3"> Long Island, New York</h3></span></li>
                                <li className="d-flex align-items-center"><i class="fas fa-book-open display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i> <span className={"text-success"}><h3>Study:   </h3></span><span><h3 className="ml-3 text-align"> Computer Programming and Information Systems</h3></span></li>
                                <li className="d-flex align-items-center"><i class="fas fa-envelope display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i><span className={"text-success"}><h3>Degree:   </h3></span><span><h3 className="ml-3"> Bachelor's</h3></span></li>
                                <li className="d-flex align-items-center"><i class="fas fa-phone-alt display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i> <span className={"text-success"}><h3>Cell Phone:   </h3></span><span><h3 className="ml-3">631-827-5359</h3></span></li>
                                <li className="d-flex align-items-center text-truncate"><i class="fas fa-gift display-4 text-success mr-3"style={{ fontSize: '24px' }}  ></i> <span className={"text-success"}><h3>Email:   </h3></span><span><h3 className="ml-3"> jaredberkowitz2@gmail.com</h3></span></li>
                                
                                <li className="d-flex align-items-center mt-5" >
                                    <div className=" "><Button variant="success" size="xl" active className="btn draw-border col-md-12 col-sm-12 text-responsive" style={{fontSize: '17px'}}>Download CV</Button></div>
                                    <div className="ml-5"><Button variant="success" size="xl" active className="btn draw-border col-md-12 col-sm-12 text-responsive" style={{fontSize: '17px'}}>Contact</Button></div>
                                </li>
                        </ul>  

                   
                        <br />
                        <br />
                        
                    {about}
                  </div>
                </div>
              </div>
            </div>
      </section>
    );
  }
}

export default Me;
