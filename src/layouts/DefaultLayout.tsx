import LeftSider from "../components/LeftSider"
import RightSider from "../components/Right/RightSider"
import "./DefaultLayout.scss"

export default function DefaultLayout() {
  return (
    <>
      <div className='default-layout'>
        <LeftSider />
        <RightSider />
      </div>
    </>
  )
}
