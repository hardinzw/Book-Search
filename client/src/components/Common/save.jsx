import React from "react";

const Save = props => {
    let classes= "btn save-btn heading-subtitle ml-2"
    if (!props.saved) classes = "btn save-btn heading-subtitle ml-2"
  return (
    
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Save;