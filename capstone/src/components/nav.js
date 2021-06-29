import { Link } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div id="navContainer">
      <div id="navBar">
        <Link to="/home">
          <li>Home</li>
        </Link>

        <Link to="/listInvestments">
          <li>Your Stocks</li>
        </Link>

        <Link to="/addstock">
          <li>Add investments</li>
        </Link>
      </div>
    </div>
  );
}
