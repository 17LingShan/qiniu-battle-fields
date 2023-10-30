import { observer } from "mobx-react"
import "./style/LabelInput.scss"
import { FaAdn } from "react-icons/fa6"

interface LabelInputProps {
  label?: string
  onChange?: Function
}

function LabelInput({ label, onChange }: LabelInputProps) {
  return (
    <>
      <div className='label-input-wrap'>
        <div className=' label-input-container'>
          <div className='flex-hor-ver-center label-wrap'>
            <div className='flex-hor-ver-center label-icon'>
              <FaAdn />
            </div>
            <label className='auth-input-label'>{label}</label>
          </div>
          <div className='flex-hor-ver-center input-wrap '>
            <input className='auth-input' type='text' />
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(LabelInput)
