import { Link } from "react-router-dom";
import React from "react";
import { Button } from "@material-ui/core";

export default function Nav() {
  return (
    <div id="navContainer">
      <div id="navBar">
        <Button id="navButtons" variant="contained">
          <Link to="/home">
            <li>Home</li>
          </Link>
        </Button>
        <Button id="navButtons" variant="contained">
          <Link to="/listInvestments">
            <li>Your Stocks</li>
          </Link>
        </Button>
        <Button id="navButtons" variant="contained">
          <Link to="/addstock">
            <li>Add investments</li>
          </Link>
        </Button>

        {/* <Button id="navButtons" variant="contained">
          <Link to="/PortfolioValue">
            <li>Portfolio Value</li>
          </Link>
        </Button> */}
      </div>
    </div>
  );
}
