export function formValidate101(data, that) {
  if (!data.g_bz || !data.g_bz.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写申报单位概况'
    })
    return false
  } else {
    return true
  }
}
