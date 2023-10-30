import { observer } from "mobx-react"
import "./style/AuthForm.scss"
import { Button, Form, Input, Space } from "antd"
import { KeyOutlined, MailOutlined } from "@ant-design/icons"

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
  return (
    <>
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
                  <Input prefix={<MailOutlined />} />
                </Form.Item>
                <Form.Item<LoginFieldType>
                  label='密码'
                  name='password'
                  style={{ marginBottom: "4.5rem" }}
                  rules={[{ required: true, message: "请输入密码!" }]}
                >
                  <Input prefix={<KeyOutlined />} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
                  <Button type='primary' htmlType='submit'>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <div>
              <Form
                name='login'
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
                  <Input prefix={<MailOutlined />} />
                </Form.Item>
                <Form.Item<RegisterFieldType>
                  label='密码'
                  name='password'
                  style={{ marginBottom: "0.5rem" }}
                  rules={[{ required: true, message: "请输入密码!" }]}
                >
                  <Input prefix={<KeyOutlined />} />
                </Form.Item>
                <Form.Item<RegisterFieldType>
                  label='昵称'
                  name='nickname'
                  style={{ marginBottom: "0.5rem" }}
                  rules={[{ required: true, message: "请输入昵称!" }]}
                >
                  <Input prefix={<KeyOutlined />} />
                </Form.Item>
                <Form.Item<RegisterFieldType>
                  label='验证码'
                  name='captcha'
                  style={{ marginBottom: "0.5rem" }}
                  rules={[{ required: true, message: "请输入验证码!" }]}
                >
                  <Space.Compact style={{ width: "100%" }}>
                    <Input prefix={<KeyOutlined />} />
                    <Button type='primary' style={{ width: "50%" }}>
                      发送验证码
                    </Button>
                  </Space.Compact>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
                  <Button type='primary' htmlType='submit'>
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
