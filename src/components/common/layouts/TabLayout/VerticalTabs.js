import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Row from "../../grid/Row";
import Col from "../../grid/Col";



const VerticalTabs = props => {
  let {activeTab, onTabClick, ...rest } = { ...props };

  let[activeTabInternal, setActiveTabInternal] = useState(activeTab)

  useEffect(() => {
    setActiveTabInternal(activeTab)
  },[props.activeTab])

  // let defaultTabClass = "w3-rightbar qc-border-blue-hover qc-hover w3-text-grey w3-padding tablink"
  let defaultTabClass = "qc-tab w3-rightbar"
  let activeTabClass = defaultTabClass + " qc-border-blue qc-active w3-large"

  const openTab = (evt, tabName) => {
    evt.preventDefault()
    setActiveTabInternal(tabName)
  };

  return (
    <Row>
        <Col l={2}>
        {React.Children.map(props.children, tab => {
          return (
            <Row
            onClick={onTabClick ? () => onTabClick(tab.props.name) : (event) => openTab(event,tab.props.name)}
              className={activeTabInternal == tab.props.name ? activeTabClass : defaultTabClass}
              style={{ cursor: "pointer"}}
            >
              {tab.props.name}
            </Row>
          );
        })}
        </Col>
        <Col l={10}>
        {
            React.Children.map(props.children, tab=> {
                return (
                    <Col id={tab.props.name} className='tab' style={{ display: activeTabInternal == tab.props.name ? "block" :"none" }}>
                        {tab.props.children}
                    </Col>
                )
            })
        }
        </Col>
    </Row>
  );
};

export default VerticalTabs;

VerticalTabs.propTypes = 
{
  activeTab : PropTypes.string
  , onTabClick : PropTypes.func 
}