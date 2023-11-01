import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import RecommendVideoStore from "../../store/RecommendVideo"
import "./style/recommendVideo.scss"

function RecommendVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const handleControlKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case " ":
        handleSpaceKeydown()
    }
  }

  const handleSpaceKeydown = () => {
    videoRef.current?.paused ? videoRef.current.play() : videoRef.current?.pause()
  }

  useEffect(() => {
    document.addEventListener("keydown", handleControlKeydown)

    return () => {
      document.addEventListener("keydown", handleControlKeydown)
    }
  }, [])

  return (
    <>
      <figure className='figure-video'>
        <video className='video-instance' id='video' ref={videoRef}>
          <source
            className='video-source'
            style={{ height: "100%" }}
            type='video/mp4'
            src={RecommendVideoStore.currentVideoSrc}
          />
        </video>
      </figure>
    </>
  )
}

export default observer(RecommendVideo)
