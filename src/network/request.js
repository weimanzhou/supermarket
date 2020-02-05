import axios from 'axios'

export function request(config) {
  // 创建 axios 的实例
  const instance = axios.create({
    baseUrl: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 创建 request 拦截器
  instance.interceptors.request.use(config => {
    return config
  }, errpr => {
    console.log(error)
  })

  // 创建 response 拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })

  return instance(config)

}
