import { makeAutoObservable } from "mobx"

export class AuthDialog {
  isOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  showDialog() {
    this.isOpen = true
  }

  closeDialog() {
    this.isOpen = false
  }
}

const AuthDialogStore = new AuthDialog()

export default AuthDialogStore
