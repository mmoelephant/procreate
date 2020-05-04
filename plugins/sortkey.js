export function sortASCII(obj) {
  const arr = []
  let num = 0
  for (const i in obj) {
    arr[num] = i
    num++
  }
  const sortArr = arr.sort()
  const sortObj = {}
  for (const i in sortArr) {
    sortObj[sortArr[i]] = obj[sortArr[i]]
  }
  return sortObj
}
