import React, { FC } from 'react'
import styles from './Header.module.scss'
const Logo: FC = () => {
  return (
    <div className={styles.wrap_logo}>
      <img src="" alt="" />
      <h2 className={styles.logo_title}>幻庐问卷</h2>
    </div>
  )
}

export default Logo
