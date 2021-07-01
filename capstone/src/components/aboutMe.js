import React, { Component } from "react";
import { Button } from "@material-ui/core";
import RocketSuit from "../images/RG-Suit.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default class aboutMe extends Component {
  render() {
    return (
      <div>
        {" "}
        <p>Follow my adventures on: </p>
        <Button id="aboutMeLinkButton" endIcon={<GitHubIcon />}>
          <a href="https://github.com/RichardGAnthology"> Git Hub</a>{" "}
        </Button>
        <p>&#38;</p>
        <Button id="aboutMeLinkButton" endIcon={<LinkedInIcon />}>
          <a href="https://linkedin.com/in/richard-dgonzalez">
            {" "}
            Linked
            {/* <LinkedInIcon /> */}
          </a>
        </Button>
        <div id="suitCircleContainer">
          <div id="suitCircle">
            {" "}
            <img id="rocketSuit" src={RocketSuit} width="200px"></img>
          </div>
        </div>
      </div>
    );
  }
}
