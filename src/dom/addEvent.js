/*
 * @desc: 封装事件处理函数
 * @example: 解决兼容性问题
 * @ params { obj }     elem    绑定在谁身上(dom)
 * @ params { str }     type    事件类型
 * @ params { fun }     fn  事件处理函数
 */
function addEvent(elem, type, fn) {
  if (elem.addEventListener) {
    elem.addEventListener(type, fn, false)
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + type, fn)
  } else {
    elem['on' + type] = fn
  }
}

module.exports = addEvent
