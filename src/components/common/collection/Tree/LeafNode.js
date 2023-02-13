import React, { useState, useEffect } from "react";

const LeafNode = props => {
  let { selected = false, resetSelections, trackSelectionChange, ...rest } = {
    ...props
  };

  let [_selected, set_Selected] = useState(selected);

  useEffect(() => {
    set_Selected(selected);
  }, [trackSelectionChange]);

  return (
    <li
      onClick={() => {
        setTimeout(() => set_Selected(true), 10);
        resetSelections();
      }}
      style={_selected ? { fontWeight: "bold" } : {}}
    >
      {props.children}
    </li>
  );
};

export default LeafNode;
