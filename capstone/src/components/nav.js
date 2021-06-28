import { Link } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <div>
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
  );
}
