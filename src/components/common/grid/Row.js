import React from 'react';
import PropTypes from 'prop-types';

const Row = (inProps) => {
    let {className, rendered = true, ...props} = {...inProps}
    className = className ? className + ' w3-row' : 'w3-row';

    return ( 
        rendered?
        <div className ={className} {...props}>
            {props.children}
        </div>
        :null
     );
}
 
export default Row;

Row.propTypes = 
{
    className : PropTypes.string
    , rendered : PropTypes.bool
}
