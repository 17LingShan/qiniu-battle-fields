import { Outlet } from "react-router-dom"
import GlobalHeader from "./Header/GlobalHeader"
import "./RightSider.scss"

export default function RightSider() {
  return (
    <>
      <div className='right-sider-wrap'>
        <GlobalHeader />
        <div className='outlet-container'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
