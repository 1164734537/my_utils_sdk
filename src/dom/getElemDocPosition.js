// 获取元素到文档的top/left距离
// 返回有定位的父级元素，如果父级元素都没有定位就返回body
function getElemenDocPosition(el) {
  var parent = el.offsetParent,
    offsetLeft = el.offsetLeft,
    offsetTop = el.offsetTop

  while (parent) {
    offsetLeft += parent.offsetLeft
    offsetTop += parent.offsetTop
    parent = parent.offsetParent
  }

  return {
    left: offsetLeft,
    top: offsetTop,
  }
}

module.exports = getElemenDocPosition
