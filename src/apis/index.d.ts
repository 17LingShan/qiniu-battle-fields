namespace APIParams {
  interface User {
    email: string
    id: string
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

  type RegisterParams = Pick<User, "email" | "nickname" | "password"> & { captcha: string }

  type LoginParams = Pick<User, "email" | "password">

  type FetchCaptchaParams = Pick<User, "email">

  type GetUserInfoParams = NonNullable<Pick<User, "id">>

  type GetProfileParams = Pick<User, "id">

  type PutProfileParams = Pick<User, "id" | "profile">
}

namespace APIResponse {
  interface GetTagItem {
    id: number
    name: string
    description: string
  }
  type GetTagsResponse = GetTagItem[]

  interface UserItem {
    followedNum: string | number
    followingNum: string | number
    isFollowed: boolean
  }

  type GetUserInfoUser = Pick<APIParams.User, "id" | "email" | "nickname" | "createAt" | "profile">

  type GetUserInfo = {
    userItem: UserItem
    user: Pick<APIParams.User, "id" | "email" | "nickname" | "createAt" | "profile">
  }
}
