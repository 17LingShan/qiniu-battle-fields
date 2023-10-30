import { observer } from "mobx-react"
import { Outlet } from "react-router-dom"
import { FaFaceGrinStars, FaHouseChimney, FaUserCheck, FaUserGroup } from "react-icons/fa6"
import Logo from "../../components/menu/Logo"
import LeftMenu from "../../components/menu/LeftMenu"
import GlobalHeader from "../../components/header/GlobalHeader"
import AuthDialog from "../../components/globalDialog/AuthDialog"
import "./DefaultLayout.scss"

const buttonList: Menu.MenuItem[] = [
  {
    text: "推荐",
    path: "/recommend",
    Icon: FaFaceGrinStars
  },
  {
    text: "首页",
    path: "/",
    Icon: FaHouseChimney
  },
  {
    text: "我的",
    path: "/profile",
    Icon: FaHouseChimney
  },
  {
    text: "关注",
    path: "/follow",
    Icon: FaUserCheck
  },
  {
    text: "朋友",
    path: "/friend",
    Icon: FaUserGroup
  }
]

function DefaultLayout() {
  return (
    <>
      <div className='default-layout'>
        <div className='left-sider-wrap'>
          <div className='left-sider-container'>
            <Logo />
            <div className='scroll-wrap'>
              <LeftMenu items={buttonList} />
            </div>
          </div>
        </div>
        <div className='right-sider-wrap'>
          <GlobalHeader />
          <AuthDialog />

          <div className='outlet-container'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(DefaultLayout)
