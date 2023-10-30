import { makeAutoObservable } from "mobx"

export class HeaderDrawer {
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

const HeaderDrawerStore = new HeaderDrawer()

export default HeaderDrawerStore
