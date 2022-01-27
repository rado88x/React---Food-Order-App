import React, { Fragment } from "react";
import image from "../../assets/pizza.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Pizza Tradizionale</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Delicuous italian pizza..."></img>
      </div>
    </Fragment>
  );
};

export default Header;
