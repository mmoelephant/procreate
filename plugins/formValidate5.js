export function formValidate5(data, that) {
  if (!data.c_mb || !data.c_mb.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写研究目标'
    })
    return false
  } else if (!data.c_cg || !data.c_cg.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写预期成果的名称及表达方式'
    })
    return false
  } else if (!data.c_yy || !data.c_yy.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写成果产出对相关管理工作的作用和应用前景'
    })
    return false
  } else {
    return true
  }
}
