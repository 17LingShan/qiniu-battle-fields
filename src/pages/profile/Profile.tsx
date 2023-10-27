import { CSSProperties, useMemo } from "react"
import puluona from "../../assets/puluona.webp"
import "./Profile.scss"
import VideoPreviewItem from "../../components/Player/VideoPreviewItem"

export default function Profile() {
  const arr = useMemo(() => Array.from({ length: 50 }, (_, index) => index + 1), [])

  return (
    <>
      <div className='profile-wrap'>
        <div className='info-wrap'>
          <div className='info-container'>
            <div className='avatar-wrap'>
              <img className='avatar-container' src={puluona} alt='' />
            </div>
            <div className='detail-info-wrap'>
              <div className='nickname'>岭山</div>
              <div className='social-info'>
                <div className='social-item'>
                  <span className='social-item-name'>关注</span>
                  <span className='social-item-count'>8</span>
                </div>
                <div className='social-item'>
                  <span className='social-item-name'>粉丝</span>
                  <span className='social-item-count'>0</span>
                </div>
                <div className='social-item'>
                  <span className='social-item-name'>点赞</span>
                  <span className='social-item-count'>8</span>
                </div>
              </div>
              <div className='self-id'>
                <span>我的id:</span>
                <span>123456789123</span>
              </div>
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
