export function formValidate52(data, that) {
  if (!data.b_gk || !data.b_gk.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目概况'
    })
    return false
  } else {
    return true
  }
}
