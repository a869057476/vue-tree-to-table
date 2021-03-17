# vue-tree-to-table

## Introduce
> Default show
![vue-tree-to-table Screenshot](https://github.com/a869057476/huangwei.github.io/blob/master/2.png)
> checkbox
![vue-tree-to-table Screenshot](https://github.com/a869057476/huangwei.github.io/blob/master/3.png)
> slot
![vue-tree-to-table Screenshot](https://github.com/a869057476/huangwei.github.io/blob/master/6.png)
> fold
![vue-tree-to-table Screenshot](https://github.com/a869057476/huangwei.github.io/blob/master/8.png)
> hide head
![vue-tree-to-table Screenshot](https://github.com/a869057476/huangwei.github.io/blob/master/10.png)
> fixed height
![vue-tree-to-table Screenshot](https://github.com/a869057476/huangwei.github.io/blob/master/11.png)
> extra column
![vue-tree-to-table Screenshot](https://github.com/a869057476/huangwei.github.io/blob/master/15.png)

## Features

- Tree data to table view
- checkbox, supporting relevance and independence
- Folding, supporting themselves and specified level
- Extra column
- Node and head slot
- Head hide
- Fixed height
- Etc in project

# API
### Important!(All the example how to use in this repository, you can download and reference it.)
 
| Parameters | Description | Type | Optional value |Default value |
|---------- |-------- |---------- |---------- |---------- |
| tableColumns | Dynamic header | Array | Y |	[] |
| originData | Tree data | Array | Y | [] |
| isFold | Whether the folding | Boolean | - | false | 
| foldNum | Folding level,  effected only if foldNum is true, to a certain level the child can fully deployed, the default is one layer | Number | - | 0 |
| showCheckbox | Whether to display the check box | Boolean | - | false |
| showCheckboxAndSlot | Whether to display both check boxes and slot, only if showCheckBox is true | Boolean | - | false |
| checkStrictly | Whether to strictly follow the parent-child correlation, only if showCheckbox is true | Boolean | - | false |
| trueCheckLabel | Alias for checkbox checked, only if showCheckbox is true | Boolean | - | false |
| falseCheckLabel | Alias for checkbox unchecked, only if showCheckbox is true | Boolean | - | false |
| trueEditLabel | Alias for checkbox disabled, only if showCheckbox is true | Boolean | - | false |
| falseEditLabel | Alias for checkbox not disabled, only if showCheckbox is true | Boolean | - | false |
| disabledCheckboxNodeLevel | The first few levels of the disabled checkbox, only if showCheckbox is true | Number | - | 0 |
| disabledCheckboxLevels | The level of the disabled checkbox, only if showCheckbox is true | Array | - | [] |
| disabledCheckboxIds | Disabled the IDS of the checkbox, only if showCheckbox is true | Array | - | [] |
| isShowTableHead | Whether to display the header | Boolean | - | false |
| height | Table height | String, Number | - | 'auto' |
| extraColumn | Whether there is additional fixed column concatenation behind it | Boolean | - | false |
| extraColumnObj | Data for additional columns, only if extraColumn is true | Object | - | 	{columns: [], list: []} |

# methods
### Important!(All the example how to use in this repository, you can download and reference it.)
 
| name | Description | parameter |
|----------|----------|----------|
| getTreeData() | Gets the data for the tree | - |
| getCheckedNodeList() | Gets all selected nodes | - |
| resetCheckedNode(list) | Reset the node checkbox status | list: Array |
| changeNodeValue(list, key, value) | Modify the value of the node attribute | - |
| getExtraNodeList() | 	Gets the node data for the additional columns | - |

## Getting started

```bash
# clone the project
git clone https://github.com/a869057476/vue-tree-to-table.git

# enter the project directory
cd vue-tree-to-table

# install dependency
npm install

# develop
npm run start
```

This will automatically open http://localhost:8080

# Build
npm run build

## Usage in project
npm install vue-tree-to-table --save

`vue`
```
<template>
  <div id="app">
    <VueTreeToTable
      :origin-data="originData"
      :table-columns="tableColumns"
    />
    <VueTreeToTable
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
    />
  </div>
</template>

<script>
import VueTreeToTable from 'vue-tree-to-table'

export default {
  name: 'App',
  components: {
    VueTreeToTable
  },
  data() {
    return {
      originData: [],
      tableColumns: []
    }
  },
  created() {
    this.tableColumns = [
      [
        {
          id: 'head1',
          nodeName: '表头1',
          rowSpan: 2,
          colSpan: 1
        },
        {
          id: 'head2',
          nodeName: '表头2',
          rowSpan: 2,
          colSpan: 1
        },
        {
          id: 'head3',
          nodeName: '表头3',
          rowSpan: 1,
          colSpan: 4
        }
      ],
      [
        {
          id: 'head4',
          nodeName: '表头4',
          rowSpan: 1,
          colSpan: 1
        },
        {
          id: 'head5',
          nodeName: '表头5',
          rowSpan: 1,
          colSpan: 3
        }
      ]
    ]
    this.originData = [
      {
        id: 'body1',
        nodeLevel: 1,
        nodeName: '节点1',
        step: 1,
        parentId: null,
        isChecked: false,
        editable: false,
        chidrenList: [
          {
            id: 'body1-1',
            nodeLevel: 2,
            nodeName: '节点1-1',
            step: 1,
            parentId: 'body1',
            isChecked: false,
            editable: false,
            chidrenList: [
              {
                id: 'body1-1-1',
                nodeLevel: 3,
                nodeName: '节点1-1-1',
                step: 1,
                parentId: 'body1-1',
                isChecked: false,
                editable: false,
                chidrenList: [
                  {
                    id: 'body1-1-1-1',
                    nodeLevel: 4,
                    nodeName: '节点1-1-1-1',
                    step: 1,
                    parentId: 'body1-1-1',
                    isChecked: false,
                    editable: false,
                    chidrenList: [
                      {
                        id: 'body1-1-1-1-1',
                        nodeLevel: 5,
                        nodeName: '节点1-1-1-1-1',
                        step: 1,
                        parentId: 'body1-1-1-1',
                        isChecked: false,
                        editable: false,
                        chidrenList: [
                          {
                            id: 'body1-1-1-1-1-1',
                            nodeLevel: 6,
                            nodeName: '节点1-1-1-1-1-1',
                            step: 1,
                            parentId: 'body1-1-1-1-1',
                            isChecked: false,
                            editable: false,
                            chidrenList: [
                              
                            ]
                          },
                          {
                            id: 'body1-1-1-1-1-2',
                            nodeLevel: 6,
                            nodeName: '节点1-1-1-1-1-2',
                            step: 1,
                            parentId: 'body1-1-1-1-1',
                            isChecked: false,
                            editable: false,
                            chidrenList: [
                              
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'body1-1-1-2',
                    nodeLevel: 4,
                    nodeName: '节点1-1-1-2',
                    step: 1,
                    parentId: 'body1-1-1',
                    isChecked: false,
                    editable: false,
                    chidrenList: []
                  },
                  {
                    id: 'body1-1-1-3',
                    nodeLevel: 4,
                    nodeName: '节点1-1-1-3',
                    step: 1,
                    parentId: 'body1-1-1',
                    isChecked: false,
                    editable: false,
                    chidrenList: [
                      {
                        id: 'body1-1-1-3-1',
                        nodeLevel: 5,
                        nodeName: '节点1-1-1-3-1',
                        step: 1,
                        parentId: 'body1-1-1-3',
                        isChecked: false,
                        editable: false,
                        chidrenList: []
                      },
                      {
                        id: 'body1-1-1-3-2',
                        nodeLevel: 5,
                        nodeName: '节点1-1-1-3-2',
                        step: 2,
                        parentId: 'body1-1-1-3',
                        isChecked: false,
                        editable: false,
                        chidrenList: []
                      }
                    ]
                  }
                ]
              },
              {
                id: 'body1-1-2',
                nodeLevel: 3,
                nodeName: '节点1-1-2',
                step: 1,
                parentId: 'body1-1',
                isChecked: false,
                editable: false,
                chidrenList: [
                  {
                    id: 'body1-1-2-1',
                    nodeLevel: 4,
                    nodeName: '节点1-1-2-1',
                    step: 1,
                    parentId: 'body1-1-2',
                    isChecked: false,
                    editable: false,
                    chidrenList: [
                      {
                        id: 'body1-1-2-1-1',
                        nodeLevel: 5,
                        nodeName: '节点1-1-2-1-1',
                        step: 1,
                        parentId: 'body1-1-2-1',
                        isChecked: false,
                        editable: false,
                        chidrenList: [
                          {
                            id: 'body1-1-2-1-1-1',
                            nodeLevel: 6,
                            nodeName: '节点1-1-2-1-1-1',
                            step: 1,
                            parentId: 'body1-1-2-1-1',
                            isChecked: false,
                            editable: false,
                            chidrenList: [
                              
                            ]
                          },
                          {
                            id: 'body1-1-2-1-1-2',
                            nodeLevel: 6,
                            nodeName: '节点1-1-2-1-1-2',
                            step: 1,
                            parentId: 'body1-1-2-1-1',
                            isChecked: false,
                            editable: false,
                            chidrenList: [
                              
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'body2',
        nodeLevel: 1,
        nodeName: '节点2',
        step: 1,
        parentId: null,
        isChecked: false,
        editable: false,
        chidrenList: [
          {
            id: 'body2-1',
            nodeLevel: 2,
            nodeName: '节点2-1',
            step: 1,
            parentId: 'body2',
            isChecked: false,
            editable: false,
            chidrenList: [
              {
                id: 'body2-1-1',
                nodeLevel: 3,
                nodeName: '节点2-1-1',
                step: 1,
                parentId: 'body2-1',
                isChecked: false,
                editable: false,
                chidrenList: [

                ]
              },
              {
                id: 'body2-1-2',
                nodeLevel: 3,
                nodeName: '节点2-1-2',
                step: 1,
                parentId: 'body2-1',
                isChecked: false,
                editable: false,
                chidrenList: [
                  {
                    id: 'body2-1-2-1',
                    nodeLevel: 4,
                    nodeName: '节点2-1-2-1',
                    step: 1,
                    parentId: 'body2-1-2',
                    isChecked: false,
                    editable: false,
                    chidrenList: [
                      {
                        id: 'body2-1-2-1-1',
                        nodeLevel: 5,
                        nodeName: '节点2-1-2-1-1',
                        step: 1,
                        parentId: 'body2-1-2-1',
                        isChecked: false,
                        editable: false,
                        chidrenList: [
                          {
                            id: 'body2-1-2-1-1-1',
                            nodeLevel: 6,
                            nodeName: '节点2-1-2-1-1-1',
                            step: 1,
                            parentId: 'body2-1-2-1-1',
                            isChecked: false,
                            editable: false,
                            chidrenList: [
                              
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'body3',
        nodeLevel: 1,
        nodeName: '节点3',
        step: 1,
        parentId: null,
        isChecked: false,
        editable: false,
        chidrenList: []
      },
      {
        id: 'body4',
        nodeLevel: 1,
        nodeName: '节点4',
        step: 1,
        parentId: null,
        isChecked: false,
        editable: false,
        chidrenList: [
          {
            id: 'body4-1',
            nodeLevel: 2,
            nodeName: '节点4-1',
            step: 1,
            parentId: 'body4',
            isChecked: false,
            editable: false,
            chidrenList: []
          }
        ]
      }
    ]
  }
}
</script>
```


