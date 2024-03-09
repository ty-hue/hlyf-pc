import React, { FC } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../../router'

const UserInfo: FC = () => {
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
    </div>
  )
  const leave = (
    <Link to={LOGIN_PATHNAME} className={styles.leave}>
      登陆/注册
    </Link>
  )
  return <div className={styles.userinfo_body}>{isLogin ? online : leave}</div>
}

export default UserInfo
