import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { useParams } from "react-router-dom"
import UserStore from "../../store/User"
import BaiZi from "../../assets/baizi.jpg"
import puluona from "../../assets/puluona.webp"
import { getUserInfo } from "../../apis/user"
import "./style/Profile.scss"

function Profile() {
  const [userInfo, setUserInfo] = useState<APIResponse.GetUserInfo>()

  const { userId } = useParams()

  const handleGetUserInfo = async () => {
    if (!userId) return

    try {
      const { data }: { data: APIResponse.GetUserInfoResponse } = await getUserInfo({ userId: userId })

      setUserInfo({ ...data.userItem })

      console.log(data)
    } catch (err) {
      console.log("get user info err", err)
    }
  }

  useEffect(() => {
    if (!userId) console.log(123)
  }, [])

  useEffect(() => {
    if (userId === UserStore.userId) console.log("myself")
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
                      <span className='social-item-count'>{userInfo?.followedNum || 0}</span>
                    </div>
                    <div className='social-item'>
                      <span className='social-item-name'>粉丝</span>
                      <span className='social-item-count'>{userInfo?.followingNum || 0}</span>
                    </div>
                    <div className='social-item'>
                      <span className='social-item-name'>点赞</span>
                      <span className='social-item-count'>{userInfo?.followingNum || 0}</span>
                    </div>
                  </div>
                  <div className='self-userId'>
                    <span>我的id:</span>
                    <span>{userInfo?.user.userId}</span>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        {/* <VideoCardList></VideoCardList> */}
      </div>
    </>
  )
}

export default observer(Profile)
