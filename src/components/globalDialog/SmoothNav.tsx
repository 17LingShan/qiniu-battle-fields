import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import "./style/SmoothNav.scss"
import UserStore from "../../store/User"

function SmoothNav({ navList }: GlobalDialog.SmoothNavProps) {
  const smoothBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    smoothBarRef.current!.style.left = `${50 * UserStore.authTabIndex}%`
  }, [UserStore.authTabIndex])

  return (
    <>
      <div className='smooth-nav-wrap'>
        <div className='smooth-nav-container'>
          <ul className='smooth-nav-ul'>
            {navList.map((item, index) => (
              <li key={index} onClick={() => UserStore.setAuthTabIndex(index)}>
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
