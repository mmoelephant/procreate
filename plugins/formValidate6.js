export function formValidate6(data, that) {
  if (!data.d_nr || !data.d_nr.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写主要研究内容'
    })
    return false
  } else if (!data.d_cx || !data.d_cx.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写创新点'
    })
    return false
  } else if (!data.d_zb || !data.d_zb.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写考核指标'
    })
    return false
  } else {
    return true
  }
}
