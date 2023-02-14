import React from "react";
import PropTypes from 'prop-types';

const Spacer = props => {
  let { rendered = true, height, width,className, ...rest } = {
    ...props
  };

  return rendered ? (
      <div style={{width : width, height : height, display: height ? 'block' : 'inline-block'}} className={className}/>
  ) : null;
};

export default Spacer;

Spacer.propTypes = 
{
  height: PropTypes.string
  , width : PropTypes.string
}
