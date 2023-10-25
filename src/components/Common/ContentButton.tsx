import { CSSProperties } from "react"
import { IconType } from "react-icons"

export interface ContentButtonProp {
  Icon: IconType
  text?: string
  size?: number
  style?: CSSProperties
  iconStyle?: CSSProperties
}

export default function ContentButton({ Icon, text, size, style, iconStyle }: ContentButtonProp) {
  return (
    <>
      <div style={{ ...contentButtonWrap, ...style }}>
        <div>
          <div style={{ fontSize: size ?? 24, ...iconStyle }}>
            <Icon />
          </div>
          {text ?? "iconText"}
        </div>
      </div>
    </>
  )
}

const contentButtonWrap: CSSProperties = {
  minWidth: "5vh",
  minHeight: "5vh",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#8e8b92",
  cursor: "pointer"
}
