// 判空
export function isEmpty(val) {
  return val === undefined || val === null || val === ''
}

/**
 * tree每个node映射成一个map
 * @param {Array} tree
 * @return {Map}
 */
export function recursionTreeForMap(tree) {
  const map = new Map()
  const rev = arr => {
    arr.forEach(e => {
      map.set(e.id, e)
      if (Array.isArray(e.chidrenList)) {
        rev(e.chidrenList)
      }
    })
  }
  rev(tree)
  return map
}

/**
 * 递归获取tree最大层级
 * @param {Array} tree
 * @return {Number}
 */
export function getTreeMaxLevel(tree) {
  let maxLevel = 0
  const rev = arr => {
    arr.forEach(e => {
      if (e.nodeLevel > maxLevel) {
        maxLevel = e.nodeLevel
      }
      if (Array.isArray(e.chidrenList)) {
        rev(e.chidrenList)
      }
    })
  }
  rev(tree)
  return maxLevel
}

/**
 * 递归设置树结构展开收起状态
 * @param {Array} tree
 * @return {null}
 */
export function setTreeFoldStatus(tree, foldNum) {
  tree.map(e => {
    e.isFold = false
    if (e.nodeLevel > foldNum && foldNum > 0) {
      e.isFold = true
    }
    if (e.nodeLevel <= foldNum || foldNum === 0) {
      e.showFold = true
    } else {
      e.showFold = false
    }
    e.showFold = e.chidrenList.length === 0 ? false : e.showFold
    if (Array.isArray(e.chidrenList)) {
      setTreeFoldStatus(e.chidrenList, foldNum)
    }
    return e
  })
}

/**
 * 递归设置树结构展开或者收起节点
 * @param {Array} tree
 * @param {Object} node
 * @param {Number} foldNum
 * @return {null}
 */
export function setTreeFold(tree, node, foldNum) {
  tree.map(e => {
    if (node.id === e.id) {
      e.isFold = !e.isFold
    } else {
      if (Array.isArray(e.chidrenList)) {
        setTreeFold(e.chidrenList, node, foldNum)
      }
    }
    return e
  })
}

/**
 * 递归过滤树结构收起的节点
 * @param {Array} tree
 * @return {null}
 */
export function filterTreeByFoldStatus(arr) {
  arr.map(item => {
    if (item.isFold) {
      if (item && item.chidrenList.length > 0) {
        filterTreeByFoldStatus(item.chidrenList)
      }
    } else {
      item.chidrenList = []
    }
    return item
  })
}

/**
 * 递归获取树结构所有选中的节点
 * @param {Array} tree
 * @return {Array}
 */
export function getAllCheckedNodeList(tree) {
  const checkedList = []
  const rev = data => {
    data.forEach(e => {
      if (e.nodeOptionalStatus.code === '10') {
        checkedList.push(e)
      }
      if (Array.isArray(e.chidrenList)) {
        rev(e.chidrenList)
      }
    })
  }
  rev(tree)
  return checkedList
}

/**
 * 递归设置树结构的某个节点选中
 * @param {Array} tree
 * @param {Object} node
 * @param {String} status
 * @return {null}
 */
export function setNodeStatus(tree, node, status) {
  tree.map(e => {
    if (node.id === e.id) {
      e.nodeOptionalStatus.code = status
    } else {
      if (Array.isArray(e.chidrenList)) {
        setNodeStatus(e.chidrenList, node, status)
      }
    }
    return e
  })
}

/**
 * 递归获取树结构所有父级节点
 * @param {Array} tree
 * @param {String} nodeId
 * @return {Array}
 */
export function getAllParentNodeList(tree, nodeId) {
  var arrRes = []
  if (tree && tree.length === 0) {
    if (nodeId) {
      arrRes.unshift(nodeId)
    }
    return arrRes
  }
  const rev = (data, id) => {
    for (var i = 0, length = data.length; i < length; i++) {
      const node = data[i]
      if (node.id === id) {
        arrRes.unshift(id)
        if (isEmpty(node.parentId)) {
          break
        } else {
          rev(tree, node.parentId)
          break
        }
      } else {
        if (Array.isArray(node.chidrenList)) {
          rev(node.chidrenList, id)
        }
      }
    }
    return arrRes
  }
  arrRes = rev(tree, nodeId)
  return arrRes
}

/**
 * 递归设置树结构的节点选中
 * @param {Array} tree
 * @param {String} checkedNodeList
 * @param {String} status
 * @return {null}
 */
export function setParentCheckYes(tree, checkedNodeList, status) {
  tree.map(e => {
    if (checkedNodeList.includes(e.id) && e.editType.code === '00') {
      e.nodeOptionalStatus.code = status
    }
    if (Array.isArray(e.chidrenList)) {
      setParentCheckYes(e.chidrenList, checkedNodeList, status)
    }
    return e
  })
}

/**
 * 递归设置树结构的节点取消选中
 * @param {Array} tree
 * @param {Object} node
 * @param {String} status
 * @return {null}
 */
export function setChildrenCheck(tree, node, status) {
  tree.map(item => {
    if (node.id === item.id) {
      const rev = (data) => {
        data.map(e => {
          if (e.editType.code === '00') {
            e.nodeOptionalStatus.code = status
          }
          if (e && e.chidrenList.length > 0) {
            rev(e.chidrenList)
          }
          return e
        })
      }
      rev(item.chidrenList)
    } else {
      if (item && item.chidrenList.length > 0) {
        setChildrenCheck(item.chidrenList, node, status)
      }
    }
    return item
  })
}

/**
 * 递归获取树中当前id的node
 * @param {Array} tree
 * @param {String} nodeId
 * @return {null}
 */
export function recursionTreeForNode(tree, nodeId) {
  let node = {}
  const rev = data => {
    data.forEach(e => {
      if (e.id === nodeId) {
        node = e
      }
      if (Array.isArray(e.chidrenList)) {
        rev(e.chidrenList)
      }
    })
  }
  rev(tree)
  return node
}

/**
 * 递归取消节点的父节点是否应该取消
 * @param {Array} tree
 * @param {Object} node
 * @return {null}
 */
export function parentShouldUnCheck(arr, node) {
  const parentNode = recursionTreeForNode(arr, node.parentId)
  if (!parentNode.chidrenList) return
  const isShouldCheck = parentNode.chidrenList.some(e => {
    return e.nodeOptionalStatus.code === '10'
  })
  // 如果子级全部未勾选，父级也取消勾选
  if (!isShouldCheck) {
    parentNode.nodeOptionalStatus.code = '00'
  }
  if (parentNode.nodeLevel > 1) {
    parentShouldUnCheck(arr, parentNode)
  }
}
