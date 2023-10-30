import { makeAutoObservable } from "mobx"

export class LoginDialog {
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

const LoginDialogStore = new LoginDialog()

export default LoginDialogStore
