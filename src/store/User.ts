import { makeAutoObservable } from "mobx"

class User {
  name = localStorage.getItem("profile.name") || ""
  constructor() {
    makeAutoObservable(this)
  }
}

const UserStore = new User()
export default UserStore
