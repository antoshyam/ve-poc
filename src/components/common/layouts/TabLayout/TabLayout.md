TabLayout Example:

```js
import { Tab } from "../../index.js";
<React.Fragment>
<b>Default (horizontal tab layout):</b>
<hr/>
<TabLayout activeTab="Approved">
  <Tab name="Approved">Content for Approved</Tab>
  <Tab name="In Process">Content for In Process</Tab>
  <Tab name="Hold">Content for on Hold</Tab>
  <Tab name="Cancelled">Content for cancelled</Tab>
</TabLayout>
<br/><br/>
Vertical tab layout:
<hr/>
<TabLayout activeTab="Approved" layout='vertical'>
  <Tab name="Approved">Content for Approved</Tab>
  <Tab name="In Process">Content for In Process</Tab>
  <Tab name="Hold">Content for on Hold</Tab>
  <Tab name="Cancelled">Content for cancelled</Tab>
</TabLayout>
</React.Fragment>
```
