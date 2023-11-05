import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import RecommendVideoStore from "../../store/RecommendVideo"
import RecommendVideo from "../../components/recommendVideo/RecommendVideo"
import { debounce, throttle } from "../../utils/common"
import "./style/Recommend.scss"

function Recommend() {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        handleNextVideo()
        break
      case "ArrowUp":
        handlePrevVideo()
        break
    }
  }

  const handleScrollToCurrentIndex = () => {
    console.log("current video")
    currentRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleNextVideo = throttle(() => {
    if (RecommendVideoStore.currentIndex === RecommendVideoStore.srcList.length - 1) return
    RecommendVideoStore.changeToNextPrevVideo("next")
    nextRef.current?.scrollIntoView({ behavior: "smooth" })
  }, 400)

  const handlePrevVideo = throttle(() => {
    if (RecommendVideoStore.currentIndex === 0) return
    RecommendVideoStore.changeToNextPrevVideo("prev")
    prevRef.current?.scrollIntoView({ behavior: "smooth" })
  }, 400)

  const handleWheel = debounce(function (event: WheelEvent) {
    if (event.deltaY > 0) handleNextVideo()
    else handlePrevVideo()
  }, 500)

  const switchCurrentRef = (currentIndex: number) => {
    switch (currentIndex) {
      case RecommendVideoStore.getPrevVideoIndex:
        return prevRef
      case RecommendVideoStore.getNextVideoIndex:
        return nextRef
      case RecommendVideoStore.currentIndex:
        return currentRef
      default:
        return undefined
    }
  }

  // 因为如果使用esc退出全屏时, 监听不到keydown:Escape, 所以这俩写多一个函数
  const handleFullScreenChange = (event: Event) => {
    console.log("full changed")
    RecommendVideoStore.setFullScreen(document.fullscreenElement ? true : false)
    currentRef.current?.scrollIntoView({ behavior: "instant" }) // 防止进入或推出全屏时会卡一半
  }

  const effectFullScreenState = async () => {
    try {
      if (RecommendVideoStore.isFullScreen) {
        await previewRef.current?.requestFullscreen()
      } else {
        if (document.fullscreenElement) {
          await document.exitFullscreen()
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    effectFullScreenState()
  }, [RecommendVideoStore.isFullScreen])

  useEffect(() => {
    history.scrollRestoration = "manual"
    document.addEventListener("wheel", handleWheel)
    document.addEventListener("keydown", handleKeydown)
    document.onfullscreenchange = handleFullScreenChange
    handleScrollToCurrentIndex()
    return () => {
      document.removeEventListener("wheel", handleWheel)
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  return (
    <>
      <div className='recommend-wrap'>
        <div className='recommend-container'>
          <div className='video-scroll-wrap' ref={previewRef}>
            {RecommendVideoStore.srcList.map((_, index) => {
              const ref = switchCurrentRef(index)

              return (
                <div className='video-scroll-item' key={index} ref={ref}>
                  <RecommendVideo
                    index={index}
                    src={RecommendVideoStore.srcList[index]}
                    isCurrent={RecommendVideoStore.currentIndex === index}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(Recommend)
