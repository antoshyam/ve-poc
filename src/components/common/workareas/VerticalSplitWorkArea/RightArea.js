import React from "react";
import PropTypes from 'prop-types';
import Col from "../../grid/Col";

const RightArea = props => {
  
  let 
  {
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

RightArea.defaultProps = {type: 'RightArea'}

export default RightArea;

RightArea.propTypes = 
{
  header : PropTypes.string  
}

