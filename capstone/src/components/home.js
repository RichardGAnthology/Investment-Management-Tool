import React, { Component } from "react";
// import Guy from "../images/guy.png";
import Rocket from "../images/RRG-Rocket.png";
import Screenshot from "../images/Screenshot.png";
import { Button } from "@material-ui/core";
// import InfoIcon from "@material-ui/icons/Info";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 id="para1">Welcome one, and welcome all!</h1>
          <h2 id="para2">
            This is a program made specifically to help facilitate your
            investments
          </h2>
          <h3 id="para3">
            readme file clearly documents the purpose of the project as a
            problem statement, and the target end user for this program
          </h3>
        </header>
        <div id="waveCircle">
          {" "}
          <img id="rocket" src={Rocket} width="250px"></img>
        </div>
        <div id="explanation">
          <h3>
            Below you will find a preview of what you can do with this program!
            You will be able to add, update, and delete your investments all the
            while keeping track of your investments in our secure database!
          </h3>
        </div>
        <div id="preview">
          {" "}
          <img id="screenshot" src={Screenshot} height="80%"></img>
          {/* <h3>Preview</h3>{" "} */}
        </div>
        <div id="footerContainer">
          <footer id="footerLinks">
            {/* <p>About Me</p> */}
            <Button
              //what
              // endIcon={<InfoIcon />}
              id="aboutMeButton"
              variant="contained"
              // color="primary"
              href="aboutMe"
            >
              About Me
              
            </Button>{" "}
            {/* <a className="aboutMe" href="aboutMe">
                About Me
              </a> */}
          </footer>
          
        </div>
      </div>
    );
  }
}
