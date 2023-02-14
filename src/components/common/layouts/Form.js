import React from "react";
import PropTypes from 'prop-types';
import Col from "../grid/Col";

const Form = props => {
  
  let {
    className,
    style,
    onSubmit,
    gridCount,
    columns,
    labelAlignment = 'top',
    justifyLabel = false,
    fieldGridCount,
    rendered = true,
    ...rest
  } = {
    ...props
  };


  let elements = [],
    Footer = null,
    Header=null;

  React.Children.forEach(props.children, child => {
    if(child == null) ;
    else if (child.props.type == "Header") Header = child;
    else if (child.props.type == "Footer") Footer = child;
    else elements.push(child)
  });

  
  let onSubmitBind = onSubmit
    ? event => {
        if(!rest.action)
          event.preventDefault();
        return onSubmit(event);
      }
    : null;
  return rendered ? (
    <Col {...gridCount} className={className}>
      <form
        style={style}
        onSubmit={onSubmitBind}
        {...rest}
      >
        {Header ? React.cloneElement(Header) : null}
        {elements && elements.length > 0
          ? elements.map((element,index) => {
            let colSpan = element.props.colSpan
            let elemType = element.props.type
              return (
                <Col key={index}
                  l={columns
                      ? (12 / columns) * (colSpan ? colSpan : 1)
                      : 12
                  }
                  style={elemType == 'hidden' ? {display : 'none'} : null}
                >
                  {React.cloneElement(element,{labelAlignment, justifyLabel, fieldGridCount})}
                </Col>
              );
            })
          : null}
        {Footer ? React.cloneElement(Footer) : null}
      </form>
    </Col>
  ) : null;
};

export default Form;

Form.propTypes = 
{
  className : PropTypes.string
  , style : PropTypes.string
  , onSubmit : PropTypes.func
  , gridCount : PropTypes.string
  , columns : PropTypes.number
  , labelAlignment : PropTypes.oneOf(['top', 'left'])
  , fieldGridCount : PropTypes.object
  , rendered : PropTypes.bool
}