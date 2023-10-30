declare namespace GlobalDialog {
  interface NavItem {
    text: string
  }

  interface SmoothNavProps {
    navList: NavItem[]
    currentIndex: number
    setNavIndex: React.Dispatch<React.SetStateAction<number>>
  }
}
