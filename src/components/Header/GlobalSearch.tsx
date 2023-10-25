import { CSSProperties } from "react"

export default function GlobalSearch() {
  return (
    <>
      <div style={searchWrap}></div>
    </>
  )
}
const searchWrap: CSSProperties = {
  width: "20vw",
  backgroundColor: "blue"
}
