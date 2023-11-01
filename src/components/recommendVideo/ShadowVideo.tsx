import { observer } from "mobx-react"
import "./style/RecommendVideo.scss"

interface ShadowVideoProps {
  src: string
}

function ShadowVideo({ src }: ShadowVideoProps) {
  return (
    <>
      <figure className='figure-video'>
        <video className='video-instance' id='video'>
          <source className='video-source' style={{ height: "100%" }} type='video/mp4' src={src} />
        </video>
      </figure>
    </>
  )
}

export default observer(ShadowVideo)
