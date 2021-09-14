import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Header(props) {
  const { title, onAdd, showAddForm } = props;

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} text={showAddForm ? "close" : "add"} color={showAddForm ? "blue" : "green"}/>
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
