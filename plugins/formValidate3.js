export function formValidate3(data, that) {
  if (!data.a_md || !data.a_md.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写研究目的'
    })
    return false
  } else if (!data.a_yj || !data.a_yj.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写选题依据'
    })
    return false
  } else if (!data.a_yy || !data.a_yy.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写研发意义'
    })
    return false
  } else {
    return true
  }
}
