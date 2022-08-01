/*
 * @Author: czh 1562641145@qq.com
 * @Date: 2022-05-16 13:05:19
 * @LastEditors: czh 1562641145@qq.com
 * @LastEditTime: 2022-05-16 14:07:25
 * @FilePath: \utils_sdk\src\string\bytesCount.js
 * @desc: 计算当前字符串字节数
 * @param       {String} str        需要计算字节数的字符串
 * @return      {Number} len        返回的字节数长度
 * Copyright (c) 2022 by czh 1562641145@qq.com, All Rights Reserved. 
 */
function bytesCount(str){
    var len = str.length;
    for(var i=0;i<len;i++){
        if(str.charCodeAt(i)>255){
            len++;
        }
    }
    return len;
}

module.exports = bytesCount