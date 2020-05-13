export function formValidate104(data, that) {
  if (data.files1.length === 0) {
    that.$message({
      type: 'error',
      message: '您还未上传附件，请先上传附件'
    })
    return false
  } else {
    return true
  }
}
