import { CSSProperties, useEffect } from "react"
import ContentButton from "./MenuButton"
import { useLocation, useNavigate } from "react-router-dom"

type MenuProps = {
  items: Menu.MenuItem[]
}

export default function LeftMenu({ items }: MenuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = ({ path, text }: Pick<Menu.MenuItem, "path" | "text">) => {
    console.log(path)
    console.log(text)
    navigate(path!)
  }

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <>
      <div style={menuWrap}>
        <ul>
          {items.map((item, index) => (
            <ContentButton
              className={location.pathname === item.path ? "active-menu-item" : ""}
              key={index}
              text={item.text}
              Icon={item.Icon}
              size={item.size}
              path={item.path}
              style={{ marginTop: "2vh" }}
              onClick={handleClick}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
const menuWrap: CSSProperties = {
  width: "10vw",
  height: "90vh",
  paddingTop: "2vh",
  boxSizing: "border-box"
}
