<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-03-06 12:48:31
 * @LastEditors: huangwei
 * @LastEditTime: 2021-03-10 21:12:41
-->
<template>
  <div>
    <h2>属性说明</h2>
    <table class="table-explain" border="1px" cellspacing="0">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tableColumns</td>
          <td>动态表头</td>
          <td>Array</td>
          <td>-</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>originData</td>
          <td>树形数据</td>
          <td>Array</td>
          <td>-</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>isFold</td>
          <td>是否折叠</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>foldNum</td>
          <td>折叠层级，仅当foldNum为true时生效，到某一层级时子级能全部展开，默认是一层一层的展开</td>
          <td>Number</td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td>showCheckbox</td>
          <td>是否显示复选框</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>showCheckboxAndSlot</td>
          <td>是否同时显示复选框和slot，仅当showCheckbox为true时生效</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checkStrictly</td>
          <td>是否严格的遵循父子不互相关联，仅当showCheckbox为true时生效</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>trueCheckLabel</td>
          <td>checkbox选中的别名，仅当showCheckbox为true时生效</td>
          <td>Boolean, String, Number</td>
          <td>-</td>
          <td>true</td>
        </tr>
        <tr>
          <td>falseCheckLabel</td>
          <td>checkbox未选中的别名，仅当showCheckbox为true时生效</td>
          <td>Boolean, String, Number</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>trueEditLabel</td>
          <td>checkbox置灰的别名，仅当showCheckbox为true时生效</td>
          <td>Boolean, String, Number</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>falseEditLabel</td>
          <td>checkbox不置灰的别名，仅当showCheckbox为true时生效</td>
          <td>Boolean, String, Number</td>
          <td>-</td>
          <td>true</td>
        </tr>
        <tr>
          <td>disabledCheckboxNodeLevel</td>
          <td>置灰checkbox的前几个层级，仅当showCheckbox为true时生效</td>
          <td>Number</td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td>disabledCheckboxLevels</td>
          <td>置灰checkbox的层级，仅当showCheckbox为true时生效</td>
          <td>Array</td>
          <td>-</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>disabledCheckboxIds</td>
          <td>置灰checkbox的ids，仅当showCheckbox为true时生效</td>
          <td>Array</td>
          <td>-</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>isShowTableHead</td>
          <td>是否显示表头</td>
          <td>Boolean</td>
          <td>-</td>
          <td>true</td>
        </tr>
        <tr>
          <td>height</td>
          <td>table传入的高度</td>
          <td>String, Number</td>
          <td>-</td>
          <td>'auto'</td>
        </tr>
        <tr>
          <td>extraColumn</td>
          <td>是否后面额外有固定的列拼接</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>额外列的数据，仅当extraColumn为true时生效</td>
          <td>是否后面额外有固定的列拼接</td>
          <td>Object</td>
          <td>-</td>
          <td>{columns: [], list: []}</td>
        </tr>
      </tbody>
    </table>
    <h3>主要数据属性说明</h3>
    <h4>originData</h4>
    <pre>
      [
        {
          id: 'body1', // 节点id
          nodeLevel: 1, // 节点层级
          nodeName: '节点1', // 节点名称
          step: 1, // 节点所占列数
          parentId: null, // 父节点id
          isChecked: false, // 节点是否选择
          editable: false, // 节点是否可选
          chidrenList: [] // 节点包含的子节点
        }
      ]
    </pre>
    <p>示例数据</p>
    <p>
      [
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
    </p>
    <h4>tableColumns</h4>
    <p>注意：这是一个二维数组</p>
    <pre>
      [
        [
          {
            id: 'head1', // 表头id
            nodeName: '节点1', // 表头名称
            rowSpan: 2, // 表头占据行
            colSpan: 1 // 表头占据列
          }
        ]
      ]
    </pre>
    <p>示例数据</p>
    <p>
      [
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
    </p>
    <h4>extraColumnObj</h4>
    <pre>
      {
        columns: [
          {
            colspan: 1, // 表头占据列
            id: null, // 表头id，可为空
            nodeName: "额外表头1", // 表头名称
            nodeType: "extra", // 表明是额外列的类型，必须是extra
            rowspan: 1 // 表头占据行
          }
        ],
        list: [
          {
            colspan: 1, // 节点占据列
            id: "extra-0-0", // 节点id
            nodeName: "extra-0-0", // 节点名称
            nodeType: "extra", // 表明是额外列的类型，必须是extra
            rowspan: 1, // 节点占据行
            value: "" // 额外带的数据，可以为其他属性
          }
        ]
      }
    </pre>
    <p>示例数据</p>
    <p>
      {"columns":[{"id":null,"nodeType":"extra","nodeName":"额外表头1","rowspan":1,"colspan":1},{"id":null,"nodeType":"extra","nodeName":"额外表头2","rowspan":1,"colspan":1}],"list":[[{"nodeType":"extra","id":"extra-0-0","colspan":1,"rowspan":1,"nodeName":"extra-0-0","value":""},{"nodeType":"extra","id":"extra-0-1","colspan":1,"rowspan":1,"nodeName":"extra-0-1","value":""}],[{"nodeType":"extra","id":"extra-1-0","colspan":1,"rowspan":1,"nodeName":"extra-1-0","value":""},{"nodeType":"extra","id":"extra-1-1","colspan":1,"rowspan":1,"nodeName":"extra-1-1","value":""}],[{"nodeType":"extra","id":"extra-2-0","colspan":1,"rowspan":1,"nodeName":"extra-2-0","value":""},{"nodeType":"extra","id":"extra-2-1","colspan":1,"rowspan":1,"nodeName":"extra-2-1","value":""}],[{"nodeType":"extra","id":"extra-3-0","colspan":1,"rowspan":1,"nodeName":"extra-3-0","value":""},{"nodeType":"extra","id":"extra-3-1","colspan":1,"rowspan":1,"nodeName":"extra-3-1","value":""}],[{"nodeType":"extra","id":"extra-4-0","colspan":1,"rowspan":1,"nodeName":"extra-4-0","value":""},{"nodeType":"extra","id":"extra-4-1","colspan":1,"rowspan":1,"nodeName":"extra-4-1","value":""}],[{"nodeType":"extra","id":"extra-5-0","colspan":1,"rowspan":1,"nodeName":"extra-5-0","value":""},{"nodeType":"extra","id":"extra-5-1","colspan":1,"rowspan":1,"nodeName":"extra-5-1","value":""}],[{"nodeType":"extra","id":"extra-6-0","colspan":1,"rowspan":1,"nodeName":"extra-6-0","value":""},{"nodeType":"extra","id":"extra-6-1","colspan":1,"rowspan":1,"nodeName":"extra-6-1","value":""}],[{"nodeType":"extra","id":"extra-7-0","colspan":1,"rowspan":1,"nodeName":"extra-7-0","value":""},{"nodeType":"extra","id":"extra-7-1","colspan":1,"rowspan":1,"nodeName":"extra-7-1","value":""}],[{"nodeType":"extra","id":"extra-8-0","colspan":1,"rowspan":1,"nodeName":"extra-8-0","value":""},{"nodeType":"extra","id":"extra-8-1","colspan":1,"rowspan":1,"nodeName":"extra-8-1","value":""}],[{"nodeType":"extra","id":"extra-9-0","colspan":1,"rowspan":1,"nodeName":"extra-9-0","value":""},{"nodeType":"extra","id":"extra-9-1","colspan":1,"rowspan":1,"nodeName":"extra-9-1","value":""}],[{"nodeType":"extra","id":"extra-10-0","colspan":1,"rowspan":1,"nodeName":"extra-10-0","value":""},{"nodeType":"extra","id":"extra-10-1","colspan":1,"rowspan":1,"nodeName":"extra-10-1","value":""}]]}
    </p>
    <h4>1、单元格占据多列</h4>
    <p>step设置数值，默认为1</p>
    <p>参考节点1-1-1-3-2</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
    />
    <h4>2、显示checkbox</h4>
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
        <div v-if="node.id === 'body1-1'" class="slot-flag">
          <div class="slot-flag-bg" />
        </div>
      </template>
    </TableTree>
    <h4>3、节点和表头支持slot</h4>
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
    <h4>4、启用展开折叠</h4>
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
    <h4>5、隐藏表头</h4>
    <p>isShowTableHead设置为false，默认为true</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      :is-show-table-head="false"
    />
    <h4>6、设置table高度</h4>
    <p>height设置一个值，默认是'auto'，可设置为String或者Number</p>
    <p>例如：100 | '100px' | 'auto' | '100%'等</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      height="200px"
    />
    <h4>7、置灰层级</h4>
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
    <h4>8、额外列</h4>
    <p>可以在树的每一个叶子节点后拼接额外的列用于展示其他信息</p>
    <p>extraColumn需要设置为true，默认是false</p>
    <p>extraColumnObj需要设置一个Object，包括columns和list</p>
    <TableTree
      :origin-data="originData"
      :table-columns="tableColumns"
      :extra-column-obj="extraColumnObj"
      extra-column
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
      originData: [],
      originData2: [],
      tableColumns: [],
      extraColumnObj: {
        columns: [
          {
            id: null,
            nodeType: 'extra',
            nodeName: '额外表头1',
            rowspan: 1,
            colspan: 1
          },
          {
            id: null,
            nodeType: 'extra',
            nodeName: '额外表头2',
            rowspan: 1,
            colspan: 1
          }
        ],
        list: []
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
    new Array(11).fill().forEach((tr, trIndex) => {
      const trTemp = [
        {
          nodeType: 'extra',
          id: `extra-${trIndex}-0`,
          colspan: 1,
          rowspan: 1,
          // parentId: e.id,
          nodeName: `extra-${trIndex}-0`,
          value: ''
        },
        {
          nodeType: 'extra',
          id: `extra-${trIndex}-1`,
          colspan: 1,
          rowspan: 1,
          // parentId: e.id,
          nodeName: `extra-${trIndex}-1`,
          value: ''
        },
      ]
      this.extraColumnObj.list.push(trTemp)
    })
    console.log(this.extraColumnObj)
    console.log(JSON.stringify(this.extraColumnObj))
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
  .slot-flag {
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
  .table-explain {
    width: 100%;
    th {
      text-align: left;
    }
  }
</style>