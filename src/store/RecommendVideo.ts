import { makeAutoObservable } from "mobx"

class RecommendVideo {
  muted: boolean = true
  paused: boolean = true
  currentTime: number = 0
  currentIndex: number = 0
  volumeBarIsFocus: boolean = false
  volumeBarTimeoutId: number = 0
  srcList: string[] = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
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

  setMuted(muted: boolean) {
    this.muted = muted
  }

  setCurrentTime(currentTime: number) {
    this.currentTime = currentTime
  }

  setPaused(paused: boolean) {
    this.paused = paused
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index
  }

  setVolumeBarFocus(isFocus: boolean) {
    this.volumeBarIsFocus = isFocus
  }

  setVolumeBarTimeoutId(id: number) {
    this.volumeBarTimeoutId = id
  }

  scaleChangeVideoIndex(type: "next" | "prev") {
    return type === "next"
      ? (this.currentIndex + 1) % this.srcList.length
      : (this.currentIndex + this.srcList.length - 1) % this.srcList.length
  }

  changeToNextPrevVideo(type: "next" | "prev") {
    return (this.currentIndex = this.scaleChangeVideoIndex(type))
  }
}

const RecommendVideoStore = new RecommendVideo()

export default RecommendVideoStore
