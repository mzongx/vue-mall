/**
* 封装axios，配置拦截
*/
import axios from 'axios'

// 创建一个axios实例, instance实例的功能相当于axios
let instance = axios.create({
  baseURL: '/api',
  timeout: 6000
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

/**
 * 使用es6的export default导出一个函数，这个函数相当于axios
 * 函数的参数及返回值如下
 * @export
 * @param {String} method  请求方法：get,post,put,delete
 * @param {String} url  请求的url
 * @param {Object} [data]  请求的参数
 * @returns {Promise} 返回一个Promise对象，相当于axios的请求数据返回值
 */
export default function (method, url, data = null) {
  method = method.toLowerCase()
  switch (method) {
    case 'post':
      return instance.post(url, data)
    case 'get':
      return instance.get(url, { params: data })
    case 'put':
      return instance.put(url, data)
    case 'delete':
      return instance.delete(url, { params: data })
    default:
      console.error('未知的method' + method)
      break
  }
}
