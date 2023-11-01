import { useLocation, useNavigate } from "react-router-dom"
import MenuButton from "./MenuButton"
import "./style/LeftMenu.scss"

type MenuProps = {
  items: Menu.MenuItem[]
}

export default function LeftMenu({ items }: MenuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = ({ path, text }: Pick<Menu.MenuItem, "path" | "text">) => {
    navigate(path!)
  }

  return (
    <>
      <div className='menu-wrap'>
        <div className='menu-container'>
          {items.map((item, index) => (
            <MenuButton
              className={location.pathname === item.path ? "active-menu-item" : ""}
              key={index}
              text={item.text}
              Icon={item.Icon}
              size={item.size}
              path={item.path}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  )
}
