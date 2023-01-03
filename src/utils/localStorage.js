import AsyncStorage from '@react-native-async-storage/async-storage'

class LocalStorage {
  constructor(namespace = 'local-storage') {
    this.namespace = namespace
  }

  async getItem(key, defaultItem = null) {
    const item = await AsyncStorage.getItem(`${this.namespace}:${key}`)

    return item ? JSON.parse(item) : defaultItem
  }

  async setItem(key, item) {
    await AsyncStorage.setItem(`${this.namespace}:${key}`, JSON.stringify(item))
  }

  async removeItem(key) {
    await AsyncStorage.removeItem(`${this.namespace}:${key}`)
  }
}

export default LocalStorage
