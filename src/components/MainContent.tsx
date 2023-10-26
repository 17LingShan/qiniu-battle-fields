import { CSSProperties } from "react"
import LeftSider from "./LeftSider"
import MainView from "./Right/MainView"

export default function MainContent() {
  return (
    <>
      <div style={contentWrap}>
        <LeftSider />
        <MainView />
      </div>
    </>
  )
}

const contentWrap: CSSProperties = {
  display: "flex",
  height: "90vh",
  justifyContent: "space-between",
  flexDirection: "row"
}
