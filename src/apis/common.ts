import { request } from "../utils/request"

const api = {
  tags: "/v1/video/tags"
}

export function getTags() {
  return request({
    url: api.tags,
    method: "get"
  })
}
