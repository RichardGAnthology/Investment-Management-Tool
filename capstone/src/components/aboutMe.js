import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class aboutMe extends Component {
  render() {
    return (
      <div>
        <p>
          {" "}
          <p>Follow my adventures on: </p>
          <a href="https://github.com/RichardGAnthology">Git Hub</a>{" "}
          <p>&#38;</p>
          <a href="https://linkedin.com/in/richard-dgonzalez">Linked In</a>
        </p>
      </div>
    );
  }
}
