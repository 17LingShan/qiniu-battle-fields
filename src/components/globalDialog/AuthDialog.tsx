import { useEffect, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react"
import { FaXmark } from "react-icons/fa6"
import AuthForm from "./AuthForm"
import SmoothNav from "./SmoothNav"
import AuthDialogStore from "../../store/AuthDialog"
import "./style/AuthDialog.scss"

function AuthDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const navList = useMemo(() => [{ text: "登录" }, { text: "注册" }], [])
  const [navIndex, setNavIndex] = useState(0)

  const handleClickBackdrop = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    const rect = dialogRef.current!.getBoundingClientRect()
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    if (!isInDialog) {
      AuthDialogStore.closeDialog()
    }
  }

  useEffect(() => {
    console.log(AuthDialogStore.isOpen)
    if (AuthDialogStore.isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [AuthDialogStore.isOpen])

  return (
    <>
      <dialog
        className='auth-dialog'
        ref={dialogRef}
        onCancel={() => AuthDialogStore.closeDialog()}
        onClick={handleClickBackdrop}
      >
        <div className='flex-hor-ver-center auth-dialog-wrap'>
          <div className='dialog-close' onClick={() => AuthDialogStore.closeDialog()}>
            <FaXmark />
          </div>
          <div className='auth-dialog-container'>
            <SmoothNav currentIndex={navIndex} setNavIndex={setNavIndex} navList={navList} />
            <div className='input-form-container'>
              <AuthForm currentIndex={navIndex} />
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default observer(AuthDialog)
