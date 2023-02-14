import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Col from "../../grid/Col";
import Row from "../../grid/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spacer from "../Spacer";
import OutputText from "../../output/OutputText";

const Accordion = (props) => {
  let {
    rendered,
    className,
    header,
    showContent,
    collapsible = false,
    qcStyle,
    ...rest
  } = { ...props };

  let [contentRendered, setContentRendered] = useState(
    collapsible ? showContent : true
  );
  const handleHeaderClick = () => {
    setContentRendered(!contentRendered);
  };

  useEffect(() => {
    setContentRendered(collapsible ? showContent : true);
  }, [showContent]);

  let actionBar = null,
    customHeader = null,
    otherChilds = [];
  React.Children.map(props.children, (child) => {
    if (child != null) {
      if (child.props.type == "ActionBar") actionBar = child;
      else if (child.props.type == "Header") customHeader = child;
      else otherChilds.push(child);
    }
  });

  return rendered ? (
    <Col qcStyle={qcStyle} className="qc-accordion-container">
      {customHeader ? (
        <Row
          qcStyle={qcStyle}
          contentShown={JSON.stringify(contentRendered)}
          className="qc-accordion-header-container"
          expanded={contentRendered}
        >
          <FontAwesomeIcon icon={contentRendered ? "fas fa-chevron-down" : "fas fa-chevron-right"} onClick={collapsible ? handleHeaderClick : null} />
          <Spacer width="2px" />
          {React.cloneElement(customHeader, {
            onClick: collapsible ? handleHeaderClick : null,
            style: {
              display: "inline-block",
              cursor: collapsible ? "pointer" : "default",
              ...customHeader.props.style,
            },
          })}
          {actionBar
            ? React.cloneElement(actionBar, {
              rendered: contentRendered,
              className: "w3-animate-opacity",
            })
            : null}
        </Row>
      ) : (
        <Row
          qcStyle={qcStyle}
          contentShown={JSON.stringify(contentRendered)}
          className="qc-accordion-header-container"
          style={{ cursor: collapsible ? "pointer" : "default" }}
          onClick={collapsible ? handleHeaderClick : null}
        >
          <FontAwesomeIcon icon={contentRendered ? "fas fa-chevron-down" : "fas fa-chevron-right"} onClick={collapsible ? handleHeaderClick : null} className="accordionCollapseIcon"/>
          <Spacer width="2px" />
          <OutputText
            value={header}
            className="qc-accordion-header"
            qcStyle={qcStyle}
          />
          {actionBar
            ? React.cloneElement(actionBar, {
              rendered: contentRendered,
              className: "w3-animate-opacity",
            })
            : null}
        </Row>
      )}
      <Row
        rendered={contentRendered}
        className="qc-accordion-content"
        qcStyle={qcStyle}
      >
        {otherChilds}
      </Row>
    </Col>
  ) : null;
};

export default Accordion;
Accordion.defaultProps = {
  showContent: false,
  rendered: true,
  qcStyle: "primary",
};

Accordion.propTypes = {
  rendered: PropTypes.bool,
  className: PropTypes.string,
  header: PropTypes.string,
  showContent: PropTypes.bool,
  collapsible: PropTypes.bool,
  qcStyle: PropTypes.oneOf(["primary", "secondary", PropTypes.func]),
};
