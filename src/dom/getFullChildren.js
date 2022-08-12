// 遍历父级元素下面的所有子元素节点
function getFullChildren(node) {
  var children = node.childNodes,
    len = children.length,
    item
  if (node && node.nodeType === 1) {
    console.log(node)
  }
  for (var i = 0; i < len; i++) {
    item = children[i]
    if (item.nodeType == 1) {
      getFullChildren(item)
    }
  }
}

module.exports = getFullChildren
