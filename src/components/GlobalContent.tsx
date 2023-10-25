import { CSSProperties } from "react"
import GlobalLeftSider from "./GlobalLeftSider"
import MainView from "./MainView"

export default function GlobalContent() {
  return (
    <>
      <div style={contentWrap}>
        <GlobalLeftSider></GlobalLeftSider>
        <MainView></MainView>
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
