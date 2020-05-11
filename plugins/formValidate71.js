export function formValidate71(data, that) {
  if (!data.e_sl || !data.e_sl.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写研究思路和方法'
    })
    return false
  } else if (!data.e_mb || !data.e_mb.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写阶段目标'
    })
    return false
  } else if (!data.e_jd || !data.e_jd.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写进度安排'
    })
    return false
  } else {
    return true
  }
}
