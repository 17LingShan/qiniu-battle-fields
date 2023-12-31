import { observer } from "mobx-react"
import { useNavigate } from "react-router-dom"
import UserStore from "../../store/User"
import AuthDialogStore from "../../store/AuthDialog"
import HeaderDrawerStore from "../../store/HeaderDrawer"
import BaiZi from "../../assets/baizi.jpg"
import puluona from "../../assets/puluona.webp"
import "./style/GlobalAvatar.scss"

function GlobalAvatar() {
  const navigate = useNavigate()

  const handleClickAvatar = () => {
    navigate(`/profile/${UserStore.userId}`)
  }

  return (
    <>
      <div className='avatar-wrap' onMouseLeave={() => HeaderDrawerStore.closeDialog()}>
        <div className='avatar-entity'>
          {UserStore.token ? (
            <img
              src={UserStore.token ? UserStore.profile?.avatarLink || puluona : BaiZi}
              className='avatar-img'
              onClick={handleClickAvatar}
              onMouseEnter={() => HeaderDrawerStore.showDialog()}
            />
          ) : (
            <div className='header-auth-button' onClick={() => AuthDialogStore.showDialog()}>
              登录
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default observer(GlobalAvatar)
