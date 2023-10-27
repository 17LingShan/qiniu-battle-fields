import { CSSProperties } from "react"
import puluona from "../../assets/puluona.webp"
import "./Profile.scss"

export default function Profile() {
  return (
    <>
      <div className='profile-wrap'>
        <div className='info-wrap'>
          <div className='info-container'>
            <div className='avatar-wrap'>
              <img className='avatar-container' src={puluona} alt='' />
            </div>
            <div className='detail-info-wrap'>
              <div className='detail-info-container'>
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
        </div>
        <div style={postsWrap}></div>
      </div>
    </>
  )
}

const postsWrap: CSSProperties = {
  height: "795vh",
  backgroundColor: "red"
}
