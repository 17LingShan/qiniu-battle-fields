import GlobalContent from "../components/GlobalContent"
import GlobalHeader from "../components/Header/GlobalHeader"
import "./DefaultLayout.scss"

export default function DefaultLayout() {
  return (
    <>
      <div className='default-layout'>
        <GlobalHeader></GlobalHeader>
        <GlobalContent></GlobalContent>
      </div>
    </>
  )
}
