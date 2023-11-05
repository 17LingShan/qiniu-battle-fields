import { request } from "../utils/request"

const api = {
  tags: "/v1/video/tags",
  recommendVideos: "/v1/post/recommend"
}

export function getTags() {
  return request({
    url: api.tags,
    method: "get"
  })
}

export function getRecommendVideos(params: APIParams.RecommendVideoParams) {
  return request({
    url: api.recommendVideos,
    method: "get",
    params: params
  })
}
