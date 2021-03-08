<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-03-06 12:48:31
 * @LastEditors: huangwei
 * @LastEditTime: 2021-03-08 21:01:40
-->
<template>
  <div>
    <h4>单元格占据多列</h4>
    <p>step设置数值，默认为1</p>
    <p>参考节点1-1-1-3-2</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
    />
    <h4>显示checkbox</h4>
    <p>showCheckbox设置为true，默认设置为false</p>
    <p>父子间关联，checkStrictly默认设置为false</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
    />
    <p>父子间不关联，checkStrictly设置为true</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      check-strictly
    />
    <p>checkbox设置值的别名，默认是Boolean</p>
    <p>类型Boolean| String | Number</p>
    <p>trueCheckLabel: 选中时的值</p>
    <p>falseCheckLabel: 未选中时的值</p>
    <p>参考节点2-1-2-1和节点2-1-2-1-1</p>
    <hr />
    <p>checkbox设置disabled的别名，默认是Boolean</p>
    <p>类型Boolean| String | Number</p>
    <p>trueEditLabel: 可点击的值</p>
    <p>falseEditLabel: 不可点击时的值</p>
    <p>参考节点2-1-1和节点2-1-2-1-1</p>
    <TableTree
      :origin-data="originData2"
      :table-columns="tableColumns"
      show-checkbox
      true-check-label="10"
      false-check-label="00"
      true-edit-label="00"
      false-edit-label="10"
    />
    <p>同时显示checkbox和slot，showCheckboxAndSlot设置为true，默认为false</p>
    <p>参考节点1-1</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      show-checkbox-and-slot
    >
      <template v-slot:node="{ node }">
        <div v-if="node.id === 'body1-1'" class="hide-flag">
          <div class="hide-flag-bg" />
        </div>
      </template>
    </TableTree>
    <h4>节点和表头支持slot</h4>
    <p>参考节点1-1和表头3</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
    >
      <template v-slot:node="{ node }">
        <span v-if="node.id === 'body1-1'" style="color: red;">{{ node.nodeName }}</span>
        <span v-else>{{ node.nodeName }}</span>
      </template>
      <template v-slot:title="{ node }">
        <span v-if="node.id === 'head3'" style="color: red;">{{ node.nodeName }}</span>
        <span v-else>{{ node.nodeName }}</span>
      </template>
    </TableTree>
    <h4>启用展开折叠</h4>
    <p>isFold设置为true，默认为false</p>
    <p>逐级展开</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      is-fold
    />
    <p>到某级时全部展开，设置foldNum值</p>
    <p>以下示例设为2，即展开第二级时后面的子孙节点全部展开</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      is-fold
      :fold-num="2"
    />
    <h4>隐藏表头</h4>
    <p>isShowTableHead设置为false，默认为true</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      :is-show-table-head="false"
    />
    <h4>设置table高度</h4>
    <p>height设置一个值，默认是'auto'，可设置为String或者Number</p>
    <p>例如：100 | '100px' | 'auto' | '100%'等</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      height="50%"
    />
    <h4>置灰层级</h4>
    <p>disabledCheckboxNodeLevel设置一个值，默认是0</p>
    <p>设为2即置灰前两列</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      :disabled-checkbox-node-level="2"
    />
    <p>disabledCheckboxLevels设置一个array，默认是[]</p>
    <p>设为[2, 4]即置灰第二列和第四列</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      :disabled-checkbox-levels="[2, 4]"
    />
    <p>disabledCheckboxIds设置一个array，默认是[]</p>
    <p>设为['body1-1', 'body1-1-1']即置灰节点1-1和节点1-1-1</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      :disabled-checkbox-ids="['body1-1', 'body1-1-1']"
    />
  </div>
</template>

<script>
import TableTree from './TableTree/index.vue'

export default {
  name: 'App',
  components: {
    TableTree
  },
  data() {
    return {
      data: {
        name: '123',
        originData: [],
        originData2: [],
        tableColumns: []
      }
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
    this.originData2 = [
      {
        id: 'body2',
        nodeLevel: 1,
        nodeName: '节点2',
        step: 1,
        parentId: null,
        isChecked: '00',
        editable: '00',
        chidrenList: [
          {
            id: 'body2-1',
            nodeLevel: 2,
            nodeName: '节点2-1',
            step: 1,
            parentId: 'body2',
            isChecked: '00',
            editable: '00',
            chidrenList: [
              {
                id: 'body2-1-1',
                nodeLevel: 3,
                nodeName: '节点2-1-1',
                step: 1,
                parentId: 'body2-1',
                isChecked: '00',
                editable: '10',
                chidrenList: [

                ]
              },
              {
                id: 'body2-1-2',
                nodeLevel: 3,
                nodeName: '节点2-1-2',
                step: 1,
                parentId: 'body2-1',
                isChecked: '00',
                editable: '00',
                chidrenList: [
                  {
                    id: 'body2-1-2-1',
                    nodeLevel: 4,
                    nodeName: '节点2-1-2-1',
                    step: 1,
                    parentId: 'body2-1-2',
                    isChecked: '10',
                    editable: '00',
                    chidrenList: [
                      {
                        id: 'body2-1-2-1-1',
                        nodeLevel: 5,
                        nodeName: '节点2-1-2-1-1',
                        step: 1,
                        parentId: 'body2-1-2-1',
                        isChecked: '10',
                        editable: '10',
                        chidrenList: [
                          {
                            id: 'body2-1-2-1-1-1',
                            nodeLevel: 6,
                            nodeName: '节点2-1-2-1-1-1',
                            step: 1,
                            parentId: 'body2-1-2-1-1',
                            isChecked: '00',
                            editable: '00',
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
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="less" scoped>
  .hide-flag {
    position: absolute;
    top: 0;
    right: 0;
    &-bg {
      width: 0;
      height: 0;
      border-top: 36px solid yellow;
      border-left: 36px solid transparent;
    }
  }
</style>