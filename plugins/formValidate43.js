export function formValidate43(data, that) {
  if (!data.d_by || !data.d_by.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写必要性'
    })
    return false
  } else if (!data.d_kx || !data.d_kx.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写可行性'
    })
    return false
  } else {
    return true
  }
}
