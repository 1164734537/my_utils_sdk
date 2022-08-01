/*
 * @Author: czh 1562641145@qq.com
 * @Date: 2022-05-16 14:03:06
 * @LastEditors: czh 1562641145@qq.com
 * @LastEditTime: 2022-05-16 17:08:24
 * @FilePath: \utils_sdk\src\dom\addEvent.js
 * @desc: 封装事件处理函数
 * @example: 解决兼容性问题
 * Copyright (c) 2022 by czh 1562641145@qq.com, All Rights Reserved.
 * @ params { obj }     elem    绑定在谁身上(dom)
 * @ params { str }     type    事件类型
 * @ params { fun }     fn  事件处理函数
 */
function addEvent(elem, type, fn) {
    if(elem.addEventListener){
        elem.addEventListener(type, fn, false);
    }else if(elem.attachEvent) {
        elem.attachEvent('on'+type, fn);
    }else{
        elem['on'+type] = fn; 
    }
}

module.exports = addEvent;
