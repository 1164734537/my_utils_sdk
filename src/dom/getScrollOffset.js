// 滚动条的距离
// 查看滚动条的距离
// 常规
// window.pageXOffset/pageYOffset

// IE9/IE8及一下不支持

// IE9/IE8及一下支持
// document.body.scrollLeft/scrollTop

// document.documentElement.scrollLeft/scrollTop

// 不常见
// window.scrollX/scrollY
function getScrollOffset() {
  // 常规
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset,
    }
  } else {
    // ie
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    }
  }
}
module.exports = getScrollOffset
