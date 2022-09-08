const device = {
  isMobileDevice: function () {
    //判断当前设备是否为移动端
    const ua = navigator.userAgent.toLowerCase()
    const t1 = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua)
    const t2 = !ua.match('iphone') && navigator.maxTouchPoints > 1
    return t1 || t2
  },
  isMobilePhone: function () {
    //判断当前设备是手机
    const ua = navigator.userAgent.toLowerCase()
    const t1 = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)
    return t1
  },
  isIOS: function () {
    //是否是苹果
    var u = window.navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //g
    return !isAndroid
  },
  isWeChat: function () {
    //是否是微信
    const ua = navigator.userAgent.toLowerCase()
    return /micromessenger/g.test(ua)
  },
}
module.exports = device
