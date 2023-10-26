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
  backgroundColor: "#161823",
  cursor: "pointer"
}

const logoContainer: CSSProperties = {
  display: "flex",
  height: "10vh",
  alignItems: "center",
  color: "#8e8b92",
  justifyContent: "center"
}
