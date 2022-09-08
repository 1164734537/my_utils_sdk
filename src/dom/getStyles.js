// 获取当前元素所有样式的显示值与默认值(企业级写法)
// （设置了就是显示值，没设置的就是默认值），而且设置的值是绝对值（比如#000，转换成rgba(0, 0, 0)）
// window.getComputedStyle(elem, null)[prop] / window.getComputedStyle(elem, null).prop
// IE8及以下不支持
// elem.currentStyle（chrome浏览器没有）
// IE8及以下支持

// 获取宽高带单位用 parseInt 去掉px
//  null 属性 就是伪元素： 'after' 'before'
// window.getComputedStyle(elem, 'after') 他是只读的，不能修改
function getStyles(elem, prop) {
  if (window.getComputedStyle) {
    if (prop) {
      return window.getComputedStyle(elem, null)[prop]
    } else {
      return window.getComputedStyle(elem, null)
    }
  } else {
    if (prop) {
      return elem.currentStyle[prop]
    } else {
      return elem.currentStyle
    }
  }
}

module.exports = getStyles
