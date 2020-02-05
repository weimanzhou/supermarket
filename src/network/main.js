import { request } from './main.js'

export function getMainMutilData() {
  // 返回的是一个 Promise 对象
  return request({
    url: '/main/mutildata'
  })
}
