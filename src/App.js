import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";

import headerStyles from "./components/Header/Header.module.scss";

class App extends Component {


  render() {
    return (
      <Switch>
        <Route path={"/"} exact component={Header}/>
        <Route path={"/my-library"} exact component={Header}/>
      </Switch>
    );
  }
}

export default App;
