export function formValidate(data, that) {
  if (!data.name || !data.name.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入申报单位名称'
    })
    return false
  } else if (!data.idnumber || data.idnumber.length !== 18) {
    that.$message({
      type: 'error',
      message: '请输入正确的统一社会信用代码'
    })
    return false
  } else if (!data.leaderman || !data.leaderman.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入法定代表人'
    })
    return false
  } else if (!data.identity || data.identity.length !== 18) {
    that.$message({
      type: 'error',
      message: '请输入正确的法人身份证号'
    })
    return false
  } else if (that.files1.length === 0) {
    that.$message({
      type: 'error',
      message: '请上传身份证正面扫描件'
    })
    return false
  } else if (that.files2.length === 0) {
    that.$message({
      type: 'error',
      message: '请上传身份证背面扫描件'
    })
    return false
  } else if (!data.mobile || data.mobile.length !== 11) {
    that.$message({
      type: 'error',
      message: '请输入正确的法人手机号'
    })
    return false
  } else if (that.files3.length === 0) {
    that.$message({
      type: 'error',
      message: '请上传营业执照'
    })
    return false
  } else if (!data.enterprise_type) {
    that.$message({
      type: 'error',
      message: '请选择单位性质'
    })
    return false
  } else if (!data.address || !data.address.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入注册地址'
    })
    return false
  } else if (!data.linkman || !data.linkman.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入管理员姓名'
    })
    return false
  } else if (!data.link_identity) {
    that.$message({
      type: 'error',
      message: '请输入管理员身份证号'
    })
    return false
  } else if (data.link_identity.length !== 18) {
    that.$message({
      type: 'error',
      message: '管理员身份证号格式不正确'
    })
    return false
  } else if (!data.tel || !data.tel.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入办公电话'
    })
    return false
  } else if (!data.link_mobile) {
    that.$message({
      type: 'error',
      message: '请输入管理员联系手机号'
    })
    return false
  } else if (data.link_mobile.length !== 11) {
    that.$message({
      type: 'error',
      message: '管理员联系手机号格式不正确'
    })
    return false
  } else if (!data.qq || !data.qq.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入管理员联系qq'
    })
    return false
  } else if (!data.wxnumber || !data.wxnumber.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入管理员联系微信号'
    })
    return false
  } else if (
    !data.link_address ||
    !data.link_address.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入管理员通讯地址'
    })
    return false
  } else {
    return true
  }
}
