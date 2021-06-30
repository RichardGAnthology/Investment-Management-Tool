import React, { Component } from "react";
import InvestmentServices from "../services/InvestmentServices";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import RocketCloud from "../images/Cloud-RG.png";

export default class updateInvestment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      stock: "",
      number_purchased: "",
      purchase_date: "",
      account: "",
    };

    this.updateInvestment = this.updateInvestment.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.handlePurchaseChange = this.handlePurchaseChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAccountChange = this.handleAccountChange.bind(this);
  }

  componentDidMount() {
    InvestmentServices.getInvestmentById(this.state.id).then((res) => {
      let investment = res.data;
      this.setState({
        stock: investment.stock,
        number_purchased: investment.number_purchased,
        purchase_date: investment.purchase_date,
        account: investment.account,
      });
    });
  }

  updateInvestment(event) {
    event.preventDefault();
    let currentInvestment = {
      stock: this.state.stock,
      number_purchased: this.state.number_purchased,
      purchase_date: this.state.purchase_date,
      account: this.state.account,
    };
    console.log(currentInvestment);
    InvestmentServices.updateInvestment(currentInvestment, this.state.id);
  }

  handleStockChange(event) {
    this.setState({ stock: event.target.value });
  }

  handlePurchaseChange(event) {
    this.setState({ number_purchased: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ purchase_date: event.target.value });
  }

  handleAccountChange(event) {
    this.setState({ account: event.target.value });
  }

  render() {
    return (
      <div>
        <div id="titleContainer">
          <h1 id="tableTitle">Update your investments here</h1>
        </div>

        <form id="updateForm">
          <TextField
            type="text"
            color="secondary"
            variant="filled"
            label="Stock to add"
            value={this.state.stock}
            onChange={this.handleStockChange}
          />
          <TextField
            type="number"
            variant="filled"
            label="Amount"
            value={this.state.number_purchased}
            onChange={this.handlePurchaseChange}
          />

          <TextField
            type="date"
            variant="filled"
            label="purchase date"
            // display = "none"
            value={this.state.purchase_date}
            onChange={this.handleDateChange}
          />
          <TextField
            type="text"
            variant="filled"
            label="Account"
            value={this.state.account}
            onChange={this.handleAccountChange}
          />
        </form>
        <div id="rocketCloudContainer">
          {" "}
          <img id="rocketCloud" src={RocketCloud} width="250"></img>
        </div>

        {/* <p>Edit Investments</p> */}
        <Button
          onClick={this.updateInvestment}
          className="Button"
          id="updateButton"
          variant="contained"
          // color="secondary"
          endIcon={<BorderColorIcon />}
        >
          Update Investment
        </Button>
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
