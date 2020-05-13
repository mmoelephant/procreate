export function formValidate73(data, that) {
  if (!data.f_tj || !data.f_tj.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目合作方式及已具备的合作基础和条件'
    })
    return false
  } else {
    return true
  }
}
