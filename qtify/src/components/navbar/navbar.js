import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import Logo from "../logo/logo";
import Search from "../search/search";
import styles from "./navbar.module.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <BrowserRouter>
      <Link to="/">
        <Logo />
      </Link>
      </BrowserRouter>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
