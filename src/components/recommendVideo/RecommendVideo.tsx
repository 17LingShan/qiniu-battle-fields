import { useEffect, useRef, useState } from "react"
import { observer } from "mobx-react"
import { FaPause, FaPlay } from "react-icons/fa6"
import { BsVolumeDown, BsVolumeMute } from "react-icons/bs"
import { formateSeconds, throttle } from "../../utils/common"
import RecommendVideoStore from "../../store/RecommendVideo"
import "./style/RecommendVideo.scss"

interface Props {
  src: string
  index?: number
  isCurrent: boolean
}

function RecommendVideo({ index, isCurrent, src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoProcessRef = useRef<HTMLDivElement>(null)
  const videoProcessWrapRef = useRef<HTMLDivElement>(null)
  const [keydown, setKeydown] = useState(false)

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

  const handleClickVideo = () => {
    console.log("click video")
    handleSpaceKeydown()
  }

  const handleEndedVideo = () => {
    videoRef.current!.play()
  }

  const handlePlayVideo = async () => {
    videoRef.current?.play()
  }

  const handleLoadedMetadata = () => {
    console.log("loaded metadata")
  }

  const handleClickVolume = () => {
    videoRef.current!.muted = !videoRef.current?.muted
  }

  const handleTimeUpdate = () => {
    console.log("currentTime in ", index, videoRef.current!.currentTime)
    RecommendVideoStore.setCurrentTime(videoRef.current!.currentTime)
    videoProcessRef.current!.style.width = `${(videoRef.current!.currentTime / videoRef.current!.duration) * 100}%`
  }

  const handleKeydownProcess = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("key down")
    setKeydown(true)
    const totalWidth = videoProcessWrapRef.current!.getBoundingClientRect().width
    const barLeft = videoProcessRef.current!.getBoundingClientRect().left
    const mouseX = event.pageX
    const offsetX = mouseX - barLeft
    const percentage = offsetX / totalWidth
    videoProcessRef.current!.style.width = `${percentage * 100}%`
    videoRef.current!.currentTime = percentage * videoRef.current!.duration
  }

  const handleKeyUpProcess = () => {
    console.log("key up")
    setKeydown(false)
  }

  const handleKeyMovePRocess = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (keydown && isCurrent) {
      const totalWidth = videoProcessWrapRef.current!.getBoundingClientRect().width
      const barLeft = videoProcessRef.current!.getBoundingClientRect().left
      const mouseX = event.pageX
      const offsetX = mouseX - barLeft
      const percentage = offsetX / totalWidth
      videoProcessRef.current!.style.width = `${percentage * 100}%`
      videoRef.current!.currentTime = percentage * videoRef.current!.duration
    }
  }

  useEffect(() => {
    if (isCurrent) {
      videoRef.current!.muted = RecommendVideoStore.muted
      handlePlayVideo()
    } else {
      videoRef.current?.pause()
    }
  }, [isCurrent])

  useEffect(() => {
    if (isCurrent) {
      RecommendVideoStore.setMuted(videoRef.current!.muted)
    }
  }, [videoRef.current?.muted])

  useEffect(() => {
    if (!isCurrent) return
    document.addEventListener("keydown", handleControlKeydown)
    return () => {
      console.log("remove")
      videoRef.current?.pause()
      document.removeEventListener("keydown", handleControlKeydown)
    }
  }, [isCurrent])

  return (
    <>
      <figure className='figure-video'>
        <video
          className='video-instance'
          id='video'
          ref={videoRef}
          onClick={handleClickVideo}
          onEnded={handleEndedVideo}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
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
            <div
              className='video-process-outline'
              ref={videoProcessWrapRef}
              onMouseUp={handleKeyUpProcess}
              onMouseDown={handleKeydownProcess}
              onMouseMove={handleKeyMovePRocess}
            >
              <div className='video-process-inline' ref={videoProcessRef}></div>
            </div>
            <div className='video-bottom-left-tool'>
              <div className='flex-hor-ver-center' onClick={handleSpaceKeydown}>
                {videoRef.current?.paused ? <FaPlay /> : <FaPause />}
              </div>
              <div className='play-current-played'>{formateSeconds(RecommendVideoStore.currentTime || 0)}</div>
              <span className='time-division'>/</span>
              <div className='play-total-duration'>{formateSeconds(videoRef.current?.duration || 0)}</div>
            </div>
            <div className='video-bottom-right-tool'>
              <div className='video-volume-controls flex-hor-ver-center' onClick={handleClickVolume}>
                {RecommendVideoStore.muted ? <BsVolumeMute /> : <BsVolumeDown />}
              </div>
            </div>
          </div>
        </div>
      </figure>
    </>
  )
}

export default observer(RecommendVideo)
