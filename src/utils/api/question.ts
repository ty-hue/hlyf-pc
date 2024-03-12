import instance, { ResDataType } from '../http'

export const getQuestionService = async (id: string): Promise<ResDataType> => {
  const result = (await instance.get(`/api/question/:${id}`)) as ResDataType
  return result
}
