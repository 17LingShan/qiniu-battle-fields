import TooBar from "./ToolBar"
import HeaderDrawer from "./HeaderDrawer"
import "./style/GlobalHeader.scss"
import { observer } from "mobx-react"

function GlobalHeader() {
  return (
    <>
      <div className='header-fixed-wrap'>
        <header className='header-wrap'>
          <div className='header-container'>
            <TooBar />
          </div>
          <HeaderDrawer />
        </header>
      </div>
    </>
  )
}

export default observer(GlobalHeader)
