import { CSSProperties } from "react"
import BaiZi from "../../assets/baizi.jpg"

export default function GlobalAvatar() {
  return (
    <>
      <div style={avatarWrap}>
        <div
          style={avatarEntity}
          onMouseEnter={() => {
            console.log("mouse in")
          }}
          onMouseLeave={() => {
            console.log("mouse leave")
          }}
        >
          <img src={BaiZi} style={imgStyle} />
        </div>
      </div>
    </>
  )
}

const avatarWrap: CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "5vh",
  height: "100%",
  cursor: "pointer"
}

const avatarEntity: CSSProperties = {
  width: "100%",
  height: "5vh"
}

const imgStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: 9999
}
