import { observer } from "mobx-react"
import RecommendVideo from "../../components/recommendVideo/RecommendVideo"
import "./Recommend.scss"
import { useEffect, useRef } from "react"
import ShadowVideo from "../../components/recommendVideo/ShadowVideo"
import RecommendVideoStore from "../../store/RecommendVideo"

function Recommend() {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const handleKeydown = (event: KeyboardEvent) => {
    console.log("key down", event)
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

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [])

  return (
    <>
      <div className='recommend-wrap'>
        <div className='recommend-container'>
          <div className='video-scroll-wrap'>
            {RecommendVideoStore.srcList.map((item, index) => {
              if (index === RecommendVideoStore.currentIndex) {
                return (
                  <div className='video-scroll-item' key={index}>
                    <RecommendVideo />
                  </div>
                )
              } else if (RecommendVideoStore.getPrevVideoIndex === index) {
                return (
                  <div className='video-scroll-item' key={index} ref={prevRef}>
                    <ShadowVideo src={RecommendVideoStore.srcList[index]} />
                  </div>
                )
              } else if (RecommendVideoStore.getNextVideoIndex === index) {
                return (
                  <div className='video-scroll-item' key={index} ref={nextRef}>
                    <ShadowVideo src={RecommendVideoStore.srcList[index]} />
                  </div>
                )
              } else {
                return (
                  <div className='video-scroll-item' key={index} ref={nextRef}>
                    <ShadowVideo src={RecommendVideoStore.srcList[index]} />
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(Recommend)
