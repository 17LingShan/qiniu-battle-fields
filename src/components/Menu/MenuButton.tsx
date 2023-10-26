import "./MenuButton.scss"

export default function ContentButton({ path, Icon, text, size, style, iconStyle, className, onClick }: Menu.MenuItem) {
  return (
    <>
      <li
        className={`${className} menu-item-li`}
        style={style}
        onClick={() => {
          // ???
          onClick && onClick({ text, path })
        }}
      >
        <div style={{ fontSize: size ?? 24, ...iconStyle }}>
          <Icon />
        </div>
        <span>{text ?? "iconText"}</span>
      </li>
    </>
  )
}
