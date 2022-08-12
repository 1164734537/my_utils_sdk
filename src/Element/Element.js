// 写在元素原型上的方法
// 遍历一个父元素的（第几个）子节点，不指定，全部返回
// 返回子节点
// 对 nodeType 进行的封装
Element.prototype.elemChildren = function (index) {
  var childNodes = this.childNodes,
    len = childNodes.length,
    item,
    type = typeof index
  var temp = {
    length: 0,
    push: Array.prototype.push,
    splice: Array.prototype.splice,
  }
  for (var i = 0; i < len; i++) {
    item = childNodes[i]
    if (item.nodeType == 1) {
      temp.push(item)
    }
  }
  if (index !== undefined && type !== 'number') {
    return undefined
  }
  return index === undefined ? temp : temp[index]
}

// 在原形上写出一个元素的第N层父级元素
// 返回元素节点
// 对 parentNode 进行的封装
Element.prototype.elemParent = function (n) {
  var type = typeof n,
    elem = this
  if (n !== undefined && type !== 'number') {
    return undefined
  } else if (n < 0) {
    return undefined
  }
  while (n) {
    if (elem.nodeName === 'HTML') {
      elem = null
      return elem
    }
    elem = elem.parentNode
    n--
  }
  return elem
}
// 判断元素有没有子元素节点
// 返回布尔值
// nodeType 与 childNodes 的搭配
Element.prototype.hasChildren = function () {
  var children = this.childNodes,
    len = children.length,
    item
  for (var i = 0; i < len; i++) {
    item = children[i]
    if (item.nodeType === 1) {
      return true
    }
  }
  return false
}
// 找兄弟元素节点。参数为正，找之后的第N个；参数为负，找之前的第N个；参数N为0，找到自己
// node.nextElementSibling / node.previousElementSibling 的封装
Element.prototype.elemSibling = function (n) {
  var elem = this
  while (n) {
    if (n > 0) {
      elem = elem.nextSibling
      while (elem && elem.nodeType !== 1) {
        elem = elem.nextSibling
      }
      n--
    } else if (n < 0) {
      elem = elem.previousSibling
      while (elem && elem.nodeType !== 1) {
        elem = elem.previousSibling
      }
      n++
    }
  }

  return elem
}

// 封装inserAfter方法
//利用 insertBefore和 appendChild 封装
Element.prototype.insertAfter = function (target, afterNode) {
  var nextElem = afterNode.nextElementSibling
  if (nextElem) {
    this.insertBefore(target, nextElem)
  } else {
    this.appendChild(target)
  }
}


