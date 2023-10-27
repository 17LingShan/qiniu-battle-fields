import { CSSProperties } from "react"

export default function SearchBar() {
  return (
    <>
      <div style={searchWrap}></div>
    </>
  )
}
const searchWrap: CSSProperties = {
  width: "50rem",
  backgroundColor: "blue"
}
