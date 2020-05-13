export function formValidate83(data, that) {
  if (!data.f_jh || !data.f_jh.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写进度计划'
    })
    return false
  } else {
    return true
  }
}
