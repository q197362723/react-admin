import type {FC} from 'react'
import './index.less'
import type { LoginParams } from "@/interface/user/login";
import {theme as antTheme,Form,Input,Checkbox,Button} from 'antd'
import { useDispatch } from "react-redux";
import { loginAsync } from "@/stores/user.action";
import { formatSearch } from "@/utils/formatSearch";
import {useLocale,LocaleFormatter} from "@/locales"
import { useNavigate } from "react-router-dom";



const initialValues:LoginParams = {
    username:'',
    password:''
}

const LoginPage:FC = () => {
     const { formatMessage } = useLocale();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {token} = antTheme.useToken()
    const onFinished = async (form:LoginParams) => {
        const res = dispatch(await loginAsync(form))
        if(!!res) {
            const search = formatSearch(location.search)
            const from = search.from || {pathname:'/'}
            navigate(from)
        }
    }
    return (
        <div className="login-page" style={{backgroundColor:token.colorBgContainer}}>
           <Form <LoginParams> onFinish={onFinished} className="login-page-form" initialValues={initialValues}>
           <h2>REACT ANTD ADMIN</h2>
            <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'gloabal.tips.enterUsernameMessage',
              }),
            },
          ]}
        >
          <Input
            autoComplete="username"
            placeholder={formatMessage({
              id: 'gloabal.tips.username',
            })}
          />
        </Form.Item>
  <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'gloabal.tips.enterPasswordMessage',
              }),
            },
          ]}
        >
          <Input
            type="password"
            autoComplete="current-password"
            placeholder={formatMessage({
              id: 'gloabal.tips.password',
            })}
          />
        </Form.Item>
           <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <LocaleFormatter id="gloabal.tips.rememberUser" />
          </Checkbox>
        </Form.Item>
          <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            <LocaleFormatter id="gloabal.tips.login" />
          </Button>
        </Form.Item>
           </Form>
        </div>
    )
}


export default LoginPage