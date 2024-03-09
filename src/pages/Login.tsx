import { useTitle } from 'ahooks'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login: FC = () => {
  useTitle('幻庐问卷-登陆')
  const navigate = useNavigate()
  return (
    <div>
      <p>我是登陆页</p>
      <button onClick={() => navigate(-1)}>返回</button>
      <Link to={'/register'}>没有账号？去注册</Link>
    </div>
  )
}

export default Login
