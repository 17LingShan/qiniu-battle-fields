import React, { useEffect, useMemo, useState } from "react"
import { observer } from "mobx-react"
import UserStore from "../../store/User"
import BaiZi from "../../assets/baizi.jpg"
import puluona from "../../assets/puluona.webp"
import "./style/Profile.scss"
import { useParams } from "react-router-dom"
import { getUserInfo } from "../../apis/user"

function Profile() {
  const arr = useMemo(() => Array.from({ length: 11 }, (_, index) => index + 1), [])

  const [userInfo, setUserInfo] = useState<APIResponse.GetUserInfoUser>()
  const [userFollow, setUserFollow] = useState<APIResponse.UserItem>()

  const { userId } = useParams()

  const handleGetUserInfo = async () => {
    if (!userId) return

    try {
      const { data }: { data: APIResponse.GetUserInfo } = await getUserInfo({ id: userId })
      setUserInfo({ ...data.user })
      setUserFollow({ ...data.userItem })

      console.log(data)
    } catch (err) {
      console.log("get user info err", err)
    }
  }

  useEffect(() => {
    if (userId === UserStore.id) console.log("myself")
    else console.log("other guys")

    handleGetUserInfo()
  }, [userId])

  return (
    <>
      <div className='profile-wrap'>
        <div className='info-wrap'>
          <div className='info-container'>
            <div className='avatar-wrap'>
              <img className='avatar-container' src={UserStore.token ? puluona : BaiZi} alt='' />
            </div>
            <div className='detail-info-wrap'>
              <div className='nickname'>{UserStore.nickname || "请登录"}</div>
              {UserStore.token && (
                <React.Fragment>
                  <div className='social-info'>
                    <div className='social-item'>
                      <span className='social-item-name'>关注</span>
                      <span className='social-item-count'>{userFollow?.followingNum || 0}</span>
                    </div>
                    <div className='social-item'>
                      <span className='social-item-name'>粉丝</span>
                      <span className='social-item-count'>{userFollow?.followedNum || 0}</span>
                    </div>
                    <div className='social-item'>
                      <span className='social-item-name'>点赞</span>
                      <span className='social-item-count'>{userFollow?.followingNum || 0}</span>
                    </div>
                  </div>
                  <div className='self-id'>
                    <span>我的id:</span>
                    <span>{userInfo?.id}</span>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <div className='preview-wrap'>
          <div className='preview-container'>
            <ul className='preview-ul clearfix'>
              {arr.map((item) => (
                <li key={item}>{/* <VideoPreviewItem /> */}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(Profile)
