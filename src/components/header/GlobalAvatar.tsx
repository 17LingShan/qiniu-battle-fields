import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import BaiZi from "../../assets/baizi.jpg"
import "./style/GlobalAvatar.scss"
import HeaderDialog, { HeaderDialogMethod } from "./HeaderDialog"

export default function GlobalAvatar() {
  const navigate = useNavigate()
  let dialogRef = useRef<HeaderDialogMethod>(null)

  const handleClickAvatar = () => {
    navigate("/profile")
  }

  return (
    <>
      <div
        className='avatar-wrap'
        onClick={handleClickAvatar}
        onMouseLeave={() => {
          dialogRef.current?.blur()
          console.log("mouse leave")
        }}
      >
        <div className='avatar-entity'>
          <HeaderDialog ref={dialogRef} />
          <img
            src={BaiZi}
            className='avatar-img'
            onMouseEnter={() => {
              dialogRef.current?.focus()
              console.log("mouse in")
            }}
          />
        </div>
      </div>
    </>
  )
}
