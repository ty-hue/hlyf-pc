import { useTitle } from 'ahooks'
import React, { FC } from 'react'
const Star: FC = () => {
  useTitle('问卷管理-星标问卷')
  return <div>我是星标页面</div>
}

export default Star
