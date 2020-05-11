export function formValidate72(data, that) {
  if (!data.d_nr || !data.d_nr.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目示范内容'
    })
    return false
  } else if (!data.d_gj || !data.d_gj.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写关键问题和难点分析'
    })
    return false
  } else if (!data.d_zb || !data.d_zb.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写考核指标'
    })
    return false
  } else if (!data.d_cx || !data.d_cx.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写创新点'
    })
    return false
  } else {
    return true
  }
}
