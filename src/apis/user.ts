import { request } from "../utils/request"

const api = {
  register: "/v1/auth/register",
  login: "/v1/auth/login",
  captcha: "/v1/auth/captcha",
  profile: "/v1/profile/",
  user: "/v1/user/"
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

export function fetchCaptcha(params: APIParams.FetchCaptchaParams) {
  return request({
    url: api.captcha,
    method: "post",
    data: params
  })
}

export function getUserInfo(params: APIParams.GetUserInfoParams) {
  return request({
    url: api.user + params.userId,
    method: "get"
  })
}

export function getProfile(params: APIParams.GetProfileParams) {
  return request({
    url: api.profile + params.userId,
    method: "get"
  })
}

export function putProfile(params: APIParams.PutProfileParams) {
  return request({
    url: api.profile + params.userId,
    method: "put",
    data: params.profile
  })
}
