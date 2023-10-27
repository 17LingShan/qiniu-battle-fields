declare namespace Menu {
  interface MenuItem {
    Icon: IconType
    path: string
    className?: string
    text?: string
    size?: number
    onClick?: ({ text, path }: Pick<MenuItem, "path" | "text">) => void
    style?: CSSProperties
    iconStyle?: CSSProperties
  }
}
