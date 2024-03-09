import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <>
      <div>我是头部</div>
      <div>
        <Outlet />
      </div>
      <div>我是底部</div>
    </>
  )
}

export default MainLayout
