/**
 * 包装promise, 使其返回统一的错误格式,用在async，await上
 * @param {Promise} promise
 */
export function to (promise) {
  return promise.then(res => [null, res]).catch(err => [err])
}
