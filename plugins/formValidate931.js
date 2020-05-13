export function formValidate931(data, that) {
  if (!data.worker_json || data.worker_json.length === 0) {
    that.$message({
      type: 'error',
      message: '您还未添加主要研究人员，请先添加主要研究人员'
    })
    return false
  } else {
    return true
  }
}
