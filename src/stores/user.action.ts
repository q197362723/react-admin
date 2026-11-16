import { createAsyncAction } from './utils';
import type {LoginParams} from '@/interface/user/login'
import { setUserItem } from './user.store';

import {apiLogin} from "@/api/user.api";
export const loginAsync = createAsyncAction<LoginParams,boolean>(payload => {
    return async dispatch => {
        const {result,status} = await apiLogin(payload);
        if(status) {
            localStorage.setItem('t',result.token)
            localStorage.setItem('userInfo',result.username)
            dispatch(
                setUserItem({
                    logged:true,
                    username:result.username
                })
            )
            return true
        }
        return false
    }
})