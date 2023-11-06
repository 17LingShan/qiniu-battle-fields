declare namespace APIParams {
  type RegisterParams = Pick<APIDataSchemas.User, "email" | "nickname" | "password"> & { captcha: string }

  type LoginParams = Pick<APIDataSchemas.User, "email" | "password">

  type FetchCaptchaParams = Pick<APIDataSchemas.User, "email">

  type GetUserInfoParams = NonNullable<Pick<APIDataSchemas.User, "userId">>

  type GetProfileParams = Pick<APIDataSchemas.User, "userId">

  type PutProfileParams = Pick<APIDataSchemas.User, "userId" | "profile">

  interface RecommendVideoParams {
    pageSize?: number
    pagePos: number
    tagId?: number
  }
}

declare namespace APIResponse {
  type GetTagsResponse = APIDataSchemas.TagItem[]

  type GetUserInfo = APIDataSchemas.UserItem

  interface GetUserInfoResponse {
    userItem: GetUserInfo
  }

  interface PostItem {
    post: APIDataSchemas.Post
    isLinked: boolean
    isCollected: boolean
    isShared: boolean
    likedNum: number
    collectedNum: number
    sharedNum: number
  }

  interface RecommendVideoResponse {
    total: number
    pageSize: number
    pagePost: number
    postItems: PostItem[]
  }
}

declare namespace APIDataSchemas {
  interface User {
    email: string
    userId: string
    nickname: string
    password: string
    profile: Profile
    token: string
    createAt?: string
  }

  interface Profile {
    realName?: string
    mood?: string
    gender?: string
    birthDat?: string
    introduction?: string
    avatarLink?: string
  }

  type GetUserInfoUser = Pick<APIDataSchemas.User, "userId" | "email" | "nickname" | "createAt" | "profile">

  interface UserItem {
    followedNum: number
    followingNum: number
    isFollowed: boolean
    user: GetUserInfoUser
  }
  interface TagItem {
    tagId: number
    name: string
    description: string
  }

  interface VideoItem {
    srcLink: string
    coverLink: string
  }

  interface Post {
    postId: string
    title: string
    description: string
    userId: string
    tags: TagItem[]
    video: VideoItem
    updatedAt: string
    createdAt: string
  }
}
