import React from "react";
import PropTypes from 'prop-types';
import VerticalTabs from "./VerticalTabs";
import HorizontalTabs from "./HorizontalTabs";

const TabLayout = props => {
  let {layout = 'horizontal', ...rest} = {...props}
  return (
    layout == 'vertical' ? 
      <VerticalTabs {...rest}>{props.children}</VerticalTabs>
      :
      <HorizontalTabs {...rest}>{props.children}</HorizontalTabs>
  )
}
export default TabLayout;

TabLayout.propTypes = 
{
  layout : PropTypes.oneOf(['horizontal', 'vertical'])
}