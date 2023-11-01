import { observer } from "mobx-react"
import "./style/AuthForm.scss"
import { Button, Form, Input, Space, message } from "antd"
import { KeyOutlined, MailOutlined } from "@ant-design/icons"
import { useState } from "react"
import { fetchCaptcha, login, register } from "../../apis/user"

interface AuthFormProps {
  currentIndex: number
}

interface LoginFieldType {
  email: string
  password: string
}

interface RegisterFieldType {
  email: string
  password: string
  nickname: string
  captcha: string
}

function AuthForm({ currentIndex }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nickname, setNIckname] = useState("")
  const [captcha, setCaptcha] = useState("")
  const [messageApi, contextHolder] = message.useMessage()

  const handleLogin = async () => {
    try {
      const res = await login({ email: email, password: password })
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "发生错误, 请检查网络是否正常"
      })
    }
  }

  const handleRegister = async () => {
    try {
      const res = await register({ email: email, password: password, nickname: nickname })
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "发生错误, 请检查网络是否正常"
      })
    }
  }

  const handleFetchCaptcha = async () => {
    try {
      const res = await fetchCaptcha({ email: email })
      console.log(res)
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "发生错误, 请检查网络是否正常"
      })
    }
  }

  return (
    <>
      {contextHolder}
      <div className='auth-form-wrap'>
        <div className='auth-form-container'>
          {currentIndex === 0 ? (
            <>
              <Form
                name='login'
                requiredMark={false}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                style={{ marginTop: "2rem", maxWidth: "25rem", height: "100%" }}
              >
                <Form.Item<LoginFieldType>
                  label='邮箱'
                  name='email'
                  rules={[{ required: true, message: "请输入邮箱!" }]}
                >
                  <Input prefix={<MailOutlined />} value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                </Form.Item>

                <Form.Item<LoginFieldType>
                  label='密码'
                  name='password'
                  style={{ marginBottom: "4.5rem" }}
                  rules={[{ required: true, message: "请输入密码!" }]}
                >
                  <Input
                    type='password'
                    prefix={<KeyOutlined />}
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
                  <Button type='primary' htmlType='submit' onClick={handleLogin}>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <div>
              <Form
                name='register'
                requiredMark={false}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                style={{ marginTop: "2rem", maxWidth: "25rem", height: "100%" }}
              >
                <Form.Item<RegisterFieldType>
                  label='邮箱'
                  name='email'
                  style={{ marginBottom: "0.5rem" }}
                  rules={[{ required: true, message: "请输入邮箱!" }]}
                >
                  <Input prefix={<MailOutlined />} value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                </Form.Item>
                <Form.Item<RegisterFieldType>
                  label='密码'
                  name='password'
                  style={{ marginBottom: "0.5rem" }}
                  rules={[{ required: true, message: "请输入密码!" }]}
                >
                  <Input
                    prefix={<KeyOutlined />}
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </Form.Item>
                <Form.Item<RegisterFieldType>
                  label='昵称'
                  name='nickname'
                  style={{ marginBottom: "0.5rem" }}
                  rules={[{ required: true, message: "请输入昵称!" }]}
                >
                  <Input
                    prefix={<KeyOutlined />}
                    value={nickname}
                    onChange={(e) => setNIckname(e.currentTarget.value)}
                  />
                </Form.Item>
                <Form.Item<RegisterFieldType>
                  label='验证码'
                  name='captcha'
                  style={{ marginBottom: "0.5rem" }}
                  rules={[{ required: true, message: "请输入验证码!" }]}
                >
                  <Space.Compact style={{ width: "100%" }}>
                    <Input
                      prefix={<KeyOutlined />}
                      value={captcha}
                      onChange={(e) => setCaptcha(e.currentTarget.value)}
                    />
                    <Button type='primary' style={{ width: "50%" }} onClick={handleFetchCaptcha}>
                      发送验证码
                    </Button>
                  </Space.Compact>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
                  <Button type='primary' htmlType='submit' onClick={handleRegister}>
                    注册
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default observer(AuthForm)
