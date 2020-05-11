export function formValidate42(data, that) {
  if (!data.a_jc || !data.a_jc.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写申报单位相关工作基础'
    })
    return false
  } else {
    return true
  }
}
