import { useLocation, useNavigate } from "react-router-dom"
import MenuButton from "./MenuButton"
import "./style/LeftMenu.scss"
import { useEffect } from "react"

type MenuProps = {
  items: Menu.MenuItem[]
  channelItems: Menu.MenuItem[]
}

export default function LeftMenu({ items, channelItems }: MenuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = ({ path, text }: Pick<Menu.MenuItem, "path" | "text">) => {
    navigate(path!)
  }

  useEffect(() => {
    console.log(location.pathname)
  }, [location])

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
          <div className='menu-item-division-wrap'>
            <div className='menu-item-division-bar'></div>
          </div>
          {channelItems.map((item, index) => (
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
