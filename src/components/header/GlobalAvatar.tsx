import { useNavigate } from "react-router-dom"
import BaiZi from "../../assets/baizi.jpg"
import "./style/GlobalAvatar.scss"
import HeaderDialogStore from "../../store/HeaderDialog"

export default function GlobalAvatar() {
  const navigate = useNavigate()

  const handleClickAvatar = () => {
    navigate("/profile")
  }

  return (
    <>
      <div
        className='avatar-wrap'
        onMouseLeave={() => {
          HeaderDialogStore.closeDialog()
        }}
      >
        <div className='avatar-entity' onClick={handleClickAvatar}>
          <img
            src={BaiZi}
            className='avatar-img'
            onMouseEnter={() => {
              HeaderDialogStore.showDialog()
            }}
          />
        </div>
      </div>
    </>
  )
}
