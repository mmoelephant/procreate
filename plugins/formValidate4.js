export function formValidate4(data, that) {
  console.log('来到了方法4')
  if (!data.b_xz || !data.b_xz.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写研究现状'
    })
    return false
  } else if (!data.b_zb || !data.b_zb.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写技术指标'
    })
    return false
  } else if (!data.b_wt || !data.b_wt.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写存在的问题'
    })
    return false
  } else if (!data.b_qs || !data.b_qs.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写发展趋势'
    })
    return false
  } else {
    console.log('通过了方法4')
    return true
  }
}
