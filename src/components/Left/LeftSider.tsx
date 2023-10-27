import { FaFaceGrinStars, FaHouseChimney, FaUserCheck, FaUserGroup } from "react-icons/fa6"
import Logo from "./Logo"
import LeftMenu from "./LeftMenu"
import "./style/LeftSider.scss"

export default function LeftSider() {
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
    },
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
    },
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
    },
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
    },
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

  return (
    <>
      <div className='left-sider-wrap'>
        <div className='left-sider-container'>
          <Logo />
          <div className='scroll-wrap'>
            <LeftMenu items={buttonList} />
          </div>
        </div>
      </div>
    </>
  )
}
