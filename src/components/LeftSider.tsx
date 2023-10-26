import { CSSProperties } from "react"
import { FaFaceGrinStars, FaHouseChimney } from "react-icons/fa6"
import Logo from "./Header/GLobalLogo"
import LeftMenu from "./Menu/LeftMenu"

export default function LeftSider() {
  const buttonList: Menu.MenuItem[] = [
    {
      text: "recommend",
      path: "/recommend",
      Icon: FaFaceGrinStars
    },
    {
      text: "home",
      path: "/",
      Icon: FaHouseChimney
    },
    {
      text: "profile",
      path: "/profile",
      Icon: FaHouseChimney
    }
  ]

  return (
    <>
      <div style={leftSiderWrap}>
        <Logo />
        <LeftMenu items={buttonList} />
      </div>
    </>
  )
}

const leftSiderWrap: CSSProperties = {
  width: "10vw",
  height: "100%",
  alignItems: "center",
  backgroundColor: "#161823"
}
