import AsyncStorage from '@react-native-async-storage/async-storage'

class LocalStorage {
  namespace: string

  constructor(namespace = 'local-storage') {
    this.namespace = namespace
  }

  async getItem(
    key: string,
    defaultItem: unknown | null = null
  ): Promise<unknown> {
    const item = await AsyncStorage.getItem(`${this.namespace}:${key}`)

    return item ? JSON.parse(item) : defaultItem
  }

  async setItem(key: string, item: unknown): Promise<void> {
    await AsyncStorage.setItem(`${this.namespace}:${key}`, JSON.stringify(item))
  }

  async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(`${this.namespace}:${key}`)
  }
}

export default LocalStorage
