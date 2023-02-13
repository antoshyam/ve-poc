import React from "react";
import PropTypes from "prop-types";
import Spacer from "../layouts/Spacer";

const Icon = (props) => {
  let {
    className="",
    faClass,
    faClasses = [],
    style = {},
    onClick,
    rendered = true,
    disabled = false,
    overridePointer = false,
    ...rest
  } = { ...props };
  let appliedClassName = `${disabled ? "w3-opacity-max" : ""} ${className}
    ${faClasses && faClasses.length > 0 ? ' fa-stack' : ''}`;

  let pointerStyle = {}
  if(!overridePointer){
    pointerStyle = disabled || !onClick ? { cursor: "default" } : { cursor: "pointer" };
  }

  return rendered ? (
    <span
      key={faClass}
      className={appliedClassName}
      style={{ ...pointerStyle, ...style }}
      onClick={disabled ? null : onClick}
      {...rest}
    >
      {
        faClasses && faClasses.length > 0 ?
        faClasses.map(faClass => {
          return <i className={faClass}></i>
        })
        : <i className={faClass}></i>
      } 

      <Spacer width=".3em" rendered={props.children != null} />
      {props.children}
    </span>
  ) : null;
};

export default Icon;

Icon.propTypes = {
  className: PropTypes.string,
  faClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  faClasses:  PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onClick: PropTypes.func,
  rendered: PropTypes.bool,
  disabled: PropTypes.bool,
};
