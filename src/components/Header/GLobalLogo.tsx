import { CSSProperties } from "react"

export default function GlobalLogo() {
  return (
    <>
      <div style={logoWrap}>
        <div style={logoContainer}>LOGO</div>
      </div>
    </>
  )
}

const logoWrap: CSSProperties = {
  width: "10vw",
  backgroundColor: "#161823"
}

const logoContainer: CSSProperties = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  color: "#8e8b92",
  justifyContent: "center"
}
