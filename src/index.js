/*
 * @Author: czh 1562641145@qq.com
 * @Date: 2022-05-06 14:20:40
 * @LastEditors: czh 1562641145@qq.com
 * @LastEditTime: 2022-05-16 11:29:11
 * @FilePath: \utils_sdk\src\index.js
 * @desc: webpack打包入口文件
 * @example: 自动引入子目录下所有js文件
 *
 */

let moduleExports = {}
/* require.context是webpack的一个api，
   通过执行require.context()函数，来获取指定的文件夹内的特定文件，
   在需要多次从同一个文件夹内倒入的模块，使用这个函数可以自动倒入，
   不用每个都显示的写import来引入。
 */
const r = require.context('./', true, /^\.\/.+\/.+\.js$/)
r.keys().forEach((key) => {
  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  moduleExports[attr] = r(key)
})
module.exports = moduleExports
