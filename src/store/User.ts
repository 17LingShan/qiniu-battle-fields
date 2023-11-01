import { makeAutoObservable } from "mobx"

class User {
  email: string = localStorage.getItem("emial") || ""
  token: string = localStorage.getItem("token") || ""
  nickname = localStorage.getItem("nickname") || "未登录"

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

  logout() {
    this.nickname = ""
    this.token = ""
  }
}

const UserStore = new User()
export default UserStore
