import { useTitle } from 'ahooks'
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const Edit: FC = () => {
  useTitle('幻庐问卷-编辑问卷')
  const { id = '' } = useParams()
  return <div>我是问卷编辑页面:当前id参数{id}</div>
}

export default Edit
