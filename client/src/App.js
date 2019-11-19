import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
