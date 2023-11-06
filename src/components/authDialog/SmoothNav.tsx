import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import AuthDialogStore from "../../store/AuthDialog"
import "./style/SmoothNav.scss"

function SmoothNav({ navList }: AuthDialog.SmoothNavProps) {
  const smoothBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    smoothBarRef.current!.style.left = `${50 * AuthDialogStore.authTabIndex}%`
  }, [AuthDialogStore.authTabIndex])

  return (
    <>
      <div className='smooth-nav-wrap'>
        <div className='smooth-nav-container'>
          <ul className='smooth-nav-ul'>
            {navList.map((item, index) => (
              <li key={index} onClick={() => AuthDialogStore.setAuthTabIndex(index)}>
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
