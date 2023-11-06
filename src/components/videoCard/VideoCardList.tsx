import VideoCard from "./VideoCard"
import "./style/VideoCardList.scss"

interface VideoCardListProps {
  videoList: APIResponse.PostItem[]
}

export default function VideoCardList({ videoList }: VideoCardListProps) {
  return (
    <>
      <div className='video-list-wrap'>
        <div className='video-list-container'>
          <ul className='video-list-ul clearfix'>
            {videoList.map((item, index) => (
              <li key={index}>
                <VideoCard videoInfo={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
