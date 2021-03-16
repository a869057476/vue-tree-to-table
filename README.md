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
| tableColumns | 动态表头 | 	Array | Y |	[] |
| originData | 树形数据 | Array | Y | [] |
| isFold | 是否折叠 | Boolean | - | false | 
| foldNum | 折叠层级，仅当foldNum为true时生效，到某一层级时子级能全部展开，默认是一层一层的展开 | Number | - | 0 |
| showCheckbox | 是否显示复选框 | Boolean | - | false |
| showCheckboxAndSlot | 是否同时显示复选框和slot，仅当showCheckbox为true时生效 | Boolean | - | false |
| checkStrictly | 是否严格的遵循父子不互相关联，仅当showCheckbox为true时生效 | Boolean | - | false |
| trueCheckLabel | checkbox选中的别名，仅当showCheckbox为true时生效 | Boolean | - | false |
| falseCheckLabel | checkbox未选中的别名，仅当showCheckbox为true时生效 | Boolean | - | false |
| trueEditLabel | checkbox置灰的别名，仅当showCheckbox为true时生效 | Boolean | - | false |
| falseEditLabel | checkbox不置灰的别名，仅当showCheckbox为true时生效 | Boolean | - | false |
| disabledCheckboxNodeLevel | 置灰checkbox的前几个层级，仅当showCheckbox为true时生效 | Number | - | 0 |
| disabledCheckboxLevels | 置灰checkbox的层级，仅当showCheckbox为true时生效 | Array | - | [] |
| disabledCheckboxIds | 置灰checkbox的ids，仅当showCheckbox为true时生效 | Array | - | [] |
| isShowTableHead | 是否显示表头 | Boolean | - | false |
| height | table传入的高度 | String, Number | - | 'auto' |
| extraColumn | 是否后面额外有固定的列拼接 | Boolean | - | false |
| extraColumnObj | 额外列的数据，仅当extraColumn为true时生效 | Object | - | 	{columns: [], list: []} |

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


