// HTML页面尺寸
// document.body.scrollHeight/scrollWidth（常用）
// document.documentElement.scrollHeight/scrollWidth（IE567支持）
// 指整个文档的高度和宽度
// 相当于：window.innerWidth + winow.pageXOffset 可视宽度 + 滚动距离

function getScrollSize() {
  if (document.body.scrollWidth) {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
    }
  } else {
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    }
  }
}

module.exports = getScrollSize
