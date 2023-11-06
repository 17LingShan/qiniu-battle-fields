import { observer } from "mobx-react"
import "./style/VideoCard.scss"
import { useRef } from "react"
import RecommendVideoStore from "../../store/RecommendVideo"

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
        <div className='video-container'>
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
          <div className='video-info-description'></div>
        </div>
      </div>
    </>
  )
}

export default observer(VideoCard)
