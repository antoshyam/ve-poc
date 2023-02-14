import React, { useState } from "react";
import PropTypes from 'prop-types'
import Icon from "../graphic/Icon";
import OutputText from "../output/OutputText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataTree = props => {
  let { data, rendered, _traversalPath, onItemClick} = {
    ...props
  };

  const [_expandedNodes, _setExpandedNodes] = useState([]);

  const handleNodeToggle = (nodeId) => {
    let updatedExpandedNodes = _expandedNodes.includes(nodeId)
      ? _expandedNodes.filter(node => {
          return node != nodeId;
        })
      : [..._expandedNodes, nodeId];
    _setExpandedNodes(updatedExpandedNodes);
  };

  const handleItemClick = nodePath => {
    onItemClick(nodePath)
  };

  return rendered ? (
        <ul className="w3-ul">
          {data.map((nodeItem, itemIndex) => {
            return typeof nodeItem == "object" ? (
              Object.keys(nodeItem).map((nodeKey, index) => {
                return (
                  <li key={`${nodeKey}__${index}`}>
                    <div onClick={() =>
                        handleNodeToggle(`${_traversalPath.join('_')}_${nodeKey}`)
                      }
                      key={_expandedNodes}>
                        {
                          _expandedNodes.includes(`${_traversalPath.join('_')}_${nodeKey}`)
                          ? <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                          : <FontAwesomeIcon icon="fa-solid fa-caret-right" />
                        }
                        <OutputText value={nodeKey} />
                    </div>
                    <DataTree
                      data={nodeItem[nodeKey]}
                      rendered={_expandedNodes.includes(`${_traversalPath.join('_')}_${nodeKey}`)}
                      _traversalPath={[..._traversalPath, nodeKey]}
                      onItemClick={onItemClick}
                    />
                  </li>
                );
              })
            ) : (
              <li
                style={{cursor: 'pointer'}}
                key={`${nodeItem}_${itemIndex}`}
                onClick={() => handleItemClick([..._traversalPath, nodeItem])}
              >
                {nodeItem}
              </li>
            );
          })}
        </ul>
  ) : null;
};

export default DataTree;
DataTree.defaultProps = {
  data : [],
  rendered : true,
  _traversalPath : []
}

DataTree.propTypes = {
  /**
   * Data to build the Tree view.
   */
  data : PropTypes.array,
  /**
   * Controls the rendering of the component.
   */
  rendered : PropTypes.bool,
  /**
   * Accepts a function that will be called with the path to the clicked node item.
   */
  onItemClick : PropTypes.func,
  /**
   * @ignore
   */
  _traversalPath : PropTypes.array
}