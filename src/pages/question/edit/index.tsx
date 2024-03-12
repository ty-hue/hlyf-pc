import { useTitle } from 'ahooks'
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../../../utils/api/question'

const Edit: FC = () => {
  useTitle('幻庐问卷-编辑问卷')
  const { id = '' } = useParams()
  useEffect(() => {
    getQuestionService(id).then(res => {
      console.log(res)
    })
  }, [])
  return <div>我是问卷编辑页面:当前id参数{id}</div>
}

export default Edit
