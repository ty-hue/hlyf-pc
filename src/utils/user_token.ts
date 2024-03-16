/**
 * @description 存储/获取token
 * @author TangYang
 */
const KEY = 'USER_TOKEN'
export const getToken = () => localStorage.getItem(KEY)

export const setToken = (token: string) => localStorage.setItem(KEY, token)

export const removeToken = () => localStorage.removeItem(KEY)
