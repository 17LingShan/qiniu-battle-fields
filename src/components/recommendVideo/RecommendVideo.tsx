import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import RecommendVideoStore from "../../store/RecommendVideo"
import "./style/RecommendVideo.scss"
import { message } from "antd"
import { FaPause, FaPlay } from "react-icons/fa6"
import { formateSeconds } from "../../utils/common"

interface Props {
  src: string
  index?: number
  isCurrent: boolean
}

function RecommendVideo({ index, isCurrent, src }: Props) {
  const [messageApi, contextHolder] = message.useMessage({ maxCount: 1 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const handleControlKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case " ":
        handleSpaceKeydown()
    }
  }

  const handleSpaceKeydown = () => {
    videoRef.current?.paused ? videoRef.current.play() : videoRef.current?.pause()
    RecommendVideoStore.setPaused(videoRef.current!.paused)
  }

  const handleClick = () => {
    console.log("click video")
    handleSpaceKeydown()
  }

  const handleEnded = () => {
    videoRef.current!.play()
  }

  const handlePlayVideo = async () => {
    try {
      const promise = await videoRef.current?.play()
      console.log(promise)
    } catch (err) {
      messageApi.warning({ duration: 3, content: "您的浏览器不支持自动播放, 请点击视频手动播放" })
    }
  }

  const handleLoadedMetadata = () => {
    console.log("loaded metadata")
    console.log(videoRef.current?.played)
  }

  const handleTimeUpdate = (event: Event) => {
    console.log("time update event", event)
    RecommendVideoStore.setCurrentTime(videoRef.current!.currentTime)
  }

  useEffect(() => {
    if (isCurrent) {
      videoRef.current!.muted = false
      handlePlayVideo()
    }
  }, [isCurrent])

  useEffect(() => {
    if (isCurrent) {
      RecommendVideoStore.setUserMuted(videoRef.current!.muted)
    }
  }, [videoRef.current?.muted])

  useEffect(() => {
    if (!isCurrent) return
    document.addEventListener("keydown", handleControlKeydown)
    videoRef.current?.addEventListener("timeupdate", handleTimeUpdate)
    videoRef.current?.addEventListener("loadedmetadata", handleLoadedMetadata)
    return () => {
      console.log("remove")
      videoRef.current?.pause()
      document.removeEventListener("keydown", handleControlKeydown)
      videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate)
      videoRef.current?.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [isCurrent])

  return (
    <>
      {contextHolder}
      <figure className='figure-video'>
        <video
          className='video-instance'
          id='video'
          ref={videoRef}
          onClick={handleClick}
          onEnded={handleEnded}
          muted
          autoPlay
        >
          <source src={src} />
        </video>
        <span style={{ position: "absolute", left: 0, top: 0, background: "white", color: "black", zIndex: "9" }}>
          {index}
        </span>
        <div className='video-bottom-wrap'>
          <div className='video-bottom-container'>
            <div className='video-bottom-left-tool'>
              <div className='play-state flex-hor-ver-center' onClick={handleSpaceKeydown}>
                {RecommendVideoStore.paused ? <FaPlay /> : <FaPause />}
              </div>
              <div className='play-current-played'>{formateSeconds(RecommendVideoStore.currentTime || 0)}</div>
              <span className='time-division'>/</span>
              <div className='play-total-duration'>{formateSeconds(videoRef.current?.duration || 0)}</div>
            </div>
            <div className='video-bottom-right-tool'>right tool</div>
          </div>
        </div>
      </figure>
    </>
  )
}

export default observer(RecommendVideo)
