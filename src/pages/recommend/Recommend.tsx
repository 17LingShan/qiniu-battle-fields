import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import RecommendVideoStore from "../../store/RecommendVideo"
import RecommendVideo from "../../components/recommendVideo/RecommendVideo"
import { debounce } from "../../utils/common"
import "./Recommend.scss"

function Recommend() {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

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

  const handleNextVideo = () => {
    console.log("next video")
    if (RecommendVideoStore.currentIndex === RecommendVideoStore.srcList.length - 1) return
    RecommendVideoStore.changeToNextPrevVideo("next")
    nextRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePrevVideo = () => {
    console.log("pre video")
    if (RecommendVideoStore.currentIndex === 0) return
    RecommendVideoStore.changeToNextPrevVideo("prev")
    prevRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWheel = debounce(function (event: WheelEvent) {
    if (event.deltaY > 0) handleNextVideo()
    else handlePrevVideo()
  }, 500)

  useEffect(() => {
    history.scrollRestoration = "manual"
    document.addEventListener("wheel", handleWheel)
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("wheel", handleWheel)
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  return (
    <>
      <div className='recommend-wrap'>
        <div className='recommend-container'>
          <div className='video-scroll-wrap'>
            {RecommendVideoStore.srcList.map((_, index) => {
              const ref =
                RecommendVideoStore.getPrevVideoIndex === index
                  ? prevRef
                  : RecommendVideoStore.getNextVideoIndex === index
                  ? nextRef
                  : undefined
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
