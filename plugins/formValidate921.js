export function formValidate921(data, that) {
  if (!data.f_jb || !data.f_jb.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目实施对推动住房建设领域科技进步有作用'
    })
    return false
  } else if (!data.f_xy || !data.f_xy.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写社会、经济、环境效益分析'
    })
    return false
  } else if (!data.f_sf || !data.f_sf.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目示范意义'
    })
    return false
  } else {
    return true
  }
}
