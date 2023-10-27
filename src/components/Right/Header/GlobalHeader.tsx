import TooBar from "./ToolBar"
import "./GlobalHeader.scss"
export default function GlobalHeader() {
  return (
    <>
      <div className='header-fixed-wrap'>
        <header className='header-wrap'>
          <div className='header-container'>
            <TooBar />
          </div>
        </header>
      </div>
    </>
  )
}
