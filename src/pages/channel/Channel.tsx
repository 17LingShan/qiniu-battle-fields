import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Channel() {
  const { channelId } = useParams()

  useEffect(() => {}, [channelId])

  return <></>
}

export default Channel
