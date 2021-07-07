import React, { Component } from "react";
import InvestmentServices from "../services/InvestmentServices";

export default class PortfolioValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investments: [],
    };
  }
  //need to do a get request from the table and then run the stock names through the fetch then set the return as states

  componentDidMount() {
    InvestmentServices.getInvestments().then((res) => {
      this.setState({ investments: res.data });
    //   console.log(res.data);
    });
  }

  componentDidUpdate() {
    let stockName = this.state.stock;
    let api=
    "https://api.twelvedata.com/time_series?symbol=" +
    stockName +
    ",&interval=1min&outputsize=1&apikey=5549c18320c74e52bec8159d8fb1128e";

    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data+"test");
      });
  }

  render() {
    return (
      <div>
        <h1>WORK IN PROGRESS</h1>
        <div>
          {this.state.investments.map((investment) => (
            <div key={investment.id}>
              <p>{investment.stock} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
