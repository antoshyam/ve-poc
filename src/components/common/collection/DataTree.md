Tree example:

```js
const onItemClick = (nodePath) => alert(`You clicked ${nodePath.join('_')}`) ;
<DataTree
  onItemClick={onItemClick}
  data={[{Root1 : [
    "TextChild1",
    {
      NodeChild1: [
        { NodeChild2: ["TextChild2", "TextChild3"] },
        {
          NodeChild3: [
            {
              NodeChild4: [
                "TextChild4",
                {
                  NodeChild5: [
                    {NodeChild6: ["TextChild5", "TextChild6"]},
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]},
  {Root2 : [
    "TextChild1",
    {
      NodeChild1: [
        { NodeChild2: ["TextChild2", "TextChild3"] },
        {
          NodeChild3: [
            {
              NodeChild4: [
                "TextChild4",
                {
                  NodeChild5: [
                    {NodeChild6: ["TextChild5", "TextChild6"]},
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]}]}
/>
```
