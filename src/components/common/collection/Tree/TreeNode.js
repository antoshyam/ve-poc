import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import Icon from "../../graphic/Icon";
import OutputText from "../../output/OutputText";
import LeafNode from "./LeafNode";

/**
 * Used to define nodes for the Tree component.
 * @see See [Tree](#tree) for usage example
 */
const TreeNode = props => {
  let {
    label,
    expanded = false,
    expandAll = false,
    selected = false,
    resetSelections,
    trackSelectionChange,
    ...rest
  } = { ...props };

  let [_expanded, set_Expanded] = useState(expanded || expandAll);
  let [_selected, set_Selected] = useState(selected);

  useEffect(() => {
    set_Selected(selected);
  }, [trackSelectionChange]);

  return (
    <li
      onClick={event => {
        setTimeout(() => set_Selected(true), 10);
        resetSelections();
      }}
    >
      <Icon
        faClass={
          _expanded
            ? "fas fa-caret-down w3-large"
            : "fas fa-caret-right w3-large"
        }
        onClick={event => {
          event.stopPropagation();
          set_Expanded(!_expanded);
        }}
        key={_expanded}
        style={{ display: "inline-flex" }}
      >
        <OutputText
          value={label}
          style={_selected ? { fontWeight: "bold" } : {}}
        />
      </Icon>
      {_expanded ? (
        <ul className="w3-ul">
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
                  selected={selected}
                  resetSelections={resetSelections}
                  trackSelectionChange={trackSelectionChange}
                >
                  {child}
                </LeafNode>
              );
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
TreeNode.defaultProps = {
  _type: "TreeNode",
  expanded: false,
  expandAll: false,
  selected: false
};

TreeNode.propTypes = {
  /**
   * @ignore
   */
  _type : PropTypes.string,
  /**
   * Name for the node
   */
  label : PropTypes.string,
  /**
   * Expand/Collapse the node
   */
  expanded : PropTypes.bool,
  /**
   * Controls if all nodes under this node have to be recursively expanded.
   */
  expandAll : PropTypes.bool,
  /**
   * Mark this as a selected node.
   */
  selected : PropTypes.bool,
  /**
   * @ignore
   */
  resetSelections : PropTypes.func,
  /**
   * @ignore
   */
  trackSelectionChange : PropTypes.any
}