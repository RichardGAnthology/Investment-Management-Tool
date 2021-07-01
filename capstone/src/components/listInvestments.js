import React, { Component } from "react";
import InvestmentServices from "../services/InvestmentServices";
// import EditIcon from '@material-ui/core'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Pencil from "../images/RG-Pencil.png";

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

  SearchNews(stock) {
    console.log(stock);
    // History.push("https://finance.yahoo.com/quote/AMZN?p=AMZN&.tsrc=fin-srch");
    // location.assign(
    //   "https://finance.yahoo.com/quote/AMZN?p=AMZN&.tsrc=fin-srch"
    // );
    window.location.assign(
      "https://news.google.com/search?q="+stock+"&hl=en-US&gl=US&ceid=US%3Aen"
    );
    // <a href="google.com"></a>;
  }

  deleteInvestment(id) {
    InvestmentServices.deleteInvestment(id).then(() => {
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
      <div id="listContainer">
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
                <th>Shares</th>
                <th>Date Purchased</th>
                <th>Account</th>
                {/* <th>Make Changes</th>
                <th>Research</th> */}
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
                        endIcon={<EditIcon />}
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
                        endIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>

                      <Button
                        className="Button"
                        onClick={() => this.SearchNews(investment.stock)}
                        id="searchButton"
                        variant="contained"
                        color="secondary"
                        endIcon={<SearchIcon />}
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
          <div id="suitCircleContainer">
            <div id="suitCircle">
              {" "}
              <img id="rocketSuit" src={Pencil} width="250px"></img>
            </div>
          </div>
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

export default listInvestments;
