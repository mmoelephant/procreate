import md5 from 'js-md5'
import { sortASCII } from './sortkey'
export function datawork(data) {
  let strJoin
  // 第一步：获取排序后的对象
  const data1 = sortASCII(data)
  // 第二步：将排序后的对象拼接成字符串
  for (const i in data1) {
    strJoin += '&' + i + '=' + data1[i]
  }
  // 第三步：加上appsecret的拼接字符串,使用MD5加密生成密钥
  const sign = md5(
    strJoin.slice(10) + '&appsecret=ec19870703a11c3d71aey36b730fz0e5'
  ).toUpperCase()
  // 第四步：将生成的sign加入到请求参数对象中
  data1.sign = sign
  // 第六步：重新排序
  const data2 = sortASCII(data1)
  return data2
}
