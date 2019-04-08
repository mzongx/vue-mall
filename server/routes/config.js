// 全局配置
// 错误返回的json
exports.errJson = (res, err, result = '') => {
  res.json({
    status: '1',
    msg: err.message,
    result
  })
}
// 成功返回的json
exports.okJson = (res, msg = '', result = '') => {
  res.json({
    status: '0',
    msg,
    result
  })
}
