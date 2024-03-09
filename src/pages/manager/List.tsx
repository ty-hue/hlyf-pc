import { useTitle } from 'ahooks'
import React, { FC } from 'react'

const List: FC = () => {
  useTitle('我的问卷-问卷列表')
  return <div>我是问卷列表页面</div>
}

export default List
