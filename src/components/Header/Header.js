import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.wrapperHome}>
        <header className={styles.header}>
          <Navigation/>
        </header>
      </div>
    );
  }
}

export default Header;