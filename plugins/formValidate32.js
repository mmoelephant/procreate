export function formValidate32(data, that) {
  if (!data.a_gk || !data.a_gk.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写申报单位概况'
    })
    return false
  } else {
    return true
  }
}
