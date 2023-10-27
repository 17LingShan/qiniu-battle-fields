import { useNavigate } from "react-router-dom"
import BaiZi from "../../assets/baizi.jpg"
import "./style/GlobalAvatar.scss"

export default function GlobalAvatar() {
  const navigate = useNavigate()

  const handleClickAvatar = () => {
    navigate("/profile")
  }

  return (
    <>
      <div className='avatar-wrap' onClick={handleClickAvatar}>
        <div
          className='avatar-entity'
          onMouseEnter={() => {
            console.log("mouse in")
          }}
          onMouseLeave={() => {
            console.log("mouse leave")
          }}
        >
          <img src={BaiZi} className='avatar-img' />
        </div>
      </div>
    </>
  )
}
