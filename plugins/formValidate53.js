export function formValidate53(data, that) {
  if (!data.e_nr || !data.e_nr.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写合作内容及预期目标'
    })
    return false
  } else {
    return true
  }
}
