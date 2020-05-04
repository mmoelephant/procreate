export function objectToFormdata(obj, form, namespace) {
  /* eslint-disable */
  const fd = form || new FormData()
  let formkey
  if (obj instanceof Array) {
    // 当obj是数组时
    for (const item of obj) {
      // 当传进来的obj中的项是对象且不是文件类型，执行if中的语句，如果不是就执行else中的语句
      if (typeof item === 'object' && !(item instanceof File)) {
        objectToFormdata(item, fd, namespace + '[]')
      } else {
        // 若是数组则在关键字后面加上[]
        fd.append(namespace + '[]', item)
      }
    }
  } else {
    // 当obj是对象的时候
    for (const i in obj) {
      if (obj.hasOwnProperty(i) && obj[i]) {
        if (namespace) {
          formkey = namespace + '[' + i + ']'
        } else {
          formkey = i
        }
        if (typeof obj[i] === 'object' && !(obj[i] instanceof File)) {
          objectToFormdata(obj[i], fd, formkey)
        } else {
          fd.append(formkey, obj[i])
        }
      }
    }
  }
  return fd
}
