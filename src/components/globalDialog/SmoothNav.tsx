import { observer } from "mobx-react"
import "./style/SmoothNav.scss"
import { useEffect, useRef, useState } from "react"

function SmoothNav() {
  const [navIndex, setNavIndex] = useState(0)
  const smoothBarRef = useRef<HTMLDivElement>(null)

  const liItems = [{ text: "登录" }, { text: "注册" }]

  useEffect(() => {
    smoothBarRef.current!.style.left = `${50 * navIndex}%`
  }, [navIndex])

  return (
    <>
      <div className='smooth-nav-wrap'>
        <div className='smooth-nav-container'>
          <ul className='smooth-nav-ul'>
            {liItems.map((item, index) => (
              <li key={index} onClick={() => setNavIndex(index)}>
                {item.text}
              </li>
            ))}
            <div ref={smoothBarRef} className={"smooth-bar"}></div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default observer(SmoothNav)
