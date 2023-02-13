import React, { useState } from "react";
import PropTypes from 'prop-types'
import LeafNode from "./LeafNode";
import Col from "../../grid/Col";

const Tree = props => {
  let { expandAll } = { ...props };
  const [trackSelectionChange, setTrackSelectionChange] = useState(0);
  const resetSelections = () => {
    setTrackSelectionChange(trackSelectionChange + 1);
  };

  return (
    <Col style={{overflow:'auto'}}>
      {React.Children.map(props.children, child => {
        if (child.props._type == "TreeNode")
          return React.cloneElement(child, {
            expandAll,
            resetSelections,
            trackSelectionChange,
            selected: false
          });
        else
          return (
            <LeafNode
              resetSelections={resetSelections}
              trackSelectionChange={trackSelectionChange}
            >
              {child}
            </LeafNode>
          );
      })}
    </Col>
  );
};

export default Tree;

Tree.defultProps = {
  expandAll : false
}

Tree.propTypes = {
  /**
   * True if all nodes of the tree need to be expanded.
   */
  expandAll : PropTypes.bool
}
