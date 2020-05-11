export function formValidate82(data, that) {
  if (!data.e_js || !data.e_js.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写实施技术路线'
    })
    return false
  } else if (!data.e_jh || !data.e_jh.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写工作计划'
    })
    return false
  } else if (!data.e_zh || !data.e_zh.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写成果转化'
    })
    return false
  } else if (!data.e_tg || !data.e_tg.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写服务推广计划'
    })
    return false
  } else {
    return true
  }
}
