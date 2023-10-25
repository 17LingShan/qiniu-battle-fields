declare namespace Storage {
  interface StorageConfig {
    profile?: Profile
    [key: string | symbol]: PropertyKey
  }

  interface Profile {
    name?: string
  }
}
