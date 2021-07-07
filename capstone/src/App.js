import "./App.css";
import ListInvestments from "./components/listInvestments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import addstock from "./components/addstock";
import UpdateInvestment from "./components/updateInvestment";
import AboutMe from "./components/aboutMe";
import PortfolioValue from "./components/PortfolioValue";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/listInvestments" component={ListInvestments} />
          <Route path="/addstock" component={addstock} />

          {/* <Route
            path="updateInvestmentsComp/:id"
            component={updateInvestmentsComp}
          /> */}
          {/* <Route path="/AppleSauce/:id" component={AppleSauce} /> */}
          <Route path="/updateInvestment/:id" component={UpdateInvestment} />
          <Route path="/PortfolioValue" component={PortfolioValue} />
          <Route path="/aboutMe" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
