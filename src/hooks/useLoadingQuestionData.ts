import { useParams } from 'react-router-dom'
import { getQuestionService } from '../utils/api/question'
import { useRequest } from 'ahooks'

function useLoadingQuestionData() {
  const { id = '' } = useParams()
  const load = async () => {
    const res = await getQuestionService(id)
    return res
  }
  const { data, loading, error } = useRequest(load)
  return { loading, data, error }
}

export default useLoadingQuestionData
