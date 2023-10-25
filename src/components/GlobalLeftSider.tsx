import { CSSProperties } from "react"
import ContentButton, { ContentButtonProp } from "./Common/ContentButton"
import { FaHeartCirclePlus, FaRegCommentDots } from "react-icons/fa6"

export default function GlobalLeftSider() {
  const buttonList: ContentButtonProp[] = [
    {
      text: "like",
      Icon: FaHeartCirclePlus
    },
    {
      text: "comment",
      Icon: FaRegCommentDots
    }
  ]

  return (
    <>
      <div style={leftSiderWrap}>
        {buttonList.map((item, index) => (
          <ContentButton key={index} text={item.text} Icon={item.Icon} size={item.size} style={{ marginTop: "2vh" }} />
        ))}
      </div>
    </>
  )
}

const leftSiderWrap: CSSProperties = {
  display: "block",
  width: "10vw",
  height: "100%",
  alignItems: "center",
  backgroundColor: "#161823"
}
