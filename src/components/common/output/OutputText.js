import React from "react";
import PropTypes from 'prop-types'

const OutputText = React.forwardRef((inProps, ref) => {
  let { value,rendered=true, ...props } = { ...inProps };
  //   if (props.row) {
  //     value = props.row[value];
  //   }
  return rendered ?
   <span ref={ref} {...props}>{value}</span>
   : null;
});

export default OutputText;

OutputText.propTypes = {
  value : PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  , rendered : PropTypes.bool
}