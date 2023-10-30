import React, { useMemo } from "react"
import { observer } from "mobx-react"
import UserStore from "../../store/User"
import BaiZi from "../../assets/baizi.jpg"
import puluona from "../../assets/puluona.webp"
import "./Profile.scss"

const profileItems = [
  {
    text: "关注",
    count: 8
  },
  {
    text: "粉丝",
    count: 8
  },
  {
    text: "点赞",
    count: 999
  }
]

function Profile() {
  const arr = useMemo(() => Array.from({ length: 11 }, (_, index) => index + 1), [])

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
                    {profileItems.map((item, index) => (
                      <div className='social-item' key={index}>
                        <span className='social-item-name'>{item.text}</span>
                        <span className='social-item-count'>{item.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className='self-id'>
                    <span>我的id:</span>
                    <span>123456789123</span>
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
