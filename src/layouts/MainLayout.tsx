import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const MainLayout: FC = () => {
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_header}>
        <Header />
      </div>
      <div className={styles.wrap_content}>
        <Outlet />
      </div>
      <div className={styles.wrap_footer}>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
