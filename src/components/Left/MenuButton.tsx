import "./style/MenuButton.scss"

export default function ContentButton({ path, Icon, text, size, style, iconStyle, className, onClick }: Menu.MenuItem) {
  return (
    <>
      <div className='menu-item-li' style={style} onClick={() => onClick?.({ path, text })}>
        <div className={`${className} menu-item-container`}>
          <div style={{ verticalAlign: "middle", fontSize: size ?? 18, ...iconStyle }}>
            <Icon />
          </div>
          <div>{text ?? "iconText"}</div>
        </div>
      </div>
    </>
  )
}
