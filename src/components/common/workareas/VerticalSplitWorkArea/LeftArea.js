import React from "react";
import PropTypes from 'prop-types';
import Col from "../../grid/Col";

const LeftArea = props => {
  let {
    header,
    ...rest
  } = {...props}

  let buttonBar = null,
  otherChilds = []
  React.Children.map(props.children, child => {
    if(child.props.type == 'ButtonBar')
      buttonBar = child
    else
      otherChilds.push(child)
  })

  return (
    <Col {...rest}>
      {header ? (
        <header className="w3-border-blue w3-border-bottom w3-padding w3-large">
          <b>{header}</b>
          {buttonBar}
        </header>
      ) : null}
      {otherChilds}
      </Col>
  );
};

LeftArea.defaultProps = {type:'LeftArea'}

export default LeftArea;

LeftArea.propTypes = 
{
  header : PropTypes.string  
}
