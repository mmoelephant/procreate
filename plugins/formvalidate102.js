export function formValidate102(data, that) {
  if (!data.partner_json || data.partner_json.length === 0) {
    that.$message({
      type: 'error',
      message: '您还未添加项目合作单位，请先添加项目合作单位'
    })
    return false
  } else {
    return true
  }
}
