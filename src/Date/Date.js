// 写在日期对象原型上的方法
Date.prototype.getWeekDay = function (lang) {
  var day = this.getDay()
  switch (day) {
    case 0:
      return lang === 'chs' ? '星期天' : 'Sunday'
      break
    case 1:
      return lang === 'chs' ? '星期一' : 'Monday'
      break
    case 2:
      return lang === 'chs' ? '星期二' : 'Tuesday'
      break
    case 3:
      return lang === 'chs' ? '星期三' : 'Wednesday'
      break
    case 4:
      return lang === 'chs' ? '星期四' : 'Thursday'
      break
    case 5:
      return lang === 'chs' ? '星期五' : 'Friday'
      break
    case 6:
      return lang === 'chs' ? '星期六' : 'Saturday'
      break
  }
}
//数组时钟, 获取年/月/日/时/分/秒
Date.prototype.getDateTime = function () {
  var year = this.getFullYear(),
    month = this.getMonth() + 1,
    day = this.getDate(),
    hours = this.getHours(),
    minutes = this.getMinutes(),
    seconds = this.getSeconds()
  function setZero(num) {
    if (num < 10) {
      num = '0' + num
    }
    return num
  }
  return (
    year +
    '-' +
    setZero(month) +
    '-' +
    setZero(day) +
    ' ' +
    setZero(hours) +
    ':' +
    setZero(minutes) +
    ':' +
    setZero(seconds)
  )
}
// 倒计时
Date.prototype.countDown = function (endTime, timer) {
  var nowTime = this.getTime(),
    leftTime = (endTime - nowTime) / 1000,
    d,
    h,
    m,
    s
  //   console.log(nowTime, endTime, leftTime)
  if (leftTime >= 0) {
    d = Math.floor(leftTime / 60 / 60 / 24)
    h = Math.floor((leftTime / 60 / 60) % 24)
    m = Math.floor((leftTime / 60) % 60)
    s = Math.floor(leftTime % 60)
  } else {
    clearInterval(timer)
    ;(d = 0), (h = 0), (m = 0), (s = 0)
  }
  if (h < 10) h = '0' + h
  if (m < 10) m = '0' + m
  if (s < 10) s = '0' + s

  return d + '天' + h + '小时' + m + '分钟' + s + '秒'
}
