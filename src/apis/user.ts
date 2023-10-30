import { request } from "../utils/request"

const api = {
  register: "/v1/auth/register"
}

export function register(params: APIParams.RegisterParams) {
  return request({
    url: api.register,
    method: "post",
    data: params
  })
}
