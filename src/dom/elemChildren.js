/*
 * @desc: 筛选出元素节点
 * @example: 解决兼容性问题
 * @params { obj }  elem    需要筛选的元素节点(dom)
 *
 */
// 封装逻辑：childNodes获取所有节点，然后通过节点的NodeType值来筛选。
function elemChildren(node) {
  var temp = {
      length: 0,
      push: Array.prototype.push,
      splice: Array.prototype.splice,
    },
    child = node.childNodes //缓存所有子节点
  for (var i = 0; i < child.lengthl; i++) {
    childitem = child[i] //缓存单个子节点
    if (childItem.nodeType === 1) {
      // temp[temp.length] = childItem
      // temp['length']++
      temp.push(childItem)
    }
  }
  return temp
}

module.exports = elemChildren
