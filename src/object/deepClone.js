/*
 * @Author: czh 1562641145@qq.com
 * @Date: 2022-05-17 09:49:18
 * @LastEditors: czh 1562641145@qq.com
 * @LastEditTime: 2022-05-17 10:16:57
 * @FilePath: \utils_sdk\src\object\deepClone.js
 * @desc: 深拷贝
 * @example:
 * @params      {object}       origin 要克隆的对象
 * @params      {object}       target 克隆的对象输出到哪
 */
function deepClone(origin, target){
    var target = target|| {},
        toStr = Object.prototype.toString,
        arrType = '[object Array]';
    for(var key in origin){
        // 判断是自身对象属性
        if(origin.hasOwnProperty(key)){
            // 判断是否为原始值
            if(typeof(origin[key]) === 'object' && origin[key] !== null){
                if(toStr.call(origin[key]) === arrType){ // 判断数组或对象
                    target[key] = []
                }else{
                    target[key] = {}
                }
                deepClone(origin[key], target[key]) // 递归
            }else{
                target[key] = origin[key]
            }
        }
    }
    return target;
}
module.exports = deepClone;