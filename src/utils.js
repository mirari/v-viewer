// 实现jquery对象继承，支持深拷贝
export function extend () {
  const extended = {}
  let deep = false
  let i = 0
  const length = arguments.length

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0]
    i++
  }

  function merge (obj) {
    for (let prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop])
        } else {
          extended[prop] = obj[prop]
        }
      }
    }
  }

  for (; i < length; i++) {
    var obj = arguments[i]
    merge(obj)
  }

  return extended
}
