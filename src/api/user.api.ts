import type {LoginParams} from '@/interface/user/login'

import {request} from './request'
// 登录接口
export const apiLogin = (data:LoginParams)=> request("post","/user/login",data)