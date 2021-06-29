import React, { Component } from "react";
import InvestmentServices from "../services/InvestmentServices";
// import EditIcon from '@material-ui/core'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
// import { createMuiTheme } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

class listInvestments extends Component {
  // const classes = useStyles();

  constructor(props) {
    super(props);

    this.state = {
      investments: [],
    };
    // this.addStock = this.addStock.bind(this);
    this.updateInvestment = this.updateInvestment.bind(this);
    this.deleteInvestment = this.deleteInvestment.bind(this);
    this.SearchNews = this.SearchNews.bind(this);
    this.plusOne = this.plusOne.bind(this);
  }

  SearchNews() {
    console.log("news");
  }

  deleteInvestment(id) {
    InvestmentServices.deleteInvestment(id).then((res) => {
      this.setState({
        investments: this.state.investments.filter(
          (investment) => investment.id !== id
        ),
      });
    });
  }

  updateInvestment(id) {
    this.props.history.push(`/updateInvestment/${id}`);
  }

  componentDidMount() {
    InvestmentServices.getInvestments().then((res) => {
      this.setState({ investments: res.data });
    });
  }

  addStock() {
    this.props.history.push("/addstock");
  }

  plusOne(datee) {
    console.log(datee);
    if (datee) {
      return datee.slice(0, 8) + (parseInt(datee.split("-")[2]) + 1);
    } else {
      return "No Date";
    }
  }

  render() {
    return (
      <div>
        <div id="titleContainer">
          <h1 id="tableTitle">Your Investment Portfolio</h1>
        </div>
        <div id="tableContainer">
          {/* <button id="addStock" onClick={this.addStock}>
          {" "}
          Add Stock
        </button> */}
          <table id="table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Quantity Owned</th>
                <th>Date Purchased</th>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              {this.state.investments.map((investment) => (
                <tr key={investment.id}>
                  <td>{investment.stock}</td>
                  <td>{investment.number_purchased}</td>
                  <td>{this.plusOne(investment.purchase_date)}</td>
                  <td>{investment.account}</td>
                  <td>
                    <div id="buttons">
                      {/* {" "}
                    <button onClick={() => this.updateInvestment(investment.id)}>
                    Update
                  </button> */}
                      <Button
                        className="Button"
                        onClick={() => this.updateInvestment(investment.id)}
                        id="editButton"
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                      >
                        Update
                      </Button>
                      {/* <EditIcon fontSize="small" color="primary" /> */}
                      <Button
                        className="Button"
                        onClick={() => this.deleteInvestment(investment.id)}
                        id="deleteButton"
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                      <Button
                        className="Button"
                        onClick={() => this.SearchNews(investment.stock)}
                        id="searchButton"
                        variant="contained"
                        color="secondary"
                        startIcon={<SearchIcon />}
                      >
                        Search News
                      </Button>
                    </div>
                    {/* <button
                    onClick={() => this.deleteInvestment(investment.id)}
                    id="deleteButton"
                  >
                    Delete <DeleteIcon fontSize="small" color="primary" />
                  </button>{" "} */}
                    {/* <button onClick={() => this.SearchNews(investment.stock)}>
                    Search News
                  </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id="footerContainer">
          <footer>About me</footer>
        </div>
      </div>
    );
  }
}

export default listInvestments;
