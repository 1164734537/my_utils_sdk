// 写在元素原型上的方法
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
