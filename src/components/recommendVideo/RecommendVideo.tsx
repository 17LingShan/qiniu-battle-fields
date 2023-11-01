import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import "./style/recommendVideo.scss"

interface Props {
  isCurrent: boolean
  src: string
  index?: number
}

function RecommendVideo({ index, isCurrent, src }: Props) {
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
    if (isCurrent) {
      videoRef.current?.play()
      videoRef.current!.muted = false
    } else {
      videoRef.current?.pause()
    }
  }, [isCurrent])

  useEffect(() => {
    if (!isCurrent) return

    document.addEventListener("keydown", handleControlKeydown)
    return () => {
      document.removeEventListener("keydown", handleControlKeydown)
    }
  }, [isCurrent])

  const handleClick = () => {
    videoRef.current!.muted = false
  }

  const handleEnded = () => {
    videoRef.current!.play()
  }

  return (
    <>
      <figure className='figure-video'>
        <video
          className='video-instance'
          id='video'
          ref={videoRef}
          muted
          autoPlay
          onClick={handleClick}
          onEnded={handleEnded}
        >
          <source type='video/mp4' src={src} />
        </video>
        <span style={{ position: "absolute", left: 0, top: 0, background: "white", color: "black" }}>{index}</span>
      </figure>
    </>
  )
}

export default observer(RecommendVideo)
