declare namespace Storage {
  interface StorageConfig {
    nickname: string
    age: number
    [key: string | symbol]: PropertyKey
  }
}

interface MenuItemReflectIcon {
  [key: string]: IconType
}
