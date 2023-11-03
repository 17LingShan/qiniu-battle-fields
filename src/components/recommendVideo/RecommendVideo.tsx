import { ChangeEventHandler, useEffect, useRef, useState } from "react"
import { toJS } from "mobx"
import { observer } from "mobx-react"
import { FaPause, FaPlay } from "react-icons/fa6"
import { BsVolumeDown, BsVolumeMute } from "react-icons/bs"
import { formateSeconds } from "../../utils/common"
import RecommendVideoStore from "../../store/RecommendVideo"
import "./style/RecommendVideo.scss"

interface Props {
  src: string
  index?: number
  isCurrent: boolean
}

function RecommendVideo({ index, isCurrent, src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)
  const videoProcessRef = useRef<HTMLDivElement>(null)
  const videoProcessWrapRef = useRef<HTMLDivElement>(null)
  const volumeControlsBarRef = useRef<HTMLDivElement>(null)

  const [keydown, setKeydown] = useState(false)

  const handleControlKeydown = (event: KeyboardEvent) => {
    console.log(event.key)
    switch (event.key) {
      case "ArrowLeft":
        handleVideoSkipTime(-1)
        break
      case "ArrowRight":
        handleVideoSkipTime(1)
        break
      case " ":
        handleSpaceKeydown()
        break
    }
  }

  const handleVideoSkipTime = (direction: -1 | 1) => {
    videoRef.current!.currentTime += direction * 3
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
    handlePlayVideo()
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

  const handleEnterFigure = () => {
    controlsRef.current?.classList.add("video-controls-wrap-hover")
  }

  const handleLeaveFigure = () => {
    controlsRef.current?.classList.remove("video-controls-wrap-hover")
  }

  const handleEnterVolumeBar = () => {
    RecommendVideoStore.setVolumeBarFocus(true)
    clearTimeout(RecommendVideoStore.volumeBarTimeoutId)
  }

  const handleEnterVolumeIcon = () => {
    clearTimeout(RecommendVideoStore.volumeBarTimeoutId)
    volumeControlsBarRef.current?.classList.add("video-volume-controls-bar-block")
  }

  const handleLeaveVolumeBar = () => {
    RecommendVideoStore.setVolumeBarFocus(false)
    handleLeaveBarRelation()
  }

  const handleLeaveVolumeIcon = () => {
    handleLeaveBarRelation()
  }

  const handleLeaveBarRelation = () => {
    const timeoutId = setTimeout(() => {
      if (!RecommendVideoStore.volumeBarIsFocus) {
        volumeControlsBarRef.current?.classList.remove("video-volume-controls-bar-block")
      } else {
        clearTimeout(RecommendVideoStore.volumeBarTimeoutId)
      }
    }, 500)
    clearTimeout(RecommendVideoStore.volumeBarTimeoutId)
    RecommendVideoStore.setVolumeBarTimeoutId(timeoutId)
  }

  const handleTimeUpdate = () => {
    RecommendVideoStore.setCurrentTime(videoRef.current!.currentTime)
    videoProcessRef.current!.style.width = `${(videoRef.current!.currentTime / videoRef.current!.duration) * 100}%`
  }

  const handleUpdateProcess = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

  const handleKeydownProcess = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("key down")
    setKeydown(true)
    handleUpdateProcess(event)
  }

  const handleKeyMovePRocess = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (keydown && isCurrent) {
      handleUpdateProcess(event)
    }
  }

  const handleVolumeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const volumeValue = +event.currentTarget.value
    if (volumeValue > 0) videoRef.current!.muted = true
    else videoRef.current!.muted = false
    videoRef.current!.volume = volumeValue
    RecommendVideoStore.setVolume(volumeValue)
  }

  useEffect(() => {
    if (isCurrent) {
      videoRef.current!.muted = RecommendVideoStore.muted
      videoRef.current!.volume = RecommendVideoStore.volume

      handlePlayVideo()
    } else {
      videoRef.current?.pause()
    }
  }, [isCurrent])

  useEffect(() => {
    if (isCurrent) {
      console.log(videoRef.current?.muted)
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
      <figure className='figure-video' onMouseEnter={handleEnterFigure} onMouseLeave={handleLeaveFigure}>
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
        <div className='video-controls-wrap' ref={controlsRef}>
          <div className='video-controls-container'>
            <div
              className='video-process-outline'
              ref={videoProcessWrapRef}
              onMouseUp={handleKeyUpProcess}
              onMouseDown={handleKeydownProcess}
              onMouseMove={handleKeyMovePRocess}
            >
              <div className='video-process-inline' ref={videoProcessRef}></div>
            </div>
            <div className='video-controls-left-tool'>
              <div className='flex-hor-ver-center' onClick={handleSpaceKeydown}>
                {videoRef.current?.paused ? <FaPlay /> : <FaPause />}
              </div>
              <div className='play-current-played'>{formateSeconds(RecommendVideoStore.currentTime || 0)}</div>
              <span className='time-division'>/</span>
              <div className='play-total-duration'>{formateSeconds(videoRef.current?.duration || 0)}</div>
            </div>
            <div className='video-controls-right-tool'>
              <div
                className='video-volume-controls flex-hor-ver-center'
                onClick={handleClickVolume}
                onMouseEnter={handleEnterVolumeIcon}
                onMouseLeave={handleLeaveVolumeIcon}
              >
                <div
                  className='video-volume-controls-bar'
                  ref={volumeControlsBarRef}
                  onMouseEnter={handleEnterVolumeBar}
                  onMouseLeave={handleLeaveVolumeBar}
                >
                  <input
                    type='range'
                    step={0.01}
                    min={0}
                    max={1}
                    value={toJS(RecommendVideoStore.volume)}
                    onChange={handleVolumeChange}
                  />
                </div>
                {RecommendVideoStore.volume > 0 ? <BsVolumeDown /> : <BsVolumeMute />}
              </div>
            </div>
          </div>
        </div>
      </figure>
    </>
  )
}

export default observer(RecommendVideo)
