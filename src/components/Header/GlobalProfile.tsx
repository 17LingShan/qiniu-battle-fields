import { CSSProperties } from "react"
import GlobalAvatar from "./GlobalAvatar"

export default function GlobalProfile() {
  return (
    <>
      <div style={profileWrap}>
        <div style={profileContainer}>
          <div style={buttonWrap}></div>
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
