import { useTitle } from 'ahooks'
import React, { FC } from 'react'

const Trash: FC = () => {
  useTitle('我的问卷-回收站')
  return <div>我是回收站页面</div>
}

export default Trash
