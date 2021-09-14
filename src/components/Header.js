import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {useLocation} from 'react-router-dom';

function Header(props) {
  const { title, onAdd, showAddForm } = props;
  const location =useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' &&(
        <Button onClick={onAdd} text={showAddForm ? "close" : "add"} color={showAddForm ? "blue" : "green"}/>
      )}
      
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
