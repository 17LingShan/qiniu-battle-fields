import { CSSProperties } from "react"
import GlobalAvatar from "./GlobalAvatar"
import ContentButton, { ContentButtonProp } from "../Common/ContentButton"
import { FaHeartCirclePlus, FaRegCommentDots } from "react-icons/fa6"

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

export default function GlobalProfile() {
  return (
    <>
      <div style={profileWrap}>
        <div style={profileContainer}>
          <div style={buttonWrap}>
            {buttonList.map((item, index) => (
              <ContentButton key={index} text={item.text} Icon={item.Icon} size={item.size} style={buttonStyle} />
            ))}
          </div>
          <GlobalAvatar />
        </div>
      </div>
    </>
  )
}

const profileWrap: CSSProperties = {
  width: "30vw"
}

const profileContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  height: "100%",
  paddingRight: "5vh",
  boxSizing: "border-box" // 不突出到父元素外
}

const buttonWrap: CSSProperties = {
  display: "flex",
  marginRight: "2vh"
}

const buttonStyle: CSSProperties = {
  display: "flex",
  width: "5vh",
  justifyContent: "center",
  marginRight: "4vh"
}
