import { Button } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router'
import styles from './Home.module.scss'
const Home: FC = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_body}>
        <h1 className={styles.body_title}>问卷调查|在线投票</h1>
        <p className={styles.body_des}>已累计创建问卷1090份，发布问卷100份，收到答卷10000份</p>
        <Button className={styles.body_btn} onClick={() => nav(LOGIN_PATHNAME)} type="primary">
          开始使用
        </Button>
      </div>
    </div>
  )
}

export default Home
