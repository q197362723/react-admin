import LoginPage from '@/pages/login'
import {useRoutes} from 'react-router-dom'
import type {FC} from 'react'
import type {RouteObject} from 'react-router-dom'

import WrapperRouteComponent from './config'


const routeList:RouteObject[] = [
    {
        path:'/',
        element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />,
    }
]

const RenderRouter:FC = () => {
    const element = useRoutes(routeList)
    return element
}

export default RenderRouter