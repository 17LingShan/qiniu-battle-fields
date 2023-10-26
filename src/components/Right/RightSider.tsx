import { CSSProperties } from "react"
import MainView from "./MainView"
import GlobalHeader from "../Header/GlobalHeader"

export default function RightSider() {
  return (
    <>
      <div style={rightSiderWrap}>
        <GlobalHeader />
        <MainView />
      </div>
    </>
  )
}

const rightSiderWrap: CSSProperties = {
  width: "90vw",
  alignItems: "center"
}
