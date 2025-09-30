import React from "react";
import classes from "./MainHeader.Module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Demo React App</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
