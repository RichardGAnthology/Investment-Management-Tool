import "./App.css";
import ListInvestments from "./components/listInvestments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import addstock from "./components/addstock";
// import updateInvestmentsComp from "./components/updateInvestmentsComp";
// import AppleSauce from "./components/AppleSauce";
import UpdateInvestment from "./components/updateInvestment";
import ChangeInvestments from "./components/changeInvestments";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
