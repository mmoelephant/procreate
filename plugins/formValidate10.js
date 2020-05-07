export function formValidate10(data, that) {
  if (!that.partner_json || that.partner_json.length === 0) {
    that.$message({
      type: 'error',
      message: '您还未添加项目合作单位，请先添加项目合作单位'
    })
    return false
  } else {
    return true
  }
}
