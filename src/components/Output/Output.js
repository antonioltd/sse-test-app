import React from "react";

const output = (props) => {
  const divStyle = {
    margin: "auto",
    marginTop: "20px",
    width: "50%",
    border: "3px solid green",
    padding: "10px",
  };
  return (
    <div onClick={props.click} style={divStyle}>
      <p>
        Hi! my name is {props.name} and I'm {props.age} years old.
      </p>
    </div>
  );
};

export default output;
