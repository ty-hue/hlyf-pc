import React, { FC } from 'react'
import styles from './Header.module.scss'
import Logo from './Logo'
import UserInfo from './UserInfo'
const Header: FC = () => {
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_logo}>
        <Logo />
      </div>
      <div className={styles.wrap_userinfo}>
        <UserInfo />
      </div>
    </div>
  )
}

export default Header
