import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
function Header(props) {
  const { title } = props;
  const onClick = (e) =>{
    console.log("clicked 2");
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} text="add" />
    </header>
  );
}

Header.defaultProps = {
  title: "TODO App :-)",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
