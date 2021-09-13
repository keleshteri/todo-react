import React from 'react'
import PropTypes from "prop-types";

const Button = (props) => {
    const {color,text,textColor, onClick} = props;
    return (
        <button 
        onClick={onClick}
        style={{backgroundColor:color,color:textColor}} 
        className="btn"
        >
         {text}
        </button>
        );
}

Button.defaultProps = {
    color:'blue',
    text:"add",
    textColor:"White",
    onClick: () =>{console.log("clicked inside");}
  };

Button.prototype = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  };
  
  

export default Button
