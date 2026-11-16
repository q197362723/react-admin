export type Locale = 'zh_CN' | 'en_US'
import type {Role} from './login'
import type {MenuChild} from '../layout/menu.interface'
import type {Device} from '../layout/index.interface'

export interface UserState {
    username:string
    menuList:MenuChild[]
    logged:boolean
    role:Role          
    device:Device
    collapsed:boolean
    noticeCount:number
    locale:Locale
    newUser:boolean
}