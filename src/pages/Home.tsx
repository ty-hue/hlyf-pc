import { Button } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const navigate = useNavigate()
  function toLogin() {
    navigate('/login')
  }
  return (
    <div>
      <p>我是首页</p>
      <Button onClick={toLogin}>去登陆</Button>
    </div>
  )
}

export default Home
