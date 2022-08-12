// 浏览器可视区域的尺寸(窗口宽高)
// 常规
// window.innerWidth/innerHeight
// IE9/IE8及一下支持
// 标准： document.documentElement.clientWidth/clientHeight（不包括滚动条）
// 怪异 document.body.clientWidth/clientHeight

function getViewportSize() {
  if (window.innerWidth) {
    //   常规
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  } else {
    if (document.compatMode === 'BackCompat') {
      //怪异模型下
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }
    } else {
      // 标准模型下
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      }
    }
  }
}
module.exports = getViewportSize