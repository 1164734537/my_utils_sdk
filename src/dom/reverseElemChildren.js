// 子元素倒序  利用了appendChild 的剪切性质
function reverseElemChildren(node) {
  var children = node.childNodes,
    len = children.length
  while (len--) {
    console.log(children[len])
    node.appendChild(children[len])
  }
}

module.exports = reverseElemChildren
