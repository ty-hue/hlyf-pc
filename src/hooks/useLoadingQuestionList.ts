import { useRequest } from 'ahooks'
import { getQuestionListService } from '../utils/api/question'
import { useSearchParams } from 'react-router-dom'
import {
  LIST_SEARCH_PARAM_KEY,
  List_SEARCH_PARAM_CURRENT,
  List_SEARCH_PARAM_PAGE_SIZE,
} from '../constant'
List_SEARCH_PARAM_CURRENT
type OptionType = {
  isStar: boolean
  isDeleted: boolean
}
function useLoadingQuestionList(opt: Partial<OptionType>) {
  const { isStar = false, isDeleted = false } = opt
  const [searchParams] = useSearchParams()

  const load = async () => {
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    const current = searchParams.get(List_SEARCH_PARAM_CURRENT) || '1'
    const pageSize = searchParams.get(List_SEARCH_PARAM_PAGE_SIZE) || '10'
    const data = await getQuestionListService({ keyword, isStar, isDeleted, current, pageSize })
    return data
  }
  const { data = {}, loading, refresh } = useRequest(load, { refreshDeps: [searchParams] })
  const { list = [], total = 0 } = data
  return { list, total, loading, refresh }
}
export default useLoadingQuestionList
