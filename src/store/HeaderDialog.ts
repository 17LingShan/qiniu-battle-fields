import { makeAutoObservable } from "mobx"

export class HeaderDialog {
  isOpen: boolean = false
  isFocus: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  showDialog() {
    this.isOpen = true
  }

  closeDialog() {
    this.isOpen = false
  }

  focusDialog() {
    this.isFocus = true
  }

  blurDialog() {
    this.isFocus = false
  }
}

const HeaderDialogStore = new HeaderDialog()

export default HeaderDialogStore
