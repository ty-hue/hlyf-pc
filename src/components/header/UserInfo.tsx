import React, { FC } from 'react'
import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../../router'
import { Button } from 'antd'
import { removeToken } from '../../utils/user_token'

const UserInfo: FC = () => {
  const nav = useNavigate()
  //注销
  const logoOut = () => {
    removeToken()
    nav(LOGIN_PATHNAME)
  }
  const isLogin = false
  const online = (
    <div className={styles.online}>
      <div className={styles.avator_wrap}>
        <img
          className={styles.avator_wrap_img}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.enterdesk.com%2Fface%2F97912-1430196.html&psig=AOvVaw2UJmiZMiAKQINMa3szOUeq&ust=1710068829748000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOCQ8v2E54QDFQAAAAAdAAAAABAP"
          alt=""
        />
      </div>
      <span className={styles.username}>迈克杰瑞</span>
      <Button onClick={logoOut}>注销</Button>
    </div>
  )
  const leave = (
    <Link to={LOGIN_PATHNAME} className={styles.leave}>
      登陆
    </Link>
  )
  return <div className={styles.userinfo_body}>{isLogin ? online : leave}</div>
}

export default UserInfo
