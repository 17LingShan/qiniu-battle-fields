import { makeAutoObservable } from "mobx"

const videoInfos: APIResponse.PostItem[] = [
  {
    post: {
      postId: "1",
      title: "1",
      description: "1",
      userId: "1",
      tags: [{ tagId: 1, name: "123", description: "123" }],
      video: {
        srcLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        coverLink: ""
      },
      updatedAt: "1",
      createdAt: "1"
    },
    isCollected: false,
    isLinked: false,
    isShared: false,
    collectedNum: 0,
    sharedNum: 0,
    likedNum: 1
  },
  {
    post: {
      postId: "1",
      title: "1",
      description: "1",
      userId: "1",
      tags: [{ tagId: 1, name: "123", description: "123" }],
      video: {
        srcLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        coverLink: ""
      },
      updatedAt: "1",
      createdAt: "1"
    },
    isCollected: false,
    isLinked: false,
    isShared: false,
    collectedNum: 0,
    sharedNum: 0,
    likedNum: 1
  },
  {
    post: {
      postId: "1",
      title: "1",
      description: "1",
      userId: "1",
      tags: [{ tagId: 1, name: "123", description: "123" }],
      video: {
        srcLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        coverLink: ""
      },
      updatedAt: "1",
      createdAt: "1"
    },
    isCollected: false,
    isLinked: false,
    isShared: false,
    collectedNum: 0,
    sharedNum: 0,
    likedNum: 1
  },
  {
    post: {
      postId: "1",
      title: "1",
      description: "1",
      userId: "1",
      tags: [{ tagId: 1, name: "123", description: "123" }],
      video: {
        srcLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        coverLink: ""
      },
      updatedAt: "1",
      createdAt: "1"
    },
    isCollected: false,
    isLinked: false,
    isShared: false,
    collectedNum: 0,
    sharedNum: 0,
    likedNum: 1
  },
  {
    post: {
      postId: "1",
      title: "1",
      description: "1",
      userId: "1",
      tags: [{ tagId: 1, name: "123", description: "123" }],
      video: {
        srcLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        coverLink: ""
      },
      updatedAt: "1",
      createdAt: "1"
    },
    isCollected: false,
    isLinked: false,
    isShared: false,
    collectedNum: 0,
    sharedNum: 0,
    likedNum: 1
  }
]

class RecommendVideo {
  volume: number = 0
  muted: boolean = true
  paused: boolean = true
  currentTime: number = 0
  currentIndex: number = 0
  currentPageSize: number = 10
  currentPagePosition: number = 0
  volumeBarIsFocus: boolean = false
  volumeBarTimeoutId: number = 0
  isFullScreen: boolean = false
  videoInfos: APIResponse.PostItem[] = videoInfos

  // srcList: string[] = [
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  // ]

  constructor() {
    makeAutoObservable(this)
  }

  get CurrentVideoInfo() {
    return this.videoInfos![this.currentIndex]
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

  setPaused(paused: boolean) {
    this.paused = paused
  }

  setFullScreen(isFullScreen: boolean) {
    this.isFullScreen = isFullScreen
  }

  setVolume(volume: number) {
    this.volume = volume
  }

  setCurrentTime(currentTime: number) {
    this.currentTime = currentTime
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

  setCurrentPage(pageSize: number) {
    this.currentPageSize = pageSize
  }

  setCurrentPos(position: number) {
    this.currentPagePosition = position
  }

  setVideoInfos(videoInfos: APIResponse.PostItem[]) {
    this.videoInfos.push(...videoInfos)
  }

  scaleChangeVideoIndex(type: "next" | "prev") {
    return type === "next"
      ? (this.currentIndex + 1) % this.videoInfos!.length
      : (this.currentIndex + this.videoInfos!.length - 1) % this.videoInfos!.length
  }

  changeToNextPrevVideo(type: "next" | "prev") {
    return (this.currentIndex = this.scaleChangeVideoIndex(type))
  }
}

const RecommendVideoStore = new RecommendVideo()

export default RecommendVideoStore
