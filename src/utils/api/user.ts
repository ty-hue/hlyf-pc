import instance, { ResDataType } from '../http'

// 登陆
export const userLogin = async (username: string, password: string): Promise<ResDataType> => {
  const result = (await instance.post(`/api/user/login`, { username, password })) as ResDataType
  console.log(result)

  return result
}
//注册
export const userRegister = async (
  username: string,
  password: string,
  nikename: string
): Promise<ResDataType> => {
  const result = (await instance.post(`/api/user/register`, {
    username,
    password,
    nikename: nikename || username,
  })) as ResDataType
  return result
}
// 登陆
export const userGetInfo = async (): Promise<ResDataType> => {
  const result = (await instance.post(`/api/user/info`)) as ResDataType
  return result
}
