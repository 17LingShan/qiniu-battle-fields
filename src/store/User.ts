import { makeAutoObservable } from "mobx"

class User {
  nickname = localStorage.getItem("nickname") || "岭山"
  token: string = localStorage.getItem("token") || "123"
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
