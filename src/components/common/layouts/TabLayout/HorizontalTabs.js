import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Col from "../../grid/Col";
import Row from "../../grid/Row";


const HorizontalTabs = props => {
  let {activeTab, onTabClick,activeTabClassName,defaultTabClassName,tabHoverClassName,qcStyle='primary',height,validationState, ...rest } = { ...props };

  let[activeTabInternal, setActiveTabInternal] = useState(activeTab)

  useEffect(() => {
    setActiveTabInternal(activeTab)
  },[props.activeTab])
   
  let defaultTabClass = "qc-tab"+" "+defaultTabClassName+" "+tabHoverClassName;
  let activeTabClass = defaultTabClass +" "+ `${'qc-tab-active-p'} ${activeTabClassName}`;

  const openTab = (evt, tabName) => {
    evt.preventDefault()
    setActiveTabInternal(tabName)
  };

  return (
    <div>
        <Col style={{display:'flex'}}>
        {React.Children.map(props.children, tab => {
          return (
            <Row
            onClick={onTabClick ? () => onTabClick(tab.props.name) : (event) => openTab(event,tab.props.name)}
              className={(activeTabInternal == tab.props.name  ? activeTabClass : defaultTabClass)+" "+ (tab.props.validationState?"qc-tab-text-"+tab.props.validationState:"")}
              style={{ cursor: "pointer"}}
            >
              {tab.props.name}
            </Row>
          );
        })}
        </Col>
        <div className="tab-content-container">
        {
            React.Children.map(props.children, tab=> {
                return (
                  <Col id={tab.props.name} className='tab qc-tab-content w3-padding-16' style={{ display: activeTabInternal == tab.props.name ? "block" :"none" , minHeight:height?height+"em":18+"em"}}>
                        {tab.props.children}
                    </Col>
                )
            })
        }
        </div>
        
        {/* <Col style={{backgroundColor :"#F6F8FA" }}>
        {React.Children.map(props.children, tab => {
          return (
            <Row
            onClick={onTabClick ? () => onTabClick(tab.props.name) : (event) => openTab(event,tab.props.name)}
              className={(activeTabInternal == tab.props.name  ? activeTabClass : defaultTabClass)+" "+ (tab.props.validationState?"qc-tab-text-"+tab.props.validationState:"")}
              style={{ cursor: "pointer", display:'table-cell'}}
            >
              {tab.props.name}
            </Row>
          );
        })}
        </Col> */}
        
    </div>
  );
};

export default HorizontalTabs;

HorizontalTabs.propTypes = 
{
  activeTab : PropTypes.string
  , onTabClick : PropTypes.func 
  /**
   * Style classe to apply to the Active Tab.
   */
  ,activeTabClassName : PropTypes.string
  /**
   * Style class to apply to the unselected Tab.
   */
  ,defaultTabClassName : PropTypes.string
  /**
   * Style class to apply to Tab Hover.
   */
  ,tabHoverClassName : PropTypes.string
  /**
   * String values primary,secondary ,and third to add color styles .. default is primary
   */
  , qcStyle : PropTypes.string
}