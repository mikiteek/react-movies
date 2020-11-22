import React, {Component} from "react";
import Header from "./components/Header/Header";

import headerStyles from "./components/Header/Header.module.scss";

class App extends Component {


  render() {
    return (
      <Header wrapperStyles={headerStyles.wrapperHome}/>
    );
  }
}

export default App;
