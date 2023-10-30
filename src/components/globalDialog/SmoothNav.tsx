import { useEffect, useRef } from "react"
import { observer } from "mobx-react"
import "./style/SmoothNav.scss"

function SmoothNav({ navList, currentIndex, setNavIndex }: GlobalDialog.SmoothNavProps) {
  const smoothBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    smoothBarRef.current!.style.left = `${50 * currentIndex}%`
  }, [currentIndex])

  return (
    <>
      <div className='smooth-nav-wrap'>
        <div className='smooth-nav-container'>
          <ul className='smooth-nav-ul'>
            {navList.map((item, index) => (
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
