import React, { Component } from "react";
import InvestmentServices from "../services/InvestmentServices";
import { TextField } from "@material-ui/core";
import RocketPC from "../images/RG-PC.png";
import { Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default class addstock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      stock: "",
      number_purchased: "",
      purchase_date: "",
      account: "",
    };

    this.addstock = this.addstock.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.handlePurchaseChange = this.handlePurchaseChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAccountChange = this.handleAccountChange.bind(this);
    this.deleteStock = this.deleteStock.bind(this);
  }

  deleteStock() {
    // let stockToDelete = { id: this.state.id };
    InvestmentServices.deleteInvestment(this.state.id);
  }

  addstock(event) {
    event.preventDefault();
    let currentInvestment = {
      stock: this.state.stock,
      number_purchased: this.state.number_purchased,
      purchase_date: this.state.purchase_date,
      // .slice(0, 8) +
      // (parseInt(this.state.purchase_date.split("-")[2]) + 1),
      account: this.state.account,
    };
    InvestmentServices.postInvestment(currentInvestment);
    console.log(currentInvestment);
  }

  handleStockChange(event) {
    this.setState({ stock: event.target.value });
  }

  handlePurchaseChange(event) {
    this.setState({ number_purchased: event.target.value });
    // console.log(event.target.value);
  }

  handleDateChange(event) {
    this.setState({ purchase_date: event.target.value });
    console.log(event.target.value);
  }

  handleAccountChange(event) {
    this.setState({ account: event.target.value });
  }

  render() {
    return (
      <div id="holder">
        <div id="titleContainer">
          <h1 id="tableTitle">Add your investments here</h1>
        </div>
        <div id="formContainer">
          {/* <TextField
          variant ="filled"
          placeholder="Stock to add"
          label = "text"
          value={this.state.stock}
          onChange={this.handleStockChange}
        /> */}
          <form>
            <TextField
              type="text"
              color="secondary"
              variant="filled"
              label="Stock to add"
              value={this.state.stock}
              onChange={this.handleStockChange}
            />
            {/* <input
            type="text"
            id="stock"
            name="stock"
            value={this.state.stock}
            placeholder="Stock to add"
            onChange={this.handleStockChange}
          ></input> */}
            <TextField
              type="number"
              variant="filled"
              label="Amount"
              value={this.state.number_purchased}
              onChange={this.handlePurchaseChange}
            />
            {/* <input
            type="number"
            id="number_purchased"
            name="number_purchased"
            value={this.state.number_purchased}
            placeholder="amount"
            onChange={this.handlePurchaseChange}
          ></input> */}
            <TextField
              type="date"
              variant="filled"
              label="purchase date"
              // display = "none"
              value={this.state.purchase_date}
              onChange={this.handleDateChange}
            />
            {/* <input
            type="date"
            id="purchase_date"
            name="purchase_date"
            value={this.state.purchase_date}
            placeholder="date purchased"
            onChange={this.handleDateChange}
          ></input> */}
            <TextField
              type="text"
              variant="filled"
              label="Account"
              value={this.state.account}
              onChange={this.handleAccountChange}
            />
            {/* <input
            type="text"
            id="account"
            name="account"
            value={this.state.account}
            placeholder="Account"
            onChange={this.handleAccountChange}
          ></input> */}
          </form>
          {/* <p>Edit Investments</p> */}
          {/* <button onClick={this.addstock}>Add to Investments</button> */}
          <Button
            className="Button"
            id="addButton"
            variant="contained"
            // color="secondary"
            endIcon={<AddCircleIcon />}
            onClick={this.addstock}
          >
            Add stock
          </Button>
          <div>
            <img src={RocketPC} width="250"></img>
          </div>
          {/* <button onClick={this.deleteStock.id}>Delete this Investment</button> */}
        </div>
        <div id="fixedFooterContainer">
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
