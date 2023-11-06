import { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { Outlet } from "react-router-dom"
import { AiOutlineFileUnknown } from "react-icons/ai"
import { FaFaceGrinStars, FaHouseChimney, FaUserCheck, FaUserGroup } from "react-icons/fa6"
import UserStore from "../../store/User"
import { getTags } from "../../apis/videos"
import Logo from "../../components/menu/Logo"
import LeftMenu from "../../components/menu/LeftMenu"
import GlobalHeader from "../../components/header/GlobalHeader"
import AuthDialog from "../../components/authDialog/AuthDialog"
import { menuItemIconMap } from "../../utils/common"
import "./style/DefaultLayout.scss"

const buttonList: Menu.MenuItem[] = [
  {
    text: "推荐",
    path: "/",
    Icon: FaFaceGrinStars
  },
  {
    text: "首页",
    path: "/home",
    Icon: FaHouseChimney
  },
  {
    text: "我的",
    path: `/profile/${UserStore.userId}`,
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
  const [channelList, setChannelList] = useState<Menu.MenuItem[]>([])

  const handleFetchTag = async () => {
    try {
      const { data } = await getTags()

      setChannelList(
        (data.tags as APIResponse.GetTagsResponse).map((item) => ({
          text: item.name,
          path: `/channel/${item.tagId}`,
          Icon: menuItemIconMap[item.name] || AiOutlineFileUnknown
        }))
      )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleFetchTag()
  }, [])

  return (
    <>
      <div className='default-layout'>
        <div className='left-sider-wrap'>
          <div className='left-sider-container'>
            <Logo />
            <div className='scroll-wrap'>
              <LeftMenu items={buttonList} channelItems={channelList} />
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
