<template>
  <div>
    <div ref="tableWrapper" class="tree-table">
      <div v-show="isShowTableHead" ref="tableHeaderWrapper" class="tree-table-wrapper" :style="{ paddingRight: scrollbarWidth + 'px'}">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="tree-table-header"
          style="width: 100%;"
        >
          <thead class="tree-table-header-thead">
            <tr v-for="(trItem, index) in finalTableColumns" :key="index">
              <th v-for="thItem in trItem" :key="thItem.id" :colspan="thItem.colSpan" :rowspan="thItem.rowSpan">
                <div class="text-center">
                  <slot name="title" :node="thItem">
                    {{ thItem.nodeName }}
                  </slot>
                </div>
              </th>
            </tr>
          </thead>
          <tbody style="visibility: collapse;">
            <tr class="tree-table-row">
              <td
                v-for="column in finalColumnNum"
                :key="column"
                :rowspan="1"
                :colspan="1"
              />
            </tr>
          </tbody>
        </table>
      </div>
      <div ref="tableBodyWrapper" class="tree-table-wrapper" :style="{ height: autoHeight, overflow: isShowScrollbar ? 'auto' : 'hidden'}">
        <table
          ref="tableBody"
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="tree-table-body"
          style="width: 100%;"
        >
          <thead style="visibility: collapse;" class="tree-table-header-thead">
            <tr v-for="(trItem, index) in finalTableColumns" :key="index">
              <th v-for="thItem in trItem" :key="thItem.id" :colspan="thItem.colSpan" :rowspan="thItem.rowSpan">
                <div class="text-center">
                  <slot name="title" :node="thItem">
                    {{ thItem.nodeName }}
                  </slot>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tdList, index) in trList" :key="index" class="tree-table-row">
              <td
                v-for="tdData in tdList"
                :key="tdData.id"
                :rowspan="tdData.rowSpan"
                :colspan="tdData.colSpan"
              >
                <div class="td-container">
                  <div v-if="tdData.showFold && isFold" @click="onFold(tdData)">{{ tdData.isFold ? '-' : '+' }}</div>
                  <!-- <i v-if="tdData.nodeLevel <= 2 && isFold" :class="[tdData.isFold ? 'el-icon-minus' : 'el-icon-plus']" @click="onFold(tdData)" /> -->
                  <template v-if="showCheckbox">
                    <el-checkbox
                      v-if="!tdData.nodeType"
                      v-model="tdData.isChecked"
                      class="td-container-checkbox"
                      :disabled="(tdData.editable === falseEditLabel) || (disabledCheckboxNodeLevel ? tdData.nodeLevel <= disabledCheckboxNodeLevel : false) || (disabledCheckboxLevels ? disabledCheckboxLevels.includes(tdData.nodeLevel) : false) || (disabledCheckboxIds ? disabledCheckboxIds.includes(tdData.id) : false)"
                      :true-label="trueCheckLabel"
                      :false-label="falseCheckLabel"
                      @change="val => onCheck(val, tdData)"
                      >{{ tdData.nodeName }}</el-checkbox>
                    <slot v-if="tdData.nodeType || showCheckboxAndSlot" name="node" :node="tdData" />
                  </template>
                  <template v-else>
                    <slot name="node" :node="tdData">
                      <span class="node-text">{{ tdData.nodeName }}</span>
                    </slot>
                  </template>
                </div>
              </td>
            </tr>
            <tr style="visibility: collapse;">
              <td v-for="level of finalColumnNum" :key="level" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TableTree from './utils/tableTree'
