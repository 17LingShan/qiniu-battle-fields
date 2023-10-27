import { CSSProperties } from "react"
import GlobalAvatar from "./Avatar"
import "./ToolBar.scss"
export default function GlobalProfile() {
  return (
    <>
      <div className='tool-bar-wrap'>
        <GlobalAvatar />
        <GlobalAvatar />
      </div>
    </>
  )
}
