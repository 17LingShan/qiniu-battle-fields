import { makeAutoObservable } from "mobx"

class RecommendVideo {
  paused: boolean = false
  currentIndex: number = 0
  srcList: string[] = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  ]

  constructor() {
    makeAutoObservable(this)
  }

  get currentVideoSrc() {
    return this.srcList[this.currentIndex]
  }

  get getPrevVideoIndex() {
    return this.scaleChangeVideoIndex("prev")
  }

  get getNextVideoIndex() {
    return this.scaleChangeVideoIndex("next")
  }

  scaleChangeVideoIndex(type: "next" | "prev") {
    console.log(this.srcList.length)
    return type === "next"
      ? (this.currentIndex + 1) % this.srcList.length
      : (this.currentIndex + this.srcList.length - 1) % this.srcList.length
  }

  changeToNextPrevVideo(type: "next" | "prev") {
    return (this.currentIndex = this.scaleChangeVideoIndex(type))
  }

  setPaused(paused: boolean) {
    this.paused = paused
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index
    console.log("new index", index)
  }
}

const RecommendVideoStore = new RecommendVideo()

export default RecommendVideoStore
