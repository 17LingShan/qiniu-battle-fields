import { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { Outlet } from "react-router-dom"
import { FaFaceGrinStars, FaHouseChimney, FaUserCheck, FaUserGroup } from "react-icons/fa6"
import Logo from "../../components/menu/Logo"
import LeftMenu from "../../components/menu/LeftMenu"
import GlobalHeader from "../../components/header/GlobalHeader"
import AuthDialog from "../../components/globalDialog/AuthDialog"
import { getTags } from "../../apis/common"
import "./DefaultLayout.scss"
import { menuItemIconMap } from "../../utils/common"
import { AiOutlineFileUnknown } from "react-icons/ai"
import UserStore from "../../store/User"

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
    path: `/profile/${UserStore.id}`,
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
          path: `channel/${item.id}`,
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
