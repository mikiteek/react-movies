import React, {Component} from "react";
import debounce from "lodash.debounce";
import styles from "./SearchForm.module.scss";

const searchInputStyles = [styles.searchInput, "js-search-input"].join(" ");

class SearchForm extends Component {
  componentDidMount() {
    const searchInputRef = document.querySelector(".js-search-input");
    searchInputRef.addEventListener("input", debounce(this._debouncedSearchQuery, 500));
  }

  _debouncedSearchQuery(event) {
      console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <form action="" className={""}>
          <input className={searchInputStyles} id="search" type="text" placeholder="Search movies"/>
          <label className={styles.errorLabel} htmlFor="search"></label>
        </form>
      </div>
    );
  }
}

export default SearchForm;