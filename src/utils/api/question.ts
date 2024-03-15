import instance, { ResDataType } from '../http'
type SearchOptions = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
  current: string
  pageSize: string
}
// 获取单个问卷信息
export const getQuestionService = async (id: string): Promise<ResDataType> => {
  const result = (await instance.get(`/api/question/:${id}`)) as ResDataType
  return result
}
//创建问卷
export const createQuestionService = async (): Promise<ResDataType> => {
  const result = (await instance.post(`/api/question`)) as ResDataType
  return result
}
//获取（查询）问卷
export const getQuestionListService = async (
  opt: Partial<SearchOptions> = {}
): Promise<ResDataType> => {
  const result = (await instance.get(`/api/question`, { params: opt })) as ResDataType
  return result
}
