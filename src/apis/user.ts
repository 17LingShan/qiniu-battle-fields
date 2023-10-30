import { request } from "../utils/request"

const api = {
  register: "/v1/auth/register",
  login: "/v1/auth/login"
}

export function register(params: APIParams.RegisterParams) {
  return request({
    url: api.register,
    method: "post",
    data: params
  })
}

export function login(params: APIParams.LoginParams) {
  return request({
    url: api.login,
    method: "post",
    data: params
  })
}
