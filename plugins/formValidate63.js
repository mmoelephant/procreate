export function formValidate63(data, that) {
  if (!data.f_gf || !data.f_gf.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写合作各方简况及现有技术基础和优势等'
    })
    return false
  } else {
    return true
  }
}
