import { useRef, useEffect } from "react"
import { observer } from "mobx-react"
import { useNavigate } from "react-router-dom"
import { FaAngleRight, FaFaceGrinStars, FaInstagram, FaRegThumbsUp } from "react-icons/fa6"
import UserStore from "../../store/User"
import HeaderDrawerStore from "../../store/HeaderDrawer"
import "./style/HeaderDrawer.scss"

function HeaderDrawer() {
  const dialogRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const profileDialogOptions = [
    {
      text: "我的投稿",
      count: 1,
      Icon: <FaInstagram />
    },
    {
      text: "我的点赞",
      count: 1,
      Icon: <FaRegThumbsUp />
    },
    {
      text: "我的收藏",
      count: 1,
      Icon: <FaFaceGrinStars />
    }
  ]

  useEffect(() => {
    if (HeaderDrawerStore.isOpen || HeaderDrawerStore.isFocus) {
      dialogRef.current?.classList.add("active-dialog")
    } else {
      dialogRef.current?.classList.remove("active-dialog")
    }
  }, [HeaderDrawerStore.isOpen, HeaderDrawerStore.isFocus])

  return (
    <>
      <div
        className='dialog-wrap'
        ref={dialogRef}
        onMouseEnter={() => HeaderDrawerStore.focusDialog()}
        onMouseLeave={() => HeaderDrawerStore.blurDialog()}
      >
        <div className='dialog-container'>
          <div className='dialog-profile-control'>
            <div className='dialog-nickname' onClick={() => navigate(`/profile/${UserStore.id}`)}>
              <div>{UserStore.nickname || "未登录"}</div>
              <FaAngleRight />
            </div>
            <div className='dialog-logout-button' onClick={() => UserStore.logout()}>
              退出登录
            </div>
          </div>
          <ul className='dialog-detail'>
            {profileDialogOptions.map((item, index) => (
              <li className='dialog-detail-item' key={index}>
                <div className='dialog-detail-item-icon'>{item.Icon}</div>
                <div>{item.count}</div>
                <div>{item.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default observer(HeaderDrawer)
