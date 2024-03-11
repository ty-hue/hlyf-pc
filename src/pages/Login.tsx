import { useTitle } from 'ahooks'
import { Form, Input, Button, Checkbox } from 'antd'
import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { REGISTER_PATHNAME } from '../router'
import ValidateTip from '../components/ValidateTip'
import styles from './Login.module.scss'
import { PASSWORD_KEY, USERNAME_KEY } from '../constant'
const Login: FC = () => {
  useTitle('幻庐问卷-登陆')
  const onFinish = (values: any) => {
    const { username, password, remember } = values
    if (remember) {
      //存
      saveLocastorage(username, password)
    } else {
      //如果locastorage里面有存在过，就删除
      delLocastorage()
    }
  }
  const saveLocastorage = (username: string, password: string) => {
    localStorage.setItem(USERNAME_KEY, username)
    localStorage.setItem(PASSWORD_KEY, password)
  }
  const delLocastorage = () => {
    if (localStorage.getItem(USERNAME_KEY) && localStorage.getItem(PASSWORD_KEY)) {
      localStorage.removeItem(USERNAME_KEY)
      localStorage.removeItem(PASSWORD_KEY)
    }
  }
  const getLocastorage = () => {
    return {
      username: localStorage.getItem(USERNAME_KEY),
      password: localStorage.getItem(PASSWORD_KEY),
    }
  }
  const [form] = Form.useForm()
  useEffect(() => {
    const { username, password } = getLocastorage()
    form.setFieldsValue({ username, password })
  }, [])
  return (
    <div className={styles.container_wrap}>
      <div>
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ textAlign: 'left' }}
          validateTrigger="onBlur"
          variant="filled"
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(<ValidateTip {...{ tip: '请输入账号' }} />)
                  } else {
                    return Promise.resolve()
                  }
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(<ValidateTip {...{ tip: '请输入密码' }} />)
                  } else {
                    return Promise.resolve()
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
          <Link to={REGISTER_PATHNAME}>没有账号？去注册</Link>
        </Form>
      </div>
    </div>
  )
}

export default Login
