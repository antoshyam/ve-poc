import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DataTree.module.css"

const DataTree = props => {
    let { data, rendered, _traversalPath, onItemClick } = {
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
            {
                data?.map((node, nodeIndex) => {
                    return <li key={nodeIndex}>
                        <div className={styles.dataTreeNode} onClick={() =>
                            handleNodeToggle(`${_traversalPath.join('_')}_${node.NodeLabel}`)
                        }
                            key={_expandedNodes}>
                            <LeadingIcons node={node}
                                _expandedNodes={_expandedNodes}
                                _traversalPath={_traversalPath} />
                            {` ${node.NodeLabel}`}
                        </div>
                        <DataTree
                            data={node.NodeData}
                            rendered={_expandedNodes.includes(`${_traversalPath.join('_')}_${node.NodeLabel}`)}
                            _traversalPath={[..._traversalPath, node.NodeLabel]}
                            onItemClick={onItemClick}
                        />
                    </li>
                })
            }
        </ul>
    ) : null;
};

export default DataTree;
DataTree.defaultProps = {
    data: [],
    rendered: true,
    _traversalPath: []
}

function LeadingIcons({ node, _expandedNodes, _traversalPath}) {
    return <React.Fragment>
        {Array.isArray(node.NodeData) ?
            (_expandedNodes.includes(`${_traversalPath.join('_')}_${node.NodeLabel}`)
                ? <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                : <FontAwesomeIcon icon="fa-solid fa-caret-right" />)
            : null
        }
        {
            <img src={node.NodeImage} style={{height: 16 + 'px'}}/>
        }
    </React.Fragment>
}
