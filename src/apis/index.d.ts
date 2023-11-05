namespace APIParams {
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

  type RegisterParams = Pick<User, "email" | "nickname" | "password"> & { captcha: string }

  type LoginParams = Pick<User, "email" | "password">

  type FetchCaptchaParams = Pick<User, "email">

  type GetUserInfoParams = NonNullable<Pick<User, "userId">>

  type GetProfileParams = Pick<User, "userId">

  type PutProfileParams = Pick<User, "userId" | "profile">
}

namespace APIResponse {
  interface GetTagItem {
    userId: number
    name: string
    description: string
  }
  type GetTagsResponse = GetTagItem[]

  type GetUserInfoUser = Pick<APIParams.User, "userId" | "email" | "nickname" | "createAt" | "profile">

  interface UserItem {
    followedNum: number
    followingNum: number
    isFollowed: boolean
    user: GetUserInfoUser
  }

  type GetUserInfo = UserItem

  interface GetUserInfoResponse {
    userItem: GetUserInfo
  }
}
