import React from 'react';
import PropTypes from 'prop-types';

const Col = React.forwardRef((props, ref) => {
    let {l,m,s,rest,hidden,className,rendered = true,style={}, ...rProps} = {...props};
    className = className ? className + ' w3-col' : 'w3-col';
    className = l != null ? className + ' l' + l : className;
    className = m != null ? className + ' m' + m : className;
    className = s != null ? className + ' s' + s : className;
    className = hidden ? className + ' w3-hide' : className;
    className = rest ? 'w3-rest' : className;

    return ( 
        rendered ?
        <div className={className} {...rProps} style={{...style}} ref={ref}>
            {props.children}
        </div>
        : null
     );
})

export default Col;

Col.propTypes = 
{
    l : PropTypes.number
    , m : PropTypes.number
    , s : PropTypes.number
    , rest : PropTypes.bool
    , hidden : PropTypes.string
    , className : PropTypes.string
    , rendered : PropTypes.bool
    , style : PropTypes.object
}