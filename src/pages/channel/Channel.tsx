import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { message } from "antd"
import { getRecommendVideos } from "../../apis/videos"
import RecommendVideoStore from "../../store/RecommendVideo"
import VideoCardList from "../../components/videoCard/VideoCardList"
import "./style/Channel.scss"

function Channel() {
  const { channelId } = useParams()
  const [messageApi, contextHolder] = message.useMessage({ maxCount: 1 })
  const [videoList, setVideoList] = useState<APIResponse.PostItem[]>([])

  const handleFetchChannelVideo = async () => {
    try {
      const { data } = (await getRecommendVideos({
        pageSize: RecommendVideoStore.currentPageSize,
        pagePos: RecommendVideoStore.currentPagePosition
      })) as { data: APIResponse.RecommendVideoResponse }

      setVideoList([...data.postItems])
    } catch (err) {
      messageApi.warning({
        content: "网络错误, 请刷新页面重试!"
      })
    }
  }

  useEffect(() => {
    handleFetchChannelVideo()
  }, [channelId])

  return (
    <>
      {contextHolder}
      <div className='channel-wrap'>
        <VideoCardList videoList={videoList} />
      </div>
    </>
  )
}

export default Channel
