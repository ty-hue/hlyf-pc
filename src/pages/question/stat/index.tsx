import { useTitle } from 'ahooks'
import React, { FC } from 'react'

const Stat: FC = () => {
  useTitle('幻庐问卷-问卷统计')
  return <div>我是统计页面</div>
}

export default Stat
