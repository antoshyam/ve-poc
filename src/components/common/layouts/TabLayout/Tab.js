import React from 'react'
import PropTypes from 'prop-types';

const Tab = (props) => {
    let {name, ...rest} = {...props}
    return (
        <div name = {name} className='w3-container qc-border'>
            { props.children }
        </div>
    )
}

export default Tab

Tab.propTypes = 
{
    name : PropTypes.string 
}