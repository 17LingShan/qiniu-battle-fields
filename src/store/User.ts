import { makeAutoObservable } from "mobx"

class User {
  userId: string = localStorage.getItem("userId") || "0"
  email: string = localStorage.getItem("email") || ""
  token: string = localStorage.getItem("token") || ""
  nickname = localStorage.getItem("nickname") || "未登录"
  profile: APIParams.Profile = {}

  constructor() {
    makeAutoObservable(this)
  }

  setNickname(nickname: string) {
    this.nickname = nickname
    localStorage.setItem("nickname", this.nickname)
  }

  setToken(token: string) {
    this.token = token
    if (!this.token) this.logout()
  }

  loginSuccess(params: Pick<APIParams.User, "email" | "userId" | "nickname" | "createAt" | "profile" | "token">) {
    this.email = params.email
    this.token = params.token
    this.userId = params.userId
    this.profile = params.profile
    this.nickname = params.nickname

    localStorage.setItem("token", params.token)
    localStorage.setItem("userId", params.userId)
    localStorage.setItem("nickname", params.nickname)
  }

  logout() {
    this.nickname = ""
    this.token = ""
    this.userId = ""
    localStorage.clear()
  }
}

const UserStore = new User()
export default UserStore
