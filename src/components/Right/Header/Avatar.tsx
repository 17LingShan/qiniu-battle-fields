import { CSSProperties } from "react"
import { useNavigate } from "react-router-dom"
import BaiZi from "../../../assets/baizi.jpg"

export default function GlobalAvatar() {
  const navigate = useNavigate()

  const handleClickAvatar = () => {
    navigate("/profile")
  }

  return (
    <>
      <div style={avatarWrap} onClick={handleClickAvatar}>
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
  cursor: "pointer"
}

const avatarEntity: CSSProperties = {
  height: "2.25rem",
  width: "2.25rem"
}

const imgStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "50%"
}
