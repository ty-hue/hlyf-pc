import React, { FC } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './ManagerLayout.module.scss'
import { Button, Space, Divider } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'

const MangerLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  return (
    <div className={styles.container_wrap}>
      <div className={styles.wrap_left}>
        {/* <p>MangerLayout leftside</p> */}
        <Space direction="vertical" size="middle">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            创建问卷
          </Button>
          <Divider />
          <Button
            type={pathname === '/manager/list' ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manager/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname === '/manager/star' ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manager/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname === '/manager/trash' ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manager/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.wrap_right}>
        <Outlet />
      </div>
    </div>
  )
}

export default MangerLayout
