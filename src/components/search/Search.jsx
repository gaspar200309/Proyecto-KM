import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit, placeholder }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        value={searchValue}
        onChange={onSearchChange}
        type="text"
        placeholder={placeholder || "Buscar..."}
        className={styles.searchInput}
      />
      <button onClick={onSearchSubmit} className={styles.searchButton}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;