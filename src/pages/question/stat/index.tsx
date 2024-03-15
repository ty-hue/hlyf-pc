import { useTitle } from 'ahooks'
import React, { FC } from 'react'
import useLoadingQuestionData from '../../../hooks/useLoadingQuestionData'

const Stat: FC = () => {
  useTitle('幻庐问卷-问卷统计')
  const { loading, data } = useLoadingQuestionData()
  return <div>{loading ? <span>loading~~</span> : <span>{JSON.stringify(data)}</span>}</div>
}

export default Stat
