import { CSSProperties } from "react"
import GlobalSearch from "./GlobalSearch"
import GlobalProfile from "./GlobalProfile"

export default function GlobalHeader() {
  return (
    <>
      <header style={HeaderStyle}>
        <GlobalSearch />
        <GlobalProfile />
      </header>
    </>
  )
}

const HeaderStyle: CSSProperties = {
  display: "flex",
  height: "10vh",
  justifyContent: "flex-end",
  flexDirection: "row",
  backgroundColor: "#161823"
}
