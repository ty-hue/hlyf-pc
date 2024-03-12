import { message } from 'antd'
import axios from 'axios'

const instance = axios.create({
  timeout: 10 * 1000,
})
//对errno msg进行统一处理，并且从res中结构出data进行返回，让数据更纯粹
instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData
  if (res.status === 200) {
    // 对业务错误依据状态码进行统一处理
    if (errno !== 0) {
      message.error(msg)
    }
  } else {
    // 后端的锅
    message.error('联系后端开发人员检查bug')
  }
  return data as any
})

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
export default instance
