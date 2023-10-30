import { makeAutoObservable } from "mobx"

class User {
  nickname = localStorage.getItem("nickname") || "未登录"
  token: string = localStorage.getItem("token") || ""

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

  logout() {
    this.nickname = ""
    this.token = ""
  }
}

const UserStore = new User()
export default UserStore
