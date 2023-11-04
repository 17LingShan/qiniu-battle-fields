import { makeAutoObservable } from "mobx"

export class AuthDialog {
  isOpen: boolean = false
  authTabIndex: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  showDialog() {
    this.isOpen = true
  }

  closeDialog() {
    this.isOpen = false
  }

  setAuthTabIndex(index: number) {
    this.authTabIndex = index
  }
}

const AuthDialogStore = new AuthDialog()

export default AuthDialogStore
