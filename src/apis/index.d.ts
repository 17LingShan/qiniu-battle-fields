namespace APIParams {
  interface User {
    name: string
    email: string
    id: string
    nickname: string
    password: string
    profile: Profile
  }

  interface Profile {
    realName: string
    mood: string
    gender: string
    introduction: string
  }

  type RegisterParams = Pick<User, "email" | "nickname" | "password">
}
