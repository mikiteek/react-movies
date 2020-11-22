import React, {Component} from "react";
import styles from "./Header.module.scss"

class Header extends Component {
  render() {
    const {wrapperStyles} = this.props;
    return (
      <div className={wrapperStyles}>
      </div>
    );
  }
}

export default Header;