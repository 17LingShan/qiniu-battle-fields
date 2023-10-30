import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { networksConfig } from "../configs/networks"

export function request(config: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
  const instance: AxiosInstance = axios.create({
    baseURL: networksConfig.baseURL,
    timeout: networksConfig.timeout
  })

  instance.interceptors.request.use(beforeRequest, errorRequest)
  instance.interceptors.response.use(beforeResponse, errorResponse)

  return instance(config)
}

function beforeRequest(config: any) {
  console.log("before request")
  return config
}

function errorRequest(err: any) {
  console.log("error request")

  return Promise.reject(err)
}

function beforeResponse(res: any) {
  console.log("before Response")

  return res
}

function errorResponse(err: any) {
  console.log("error response")
  return Promise.reject(err)
}
