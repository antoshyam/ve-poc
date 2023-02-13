Tree Example:
```js
import TreeNode from './TreeNode.js';
import {OutputText} from '../../index.js';
<Tree expandAll>
    <TreeNode label='Level1Node1'>
        <OutputText value='Level2Leaf1'/>
      <TreeNode label='Level2Node1'>
        <OutputText value='Level3Leaf1'/>
      </TreeNode>
      <TreeNode label='Level2Node2'>
        <OutputText value='Level3Leaf1'/>
      </TreeNode>
    </TreeNode>
    <OutputText value='Level1Leaf1'/>
    <TreeNode label='Level1Node2'>
        <OutputText value='Level2Leaf1'/>
      <TreeNode label='Level2Node1'>
        <OutputText value='Level3Leaf1'/>
      </TreeNode>
      <TreeNode label='Level2Node2'>
        <OutputText value='Level3Leaf1'/>
      </TreeNode>
    </TreeNode>
</Tree>
```