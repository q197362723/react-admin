import {createSlice} from '@reduxjs/toolkit'
import type {Locale} from '../interface/user/user'
import type { PayloadAction } from '@reduxjs/toolkit';
import type {UserState} from '../interface/user/user'
import {getGlobalState} from '../utils/getGloabal'
import type {Role} from '../interface/user/login'

const initialState:UserState = {
...getGlobalState(),
noticeCount:0,
newUser:JSON.parse(localStorage.getItem('newUser')!) ?? true,
logged: localStorage.getItem('t') ? true : false,
locale:(localStorage.getItem('locale')! || 'en_US') as Locale,
menuList:[],
username:localStorage.getItem('username') || '',
role:(localStorage.getItem('username') || '') as Role
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
      setUserItem(state,action:PayloadAction<Partial<Partial<UserState>>>){
        const {username} = action.payload
        if(username !== state.username){
            localStorage.setItem('username',action.payload.username || "")
        }
      Object.assign(state,action.payload)
      }
    }
})

const {setUserItem} = userSlice.actions
export {setUserItem}

export default userSlice.reducer