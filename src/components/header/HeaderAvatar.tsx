import { useNavigate } from "react-router-dom"
import UserStore from "../../store/User"
import LoginDialogStore from "../../store/LoginDialog"
import HeaderDrawerStore from "../../store/HeaderDrawer"
import BaiZi from "../../assets/baizi.jpg"
import puluona from "../../assets/puluona.webp"
import "./style/GlobalAvatar.scss"
import { observer } from "mobx-react"

function GlobalAvatar() {
  const navigate = useNavigate()

  const handleClickAvatar = () => {
    navigate("/profile")
  }

  return (
    <>
      <div className='avatar-wrap' onMouseLeave={() => HeaderDrawerStore.closeDialog()}>
        <div className='avatar-entity'>
          {UserStore.token ? (
            <img
              src={UserStore.token ? puluona : BaiZi}
              className='avatar-img'
              onClick={handleClickAvatar}
              onMouseEnter={() => HeaderDrawerStore.showDialog()}
            />
          ) : (
            <div className='header-login-button' onClick={() => LoginDialogStore.showDialog()}>
              登录
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default observer(GlobalAvatar)
