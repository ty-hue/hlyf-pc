import { useTitle } from 'ahooks'
import React, { FC } from 'react'

const NotFound: FC = () => {
  useTitle('404-NotFound')
  return <div>我是404</div>
}

export default NotFound
