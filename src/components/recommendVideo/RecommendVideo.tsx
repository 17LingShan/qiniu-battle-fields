import { useEffect, useRef, ChangeEventHandler, MouseEventHandler } from "react"
import { toJS } from "mobx"
import { observer } from "mobx-react"
import { FaPause, FaPlay } from "react-icons/fa6"
import { BsFullscreen, BsVolumeDown, BsVolumeMute } from "react-icons/bs"
import { formateSeconds } from "../../utils/common"
import RecommendVideoStore from "../../store/RecommendVideo"
import "./style/RecommendVideo.scss"

interface Props {
  videoInfo: APIResponse.PostItem
  index?: number
  isCurrent: boolean
}

function RecommendVideo({ index, isCurrent, videoInfo }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const figureRef = useRef<HTMLDivElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)
  const volumeControlsBarRef = useRef<HTMLDivElement>(null)

  const handleControlKeydown = (event: KeyboardEvent) => {
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
    console.log(encodeURI(videoInfo.post.video.srcLink))
  }

  const handleEndedVideo = () => {
    handlePlayVideo()
  }

  const handlePlayVideo = async () => {
    videoRef.current?.play()
  }

  const handleFullScreenClick = () => {
    console.log("click full screen")
    RecommendVideoStore.setFullScreen(!RecommendVideoStore.isFullScreen)
  }

  const handleLoadedMetadata = () => {
    console.log("loaded metadata")
  }

  const handleClickVolume = () => {
    if (RecommendVideoStore.volume === 0) {
      videoRef.current!.volume = 0.3
      videoRef.current!.muted = false
      RecommendVideoStore.setVolume(0.3)
    } else {
      videoRef.current!.muted = !videoRef.current?.muted
      RecommendVideoStore.setVolume(0)
    }
  }

  const handleEnterVolumeBar = () => {
    RecommendVideoStore.setVolumeBarFocus(true)
  }

  const handleEnterVolumeIcon = () => {
    clearTimeout(RecommendVideoStore.volumeBarTimeoutId)
    volumeControlsBarRef.current?.classList.add("video-volume-controls-bar-block")
  }

  const handleLeaveVolumeBar = () => {
    RecommendVideoStore.setVolumeBarFocus(false)
    delayVolumeBarHidden()
  }

  const handleLeaveVolumeIcon = () => {
    delayVolumeBarHidden()
  }

  const delayVolumeBarHidden = () => {
    const timeoutId = setTimeout(() => {
      if (!RecommendVideoStore.volumeBarIsFocus) {
        volumeControlsBarRef.current?.classList.remove("video-volume-controls-bar-block")
      }
    }, 500)

    clearTimeout(RecommendVideoStore.volumeBarTimeoutId)
    RecommendVideoStore.setVolumeBarTimeoutId(timeoutId)
  }

  const handleTimeUpdate = () => {
    RecommendVideoStore.setCurrentTime(videoRef.current!.currentTime)
  }

  const handleProcessChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const processValue = +event.currentTarget.value
    videoRef.current!.currentTime = processValue
    handleTimeUpdate()
  }

  const handleVolumeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const volumeValue = +event.currentTarget.value
    videoRef.current!.volume = volumeValue
    if (volumeValue > 0) videoRef.current!.muted = false
    else videoRef.current!.muted = true
    RecommendVideoStore.setVolume(volumeValue)
  }

  const handleClickVolumeControlsBar: MouseEventHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    if (isCurrent) {
      videoRef.current!.muted = RecommendVideoStore.muted
      videoRef.current!.volume = RecommendVideoStore.volume
      console.log(videoInfo.post.video.coverLink)

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
      <figure
        className='figure-video'
        ref={figureRef}
        style={{
          backgroundImage: `url('${videoInfo.post.video.coverLink}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backdropFilter: "blur(50px)"
        }}
      >
        <video
          className='video-instance'
          ref={videoRef}
          onClick={handleClickVideo}
          onEnded={handleEndedVideo}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          muted
          autoPlay
        >
          <source src={videoInfo.post.video.srcLink} />
        </video>
        <span style={{ position: "absolute", left: 0, top: 0, background: "white", color: "black", zIndex: "9" }}>
          {index}
        </span>
        <div className='video-controls-wrap' ref={controlsRef}>
          <div className='video-controls-container'>
            <div className='video-process-outline'>
              <input
                type='range'
                step={0.5}
                min={0}
                max={videoRef.current?.duration || 0}
                value={toJS(RecommendVideoStore.currentTime)}
                onChange={handleProcessChange}
              />
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
                  onClick={handleClickVolumeControlsBar}
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
              <div className='flex-hor-ver-center' onClick={handleFullScreenClick}>
                <BsFullscreen />
              </div>
            </div>
          </div>
        </div>
      </figure>
    </>
  )
}

export default observer(RecommendVideo)
