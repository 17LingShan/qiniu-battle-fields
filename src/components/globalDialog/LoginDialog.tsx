import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import { FaXmark } from "react-icons/fa6"
import LoginDialogStore from "../../store/LoginDialog"
import SmoothNav from "./SmoothNav"
import "./style/LoginDialog.scss"

function LoginDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleClickBackdrop = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    const rect = dialogRef.current!.getBoundingClientRect()
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    if (!isInDialog) {
      LoginDialogStore.closeDialog()
    }
  }

  useEffect(() => {
    console.log(LoginDialogStore.isOpen)
    if (LoginDialogStore.isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [LoginDialogStore.isOpen])

  return (
    <>
      <dialog
        className='login-dialog'
        ref={dialogRef}
        onCancel={() => LoginDialogStore.closeDialog()}
        onClick={handleClickBackdrop}
      >
        <div className='login-dialog-wrap flex-hor-ver-center'>
          <div className='login-dialog-container'>
            <SmoothNav />
          </div>
          <div className='dialog-close' onClick={() => LoginDialogStore.closeDialog()}>
            <FaXmark />
          </div>
        </div>
      </dialog>
    </>
  )
}

export default observer(LoginDialog)
