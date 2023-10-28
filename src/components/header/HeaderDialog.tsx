import { forwardRef, useRef, useImperativeHandle } from "react"
import "./style/HeaderDialog.scss"

export type HeaderDialogMethod = {
  focus: () => void
  blur: () => void
}

type HeaderDialogProps = {}

const HeaderDialog = forwardRef<HeaderDialogMethod, HeaderDialogProps>(function HeaderDialog(props, ref) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => {
    return {
      focus() {
        dialogRef.current?.classList.add("active-dialog")
      },
      blur() {
        dialogRef.current?.classList.remove("active-dialog")
      }
    }
  })

  return (
    <>
      <div ref={dialogRef} className='dialog-wrap'></div>
    </>
  )
})

export default HeaderDialog
