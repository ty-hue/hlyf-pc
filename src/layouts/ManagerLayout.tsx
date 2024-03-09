import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ManagerLayout.module.scss'
const MangerLayout: FC = () => {
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_left}>
        <p>MangerLayout leftside</p>
        <button>创建问卷</button>
        <br />
        <a>我的问卷</a>
        <br />
        <a>新标问卷</a>
        <br />
        <a>回收站</a>
      </div>
      <div className={styles.wrap_right}>
        <Outlet />
      </div>
    </div>
  )
}

export default MangerLayout
