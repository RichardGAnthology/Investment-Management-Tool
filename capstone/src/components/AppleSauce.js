// import React, { Component } from "react";
// import InvestmentServices from "../services/InvestmentServices";

// export default class AppleSauce extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       id: this.props.match.params.id,
//       stock: "",
//       number_purchased: "",
//       purchase_date: "",
//       account: "",
//     };

//     this.updateInvestment = this.updateInvestment.bind(this);
//     this.handleStockChange = this.handleStockChange.bind(this);
//     this.handlePurchaseChange = this.handlePurchaseChange.bind(this);
//     this.handleDateChange = this.handleDateChange.bind(this);
//     this.handleAccountChange = this.handleAccountChange.bind(this);
//   }

//   componentDidMount() {
//     InvestmentServices.getInvestmentById(this.state.id).then((res) => {
//       let investment = res.data;
//       this.setState({
//         stock: investment.stock,
//         number_purchased: investment.number_purchased,
//         purchase_date: investment.purchase_date,
//         account: investment.account,
//       });
//     });
//   }

//   updateInvestment(event) {
//     event.preventDefault();
//     let currentInvestment = {
//       stock: this.state.stock,
//       number_purchased: this.state.number_purchased,
//       purchase_date: this.state.purchase_date,
//       account: this.state.account,
//     };
//     InvestmentServices.postInvestment(currentInvestment);
//     console.log(currentInvestment);
//   }

//   handleStockChange(event) {
//     this.setState({ stock: event.target.value });
//   }

//   handlePurchaseChange(event) {
//     this.setState({ number_purchased: event.target.value });
//   }

//   handleDateChange(event) {
//     this.setState({ purchase_date: event.target.value });
//   }

//   handleAccountChange(event) {
//     this.setState({ account: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             id="stock"
//             name="stock"
//             value={this.state.stock}
//             placeholder="Stock to add"
//             onChange={this.handleStockChange}
//           ></input>
//           <input
//             type="number"
//             id="number_purchased"
//             name="number_purchased"
//             value={this.state.number_purchased}
//             placeholder="amount"
//             onChange={this.handlePurchaseChange}
//           ></input>
//           <input
//             type="date"
//             id="purchase_date"
//             name="purchase_date"
//             value={this.state.purchase_date}
//             placeholder="date purchased"
//             onChange={this.handleDateChange}
//           ></input>
//           <input
//             type="text"
//             id="account"
//             name="account"
//             value={this.state.account}
//             placeholder="Account"
//             onChange={this.handleAccountChange}
//           ></input>
//         </form>
//         <p>Edit Investments</p>
//         <button onClick={this.updateInvestment}>Add to Investments</button>
//       </div>
//     );
//   }
// }
