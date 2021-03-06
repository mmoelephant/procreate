export function formValidate21(data, that) {
  if (!data.name || !data.name.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入项目名称'
    })
    return false
  } else if (
    !data.enterprise_name ||
    !data.enterprise_name.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入申报单位'
    })
    return false
  } else if (!data.starttime) {
    that.$message({
      type: 'error',
      message: '请选择起始时间'
    })
    return false
  } else if (!data.endtime) {
    that.$message({
      type: 'error',
      message: '请选择完成时间'
    })
    return false
  } else if (!data.address || !data.address[0]) {
    that.$message({
      type: 'error',
      message: '请至少输入一个项目所在地'
    })
    return false
  } else if (
    !data.study_content ||
    !data.study_content.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入主要研究内容'
    })
    return false
  } else if (
    !data.check_content ||
    !data.check_content.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入考核指标'
    })
    return false
  } else if (
    !data.expect_content ||
    !data.expect_content.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入研究成果'
    })
    return false
  } else if (
    !data.leader_name ||
    !data.leader_name.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入负责人姓名'
    })
    return false
  } else if (
    !data.leader_mobile ||
    !data.leader_mobile.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入负责人电话'
    })
    return false
  } else if (
    !data.leader_email ||
    !data.leader_email.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入负责人电子邮箱'
    })
    return false
  } else if (
    !data.leader_job ||
    !data.leader_job.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入负责人职务/职称'
    })
    return false
  } else if (
    !data.leader_address ||
    !data.leader_address.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入负责人通讯地址'
    })
    return false
  } else if (
    !data.leader_company ||
    !data.leader_company.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入负责人所在单位'
    })
    return false
  } else if (!data.link_name || !data.link_name.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入经办人姓名'
    })
    return false
  } else if (
    !data.link_mobile ||
    !data.link_mobile.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入经办人电话'
    })
    return false
  } else if (
    !data.link_email ||
    !data.link_email.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入经办人电子邮箱'
    })
    return false
  } else if (!data.link_job || !data.link_job.replace(/(^\s*)|(\s*$)/g, '')) {
    that.$message({
      type: 'error',
      message: '请输入经办人职务/职称'
    })
    return false
  } else if (
    !data.link_address ||
    !data.link_address.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入经办人通讯地址'
    })
    return false
  } else if (
    !data.link_company ||
    !data.link_company.replace(/(^\s*)|(\s*$)/g, '')
  ) {
    that.$message({
      type: 'error',
      message: '请输入经办人所在单位'
    })
    return false
  } else {
    return true
  }
}
