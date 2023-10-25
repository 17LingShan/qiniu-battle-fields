import { CSSProperties } from "react"

export default function MainView() {
  return (
    <>
      <div style={mainViewWrap}>
        <h1>mainView</h1>
      </div>
    </>
  )
}

const mainViewWrap: CSSProperties = {
  width: "80%",
  height: "90%",
  marginTop: "5vh",
  marginRight: "10vh",
  borderRadius: "5vh",
  backgroundColor: "black"
}
