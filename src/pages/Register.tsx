import { useTitle } from 'ahooks'
import { Form, Input, Button } from 'antd'
import React, { FC } from 'react'
import { LOGIN_PATHNAME } from '../router'
import { Link } from 'react-router-dom'
import styles from './Register.module.scss'
import ValidateTip from '../components/ValidateTip'

const Register: FC = () => {
  useTitle('幻庐问卷-注册')

  const onFinish = (value: object) => {
    console.log(value)
  }
  return (
    <div className={styles.container_wrap}>
      <div>
        <Form
          labelCol={{ span: 8 }}
          autoComplete="off"
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          style={{ textAlign: 'left' }}
          validateTrigger="onBlur"
          variant="filled"
        >
          <Form.Item
            name="username"
            label="账号"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(<ValidateTip {...{ tip: '请输入账号' }} />)
                  } else if (!(value.length > 5 && value.length < 20)) {
                    return Promise.reject(<ValidateTip {...{ tip: '密码长度必须为5-20位之间' }} />)
                  } else if (!/^\w+$/.test(value)) {
                    return Promise.reject(<ValidateTip {...{ tip: '账号只能密码数字下划线' }} />)
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
            name="password"
            label="密码"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(<ValidateTip {...{ tip: '请输入密码' }} />)
                  } else if (value.length <= 6) {
                    return Promise.reject(<ValidateTip {...{ tip: '密码长度必须大于6位' }} />)
                  } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/.test(value)) {
                    return Promise.reject(
                      <ValidateTip {...{ tip: '必须包含数字、密码、特殊字符' }} />
                    )
                  } else {
                    return Promise.resolve()
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value && getFieldValue('password') === value) {
                    return Promise.resolve()
                  } else if (!value) {
                    return Promise.reject(<ValidateTip {...{ tip: '请输入密码' }} />)
                  } else {
                    return Promise.reject(<ValidateTip {...{ tip: '两次密码不一致' }} />)
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="nikename" label="昵称">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Link to={LOGIN_PATHNAME}>已有账号？去登陆</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
