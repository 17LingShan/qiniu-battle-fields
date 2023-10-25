import { CSSProperties } from "react"
import GlobalLogo from "./GLobalLogo"
import GlobalSearch from "./GlobalSearch"
import GlobalProfile from "./GlobalProfile"

export default function GlobalHeader() {
  return (
    <>
      <header style={HeaderStyle}>
        <GlobalLogo />
        <GlobalSearch />
        <GlobalProfile />
      </header>
    </>
  )
}

const HeaderStyle: CSSProperties = {
  display: "flex",
  width: "100vw",
  height: "10vh",
  justifyContent: "space-between",
  flexDirection: "row",
  backgroundColor: "#161823"
}
