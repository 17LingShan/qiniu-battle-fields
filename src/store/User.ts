import { makeAutoObservable } from "mobx"

class User {
  id: string = "0"
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

  successLogin({ nickname, email }: { nickname: string; email: string }) {
    this.email = email
    this.nickname = nickname
    localStorage.setItem("email", this.email)
    localStorage.setItem("nickname", this.nickname)
  }

  loginSuccess(params: Pick<APIParams.User, "email" | "id" | "nickname" | "token" | "createAt" | "profile">) {
    this.email = params.email
    this.token = params.token
    this.id = params.id
    this.nickname = params.nickname
    this.profile = params.profile

    localStorage.setItem("token", params.token)
    localStorage.setItem("nickname", params.nickname)
  }

  logout() {
    this.nickname = ""
    this.token = ""
    localStorage.removeItem("token")
    localStorage.removeItem("nickname")
  }
}

const UserStore = new User()
export default UserStore
