export function formValidate9(data, that) {
  if (!that.worker_json || that.worker_json.length === 0) {
    that.$message({
      type: 'error',
      message: '您还未添加主要研究人员，请先添加主要研究人员'
    })
    return false
  } else {
    return true
  }
}
