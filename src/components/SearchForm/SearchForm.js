import React, {Component} from "react";
import styles from "./SearchForm.module.scss";

const searchInputStyles = [styles.searchInput, "js-search-input"].join(" ");

class SearchForm extends Component {
  componentDidMount() {
    const searchInputRef = document.querySelector(".js-search-input");

    searchInputRef.addEventListener("input", () => {
      console.log("input is working");
    });
  }

  _debouncedSearchQuery() {

  }

  render() {
    return (
      <div>
        <form action="" className={""}>
          <input className={searchInputStyles} id="search" type="text" placeholder="Search movies"/>
          <label className={""} htmlFor="search"></label>
        </form>
      </div>
    );
  }
}

export default SearchForm;