import { setTreeFoldStatus, filterTreeByFoldStatus, setTreeFold, getAllCheckedNodeList, getAllParentNodeList, setNodeStatus, setParentCheckYes, setChildrenCheck, parentShouldUnCheck } from './utils'
// import { recursionTreeForMap, getTreeMaxLevel, setTreeFoldStatus, filterTreeByFoldStatus, setTreeFold, getAllCheckedNodeList, getAllParentNodeList, setNodeStatus, setParentCheckYes, setChildrenCheck, parentShouldUnCheck } from './utils'
export default {
  name: 'TableTree',
  props: {
    // 是否启用展开折叠：是-true | 否-false
    isFold: {
      type: Boolean,
      default: false
    },
    foldNum: {
      type: Number,
      default: 0
    },
    // 是否显示复选框：是-true | 否-false
    showCheckbox: {
      type: Boolean,
      default: false
    },
    // 是否同时显示复选框和slot：是-true | 否-false
    showCheckboxAndSlot: {
      type: Boolean,
      default: false
    },
    // checkbox选中的别名
    trueCheckLabel: {
      type: [Boolean, String, Number],
      default: true
    },
    // checkbox未选中的别名
    falseCheckLabel: {
      type: [Boolean, String, Number],
      default: false
    },
    // checkbox可编辑的别名
    trueEditLabel: {
      type: [Boolean, String, Number],
      default: false
    },
    // checkbox不可编辑的别名
    falseEditLabel: {
      type: [Boolean, String, Number],
      default: true
    },
    // 是否显示表头
    isShowTableHead: {
      type: Boolean,
      default: true
    },
    // 是否严格的遵循父子不互相关联：是-true | 否-false
    checkStrictly: {
      type: Boolean,
      default: false
    },
    // 是否后面额外有固定的列拼接：是-true | 否-false
    extraColumn: {
      type: Boolean,
      default: false
    },
    // 仅当extraColumn为true时生效，额外列的数据
    extraColumnObj: {
      type: Object,
      default: () => ({
        columns: [],
        list: []
      })
    },
    // table动态列的表头数据
    tableColumns: {
      type: Array,
      default: () => []
    },
    // tree传入数据
    originData: {
      type: Array,
      default: () => []
    },
    // table传入的高度
    height: {
      type: [String, Number],
      default: 'auto'
    },
    // 置灰checkbox的前几个层级
    disabledCheckboxNodeLevel: {
      type: Number,
      default: 0
    },
    // 置灰checkbox的层级
    disabledCheckboxLevels: {
      type: Array,
      default: () => []
    },
    // 置灰checkbox的ids
    disabledCheckboxIds: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // 源数据
      treeData: [],
      // 展开折叠过滤后的数据
      handleTreeData: [],
      // 树格式为table后的tr列表（实际展示的数据）
      trList: [],
      // 滚动条宽度，用于有滚动条时给表头增加padding来对齐thead和tbody
      scrollbarWidth: 0,
      // 动态列数（需要根据动态列表头计算得到）
      maxColumnNum: 0,
      // 定时器（用于判断页面设置高度后是否有滚动条出现）
      timer: null,
      // 是否显示滚动条
      isShowScrollbar: false
    }
  },
  computed: {
    // 最终列表头 = 动态列表头 + 固定列表头
    finalTableColumns() {
      const tableColumns = JSON.parse(JSON.stringify(this.tableColumns))
      if (this.extraColumn && this.tableColumns.length > 0) {
        const rowSpan = this.tableColumns.length
        const columns = this.extraColumnObj.columns.map(e => {
          e.rowSpan = rowSpan
          return e
        })
        tableColumns[0].push(...columns)
        return tableColumns
      } else {
        return tableColumns
      }
    },
    // 最终列数 = 动态列数 + 固定列数
    finalColumnNum() {
      return this.extraColumn ? (this.maxColumnNum + this.extraColumnObj.columns.length) : this.maxColumnNum
    },
    // 自适应高度
    autoHeight() {
      return typeof (this.height) === 'number' ? ((this.height > 200 ? this.height : 200) + 'px') : this.height
    }
  },
  watch: {
    originData: {
      handler(newVal, oldVal) {
        // 格式化json
        this.treeData = JSON.parse(JSON.stringify(newVal))
        // 映射map
        // const treeMap = recursionTreeForMap(this.treeData)
        // 获取tree最大深度
        // const maxLevel = getTreeMaxLevel(this.treeData)
        // console.log(this.treeData)
        // console.log(treeMap)
        // console.log(maxLevel)
        this.$nextTick(() => {
          // 有折叠展开时的处理
          if (this.isFold) {
            // 设置所有节点为展开
            setTreeFoldStatus(this.treeData, this.foldNum)
            this.refreshTable()
          } else {
            this.getTrList(this.treeData)
          }
        })
      },
      immediate: true,
      deep: true
    },
    tableColumns: {
      handler(newVal, oldVal) {
        const tableColumns = JSON.parse(JSON.stringify(newVal))
        if (tableColumns.length > 0) {
          this.maxColumnNum = this.tableColumns[0].reduce((acc, cur) => {
            return acc + cur.colSpan
          }, 0)
        } else {
          this.maxColumnNum = 0
        }
        // console.log(this.maxColumnNum)
      },
      immediate: true,
      deep: true
    },
    extraColumnObj: {
      handler(newVal, oldVal) {
        this.getTrList(this.treeData)
      },
      immediate: true,
      deep: true
    }
  },
  created() {
  },
  mounted() {
    // Firefox和Chrome早期版本中带有前缀
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    // 创建观察者对象
    const observer = new MutationObserver((mutationmutationList, observers) => {
      // console.log(mutationmutationList, observers)
      this.checkHasScrollerbar()
    })
    // 配置观察选项
    const config = {
      attributes: true,
      subtree: true,
      // attributeFilter: ['style'],
      attributeOldValue: true
    }
    // 传入目标节点和观察选项
    observer.observe(this.$refs.tableBody, config)
    // 随后,你还可以停止观察
    // observer.disconnect()
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.checkHasScrollerbar()
      }, 500)
    })
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    // 判断是否会出现滚动条
    checkHasScrollerbar() {
      const tableWrapper = this.$refs.tableWrapper
      const tableBody = this.$refs.tableBody
      const tableHeaderWrapper = this.$refs.tableHeaderWrapper
      this.isShowScrollbar = tableBody.offsetHeight > (tableWrapper.offsetHeight - tableHeaderWrapper.offsetHeight)
      if (this.isShowScrollbar) {
        clearInterval(this.timer)
        this.scrollbarWidth = this.isShowScrollbar ? 17 : 0
      }
      // if (this.$refs.tableBodyWrapper.offsetWidth > this.$refs.tableBody.offsetWidth) {
      //   clearInterval(this.timer)
      //   this.scrollbarWidth = this.$refs.tableBodyWrapper.offsetWidth - this.$refs.tableBody.offsetWidth
      // }
    },
    /**
     * tree数据结构生成table数据结构
     * @param {Array} tree
     * @return {null}
     */
    getTrList(tree) {
      if (tree) {
        const config = {
          tree: tree,
          maxColumnNum: this.maxColumnNum
        }
        const tableTree = new TableTree(config)
        this.trList = tableTree.generate(this.extraColumn, this.extraColumnObj)
        console.log(this.trList)
      }
    },
    // 重新进行过滤渲染，因为展开折叠修改了数据源实现的
    refreshTable() {
      const handleTreeData = JSON.parse(JSON.stringify(this.treeData))
      console.log(handleTreeData)
      if (this.isFold) {
        // 递归过滤树结构收起的节点
        filterTreeByFoldStatus(handleTreeData)
      }
      this.getTrList(handleTreeData)
    },
    /**
     * 展开折叠事件
     * @param {Object} node 当前节点
     * @param {Number} foldNum
     * @return {null}
     */
    onFold(node) {
      setTreeFold(this.treeData, node, this.foldNum)
      this.refreshTable()
    },
    /**
     * 选择复选框的处理
     * @param {String} val 选择状态
     * @param {Object} node 当前节点
     * @return {null}
     */
    onCheck(val, node) {
      setNodeStatus(this.treeData, node, val)
      if (this.checkStrictly) {
        setNodeStatus(this.treeData, node, val)
        // console.log(this.treeData)
      } else {
        if (val === this.trueCheckLabel) {
          const parentAll = getAllParentNodeList(this.treeData, node.id)
          // console.log(parentAll)
          setParentCheckYes(this.treeData, parentAll, this.trueCheckLabel, this.trueEditLabel)
          setChildrenCheck(this.treeData, node, this.trueCheckLabel, this.trueEditLabel)
        } else if (val === this.falseCheckLabel) {
          setChildrenCheck(this.treeData, node, this.falseCheckLabel, this.trueEditLabel)
          parentShouldUnCheck(this.treeData, node, {
            trueCheckLabel: this.trueCheckLabel,
            falseCheckLabel: this.falseCheckLabel
          })
        }
      }
      console.log(this.treeData)
      this.refreshTable()
    },
    // 获取树的数据
    getTreeData() {
      return this.treeData
    },
    // 获取所有选中的节点
    getCheckedNodeList() {
      const checkedNodeList = getAllCheckedNodeList(this.treeData, this.trueCheckLabel)
      return checkedNodeList
    },
    // 重置节点勾选状态
    resetCheckedNode(list) {
      const rev = data => {
        data.map(e => {
          if (list.includes(e.id)) {
            e.isChecked = this.falseCheckLabel
          }
          if (Array.isArray(e.chidrenList)) {
            rev(e.chidrenList)
          }
          return e
        })
      }
      rev(this.treeData)
      this.refreshTable()
    },
    /**
     * 修改节点属性的值
     * @param {Array} list 当前节点
     * @return {null}
     */
    changeNodeValue(list, key, value) {
      console.log(list, key, value)
      const rev = data => {
        data.map(e => {
          if (list.includes(e.id)) {
            e[key] = value
          }
          if (Array.isArray(e.chidrenList)) {
            rev(e.chidrenList)
          }
          return e
        })
      }
      rev(this.treeData)
      this.refreshTable()
    },
    // 获取额外列的节点数据
    getExtraNodeList() {
      const extraNodeList = []
      this.trList.forEach(e => {
        extraNodeList.push(e.filter(node => node.nodeType === 'extra'))
      })
      return extraNodeList
    }
  }
}
</script>

<style lang="less" scoped>
  .text-center {
    text-align: center;
  }
  .el-checkbox {
    width: 100%;
    padding-left: 5px;
    ::v-deep .el-checkbox__label {
      width: calc(100% - 20px);
      white-space: normal;
      word-break: break-all;
      vertical-align: middle;
    }
  }

  .tree-table {
    border: 1px solid #dfe6ec;
    table {
      table-layout: fixed;
    }
    td, th {
      padding: 10px 0;
      border-bottom: 1px solid #dfe6ec;
      border-right: 1px solid #dfe6ec;
      position: relative;
    }
    &-header {
      &-thead {
        font-size: 14px;
        color: #303030!important;
        th {
          background-color: #F5F7FA;
        }
      }
    }
    &-row {
      td {
        .td-container {
          display: flex;
          padding: 0 5px;
          &-checkbox {
            flex: 1;
          }
          // 字母换行
          .node-text {
            word-break: break-word;
          }
        }
      }
    }
  }
</style>
