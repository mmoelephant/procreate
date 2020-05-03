export function formValidate(data, that) {
  if (!data.enterprise_name) {
    that.$message({
      type: 'error',
      message: '请输入申报单位名称'
    })
    return false
  } else if (!data.enterprise_code || data.enterprise_code !== 18) {
    that.$message({
      type: 'error',
      message: '请输入正确的统一社会信用代码'
    })
    return false
  } else if (!data.leaderman) {
    that.$message({
      type: 'error',
      message: '请输入法人姓名'
    })
    return false
  } else if (!data.idnumber || data.idnumber.length !== 18) {
    that.$message({
      type: 'error',
      message: '请输入正确的法人身份证号'
    })
    return false
  } else if (data.files1.length === 0) {
    that.$message({
      type: 'error',
      message: '请上传身份证正面扫描件'
    })
    return false
  } else if (data.files2.length === 0) {
    that.$message({
      type: 'error',
      message: '请上传身份证背面扫描件'
    })
    return false
  } else if (!data.leaderphone || data.leaderphone.length !== 11) {
    that.$message({
      type: 'error',
      message: '请输入正确的法人手机号'
    })
    return false
  } else if (data.files3.length === 0) {
    that.$message({
      type: 'error',
      message: '请上传营业执照'
    })
    return false
  } else if (!data.unitype) {
    that.$message({
      type: 'error',
      message: '请选择单位性质'
    })
    return false
  } else if (!data.regisaddre) {
    that.$message({
      type: 'error',
      message: '请输入注册地址'
    })
    return false
  } else if (!data.adminname) {
    that.$message({
      type: 'error',
      message: '请输入管理员姓名'
    })
    return false
  } else if (!data.adminid) {
    that.$message({
      type: 'error',
      message: '请输入管理员身份证号'
    })
    return false
  } else if (!data.adminphone) {
    that.$message({
      type: 'error',
      message: '请输入办公电话'
    })
    return false
  } else if (!data.adminmobile) {
    that.$message({
      type: 'error',
      message: '请输入管理员联系手机号'
    })
    return false
  } else if (!data.adminqq) {
    that.$message({
      type: 'error',
      message: '请输入管理员联系qq'
    })
    return false
  } else if (!data.adminwx) {
    that.$message({
      type: 'error',
      message: '请输入管理员联系微信号'
    })
    return false
  } else if (!data.adminaddre) {
    that.$message({
      type: 'error',
      message: '请输入管理员通讯地址'
    })
    return false
  } else {
    return true
  }
}
