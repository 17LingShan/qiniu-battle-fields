import { CSSProperties } from "react"

export default function GlobalSearch() {
  return (
    <>
      <div style={searchWrap}></div>
    </>
  )
}
const searchWrap: CSSProperties = {
  width: "30vw",
  marginRight: "5vw",
  backgroundColor: "blue"
}
