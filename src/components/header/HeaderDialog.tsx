import { useRef, useEffect } from "react"
import "./style/HeaderDialog.scss"
import HeaderDialogStore from "../../store/HeaderDialog"
import { observer } from "mobx-react"

function HeaderDialog() {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(HeaderDialogStore.isOpen)
    if (HeaderDialogStore.isOpen || HeaderDialogStore.isFocus) {
      dialogRef.current?.classList.add("active-dialog")
    } else {
      dialogRef.current?.classList.remove("active-dialog")
    }
  }, [HeaderDialogStore.isOpen, HeaderDialogStore.isFocus])

  return (
    <>
      <div
        ref={dialogRef}
        className='dialog-wrap'
        onMouseEnter={() => HeaderDialogStore.focusDialog()}
        onMouseLeave={() => HeaderDialogStore.blurDialog()}
      >
        <div className='dialog-container'></div>
      </div>
    </>
  )
}

export default observer(HeaderDialog)
