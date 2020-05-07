export function formValidate8(data, that) {
  if (!data.f_jc || !data.f_jc.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写研究基础'
    })
    return false
  } else if (!data.f_rw || !data.f_rw.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写任务分工及主要科研条件'
    })
    return false
  } else if (!data.f_td || !data.f_td.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目负责人以及团队'
    })
    return false
  } else if (!data.f_zj || !data.f_zj.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写资金概算和来源'
    })
    return false
  } else {
    return true
  }
}
