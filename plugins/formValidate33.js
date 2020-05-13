export function formValidate33(data, that) {
  if (!data.name || !data.name.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目名称'
    })
    return false
  } else if (!data.a_nx || !data.a_nx.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目研发类型'
    })
    return false
  } else if (!data.a_hz || !data.a_hz.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写项目合作协议（协定）种类'
    })
    return false
  } else if (!data.a_xy || !data.a_xy.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写协议名称'
    })
    return false
  } else if (!data.a_gb || !data.a_gb.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请填写合作国别'
    })
    return false
  } else if (!data.a_qs) {
    that.$message({
      type: 'error',
      message: '请选择合作起始日期'
    })
    return false
  } else if (!data.a_zz) {
    that.$message({
      type: 'error',
      message: '请选择合作终止日期'
    })
    return false
  } else {
    return true
  }
}
