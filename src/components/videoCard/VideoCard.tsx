import { useRef } from "react"
import { observer } from "mobx-react"
import RecommendVideoStore from "../../store/RecommendVideo"
import "./style/VideoCard.scss"

interface VideoCardProps {
  videoInfo: APIResponse.PostItem
}

function VideoCard({ videoInfo }: VideoCardProps) {
  const cardVideoRef = useRef<HTMLVideoElement>(null)

  const handleVideoMouseEnter = () => {
    cardVideoRef.current!.muted = RecommendVideoStore.muted
    cardVideoRef.current!.volume = RecommendVideoStore.volume
    cardVideoRef.current?.play()
  }

  const handleVideoMouseLeave = () => {
    cardVideoRef.current?.pause()
  }

  return (
    <>
      <div className='video-card-container'>
        <div className='video-instance-container'>
          <video
            className='video-instance'
            ref={cardVideoRef}
            src={videoInfo.post.video.srcLink}
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
          ></video>
        </div>
        <div className='video-info-container'>
          <div className='video-info-title'>{videoInfo.post.title}</div>
          <div className='video-info-description'>
            {videoInfo.post.description} 简介简洁简介简洁简介简洁简介简洁简介简洁 简介简洁 简介简洁 简介简洁 简介简洁
            简介简洁简介简洁 简介简洁简介简洁简介简洁 简介简洁简介简洁简介简洁 简介简洁简介简洁简介简洁 简介简洁
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(VideoCard)
