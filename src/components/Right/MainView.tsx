import { CSSProperties } from "react"
import { Outlet } from "react-router-dom"

export default function MainView() {
  return (
    <>
      <div style={mainViewWrap}>
        <div style={mainViewContainer}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

const mainViewWrap: CSSProperties = {
  height: "90vh",
  padding: "5vh",
  backgroundColor: "yellow",
  boxSizing: "border-box"
}

const mainViewContainer: CSSProperties = {
  height: "100%",
  width: "100%",
  backgroundColor: "pink"
  // borderRadius: "5vh"
}
