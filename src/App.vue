<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-03-06 12:48:31
 * @LastEditors: huangwei
 * @LastEditTime: 2021-03-07 20:16:45
-->
<template>
  <div>
    <h4>单元格占据多列</h4>
    <p>step设置数值，默认为1</p>
    <p>参考节点1-1-1-3-2</p>
    <TableTree
      ref="tableTree"
      :origin-data="originData"
      :table-columns="tableColumns"
    />
    <h4>显示checkbox</h4>
    <p>showCheckbox设置为true，默认设置为false</p>
    <p>父子间关联，checkStrictly默认设置为false</p>
    <TableTree
      ref="tableTree"
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
    />
    <p>父子间不关联，checkStrictly设置为true</p>
    <TableTree
      ref="tableTree"
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      check-strictly
    />
    <p>同时显示checkbox和slot，showCheckboxAndSlot设置为true，默认为false</p>
    <p>参考节点1-1</p>
    <TableTree
      ref="tableTree"
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
    <h4>启用展开折叠</h4>
    <p>isFold设置为true，默认为false</p>
    <p>逐级展开</p>
    <TableTree
      ref="tableTree"
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      is-fold
    />
    <p>到某级时全部展开，设置foldNum值</p>
    <p>以下示例设为2，即展开第二级时后面的子孙节点全部展开</p>
    <TableTree
      ref="tableTree"
      :origin-data="originData"
      :table-columns="tableColumns"
      show-checkbox
      is-fold
      :fold-num="2"
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
        tableColumns: []
      }
    }
  },
  created() {
    this.tableColumns = [
      [
        {
          id: 'head1',
          name: '表头1',
          rowSpan: 2,
          colSpan: 1
        },
        {
          id: 'head2',
          name: '表头2',
          rowSpan: 2,
          colSpan: 1
        },
        {
          id: 'head3',
          name: '表头3',
          rowSpan: 1,
          colSpan: 4
        }
      ],
      [
        {
          id: 'head4',
          name: '表头4',
          rowSpan: 1,
          colSpan: 1
        },
        {
          id: 'head5',
          name: '表头5',
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
        nodeOptionalStatus: {
          code: '00',
          name: '',
          text: ''
        },
        editType: {
          code: '00',
          name: '',
          text: ''
        },
        chidrenList: [
          {
            id: 'body1-1',
            nodeLevel: 2,
            nodeName: '节点1-1',
            step: 1,
            parentId: 'body1',
            nodeOptionalStatus: {
              code: '00',
              name: '',
              text: ''
            },
            editType: {
              code: '00',
              name: '',
              text: ''
            },
            chidrenList: [
              {
                id: 'body1-1-1',
                nodeLevel: 3,
                nodeName: '节点1-1-1',
                step: 1,
                parentId: 'body1-1',
                nodeOptionalStatus: {
                  code: '00',
                  name: '',
                  text: ''
                },
                editType: {
                  code: '00',
                  name: '',
                  text: ''
                },
                chidrenList: [
                  {
                    id: 'body1-1-1-1',
                    nodeLevel: 4,
                    nodeName: '节点1-1-1-1',
                    step: 1,
                    parentId: 'body1-1-1',
                    nodeOptionalStatus: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    editType: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    chidrenList: [
                      {
                        id: 'body1-1-1-1-1',
                        nodeLevel: 5,
                        nodeName: '节点1-1-1-1-1',
                        step: 1,
                        parentId: 'body1-1-1-1',
                        nodeOptionalStatus: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        editType: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        chidrenList: [
                          {
                            id: 'body1-1-1-1-1-1',
                            nodeLevel: 6,
                            nodeName: '节点1-1-1-1-1-1',
                            step: 1,
                            parentId: 'body1-1-1-1-1',
                            nodeOptionalStatus: {
                              code: '00',
                              name: '',
                              text: ''
                            },
                            editType: {
                              code: '00',
                              name: '',
                              text: ''
                            },
                            chidrenList: [
                              
                            ]
                          },
                          {
                            id: 'body1-1-1-1-1-2',
                            nodeLevel: 6,
                            nodeName: '节点1-1-1-1-1-2',
                            step: 1,
                            parentId: 'body1-1-1-1-1',
                            nodeOptionalStatus: {
                              code: '00',
                              name: '',
                              text: ''
                            },
                            editType: {
                              code: '00',
                              name: '',
                              text: ''
                            },
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
                    nodeOptionalStatus: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    editType: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    chidrenList: []
                  },
                  {
                    id: 'body1-1-1-3',
                    nodeLevel: 4,
                    nodeName: '节点1-1-1-3',
                    step: 1,
                    parentId: 'body1-1-1',
                    nodeOptionalStatus: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    editType: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    chidrenList: [
                      {
                        id: 'body1-1-1-3-1',
                        nodeLevel: 4,
                        nodeName: '节点1-1-1-3-1',
                        step: 1,
                        parentId: 'body1-1-1-3',
                        nodeOptionalStatus: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        editType: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        chidrenList: []
                      },
                      {
                        id: 'body1-1-1-3-2',
                        nodeLevel: 4,
                        nodeName: '节点1-1-1-3-2',
                        step: 2,
                        parentId: 'body1-1-1-3',
                        nodeOptionalStatus: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        editType: {
                          code: '00',
                          name: '',
                          text: ''
                        },
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
                nodeOptionalStatus: {
                  code: '00',
                  name: '',
                  text: ''
                },
                editType: {
                  code: '00',
                  name: '',
                  text: ''
                },
                chidrenList: [
                  {
                    id: 'body1-1-2-1',
                    nodeLevel: 4,
                    nodeName: '节点1-1-2-1',
                    step: 1,
                    parentId: 'body1-1-2',
                    nodeOptionalStatus: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    editType: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    chidrenList: [
                      {
                        id: 'body1-1-2-1-1',
                        nodeLevel: 5,
                        nodeName: '节点1-1-2-1-1',
                        step: 1,
                        parentId: 'body1-1-2-1',
                        nodeOptionalStatus: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        editType: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        chidrenList: [
                          {
                            id: 'body1-1-2-1-1-1',
                            nodeLevel: 6,
                            nodeName: '节点1-1-2-1-1-1',
                            step: 1,
                            parentId: 'body1-1-2-1-1',
                            nodeOptionalStatus: {
                              code: '00',
                              name: '',
                              text: ''
                            },
                            editType: {
                              code: '00',
                              name: '',
                              text: ''
                            },
                            chidrenList: [
                              
                            ]
                          },
                          {
                            id: 'body1-1-2-1-1-2',
                            nodeLevel: 6,
                            nodeName: '节点1-1-2-1-1-2',
                            step: 1,
                            parentId: 'body1-1-2-1-1',
                            nodeOptionalStatus: {
                              code: '00',
                              name: '',
                              text: ''
                            },
                            editType: {
                              code: '00',
                              name: '',
                              text: ''
                            },
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
        nodeOptionalStatus: {
          code: '00',
          name: '',
          text: ''
        },
        editType: {
          code: '00',
          name: '',
          text: ''
        },
        chidrenList: [
          {
            id: 'body2-1',
            nodeLevel: 2,
            nodeName: '节点2-1',
            step: 1,
            parentId: 'body2',
            nodeOptionalStatus: {
              code: '00',
              name: '',
              text: ''
            },
            editType: {
              code: '00',
              name: '',
              text: ''
            },
            chidrenList: [
              {
                id: 'body2-1-1',
                nodeLevel: 3,
                nodeName: '节点2-1-1',
                step: 1,
                parentId: 'body2-1',
                nodeOptionalStatus: {
                  code: '00',
                  name: '',
                  text: ''
                },
                editType: {
                  code: '00',
                  name: '',
                  text: ''
                },
                chidrenList: [

                ]
              },
              {
                id: 'body2-1-2',
                nodeLevel: 3,
                nodeName: '节点2-1-2',
                step: 1,
                parentId: 'body2-1',
                nodeOptionalStatus: {
                  code: '00',
                  name: '',
                  text: ''
                },
                editType: {
                  code: '00',
                  name: '',
                  text: ''
                },
                chidrenList: [
                  {
                    id: 'body2-1-2-1',
                    nodeLevel: 4,
                    nodeName: '节点2-1-2-1',
                    step: 1,
                    parentId: 'body2-1-2',
                    nodeOptionalStatus: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    editType: {
                      code: '00',
                      name: '',
                      text: ''
                    },
                    chidrenList: [
                      {
                        id: 'body2-1-2-1-1',
                        nodeLevel: 5,
                        nodeName: '节点2-1-2-1-1',
                        step: 1,
                        parentId: 'body2-1-2-1',
                        nodeOptionalStatus: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        editType: {
                          code: '00',
                          name: '',
                          text: ''
                        },
                        chidrenList: [
                          {
                            id: 'body2-1-2-1-1-1',
                            nodeLevel: 6,
                            nodeName: '节点2-1-2-1-1-1',
                            step: 1,
                            parentId: 'body2-1-2-1-1',
                            nodeOptionalStatus: {
                              code: '00',
                              name: '',
                              text: ''
                            },
                            editType: {
                              code: '00',
                              name: '',
                              text: ''
                            },
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
        nodeOptionalStatus: {
          code: '00',
          name: '',
          text: ''
        },
        editType: {
          code: '00',
          name: '',
          text: ''
        },
        chidrenList: []
      },
      {
        id: 'body4',
        nodeLevel: 1,
        nodeName: '节点4',
        step: 1,
        parentId: null,
        nodeOptionalStatus: {
          code: '00',
          name: '',
          text: ''
        },
        editType: {
          code: '00',
          name: '',
          text: ''
        },
        chidrenList: [
          {
            id: 'body4-1',
            nodeLevel: 2,
            nodeName: '节点4-1',
            step: 1,
            parentId: 'body4',
            nodeOptionalStatus: {
              code: '00',
              name: '',
              text: ''
            },
            editType: {
              code: '00',
              name: '',
              text: ''
            },
            chidrenList: []
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