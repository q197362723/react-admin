import axios from 'axios'
import type {Method,AxiosRequestConfig} from 'axios'

const axiosInstance = axios.create({
    timeout:6000,
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export type Response<T = any> = {
    status:boolean
    message:string
    result:T
}

export type MyResponse<T = any> = Promise<Response<T>>


export const request = <T = any>(
    method:Lowercase<Method>,
    url:string,
    data?:any,
    config?:AxiosRequestConfig,
): MyResponse<T> => {
    const preifx = ""
    url = preifx + url
    if (method === "post") {
        return axiosInstance.post(url,data,config)
    } else {
        return axiosInstance.get(url,{
            params:data,
            ...config
        })
    }

}

