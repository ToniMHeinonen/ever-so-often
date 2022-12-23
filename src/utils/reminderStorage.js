import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

class ReminderStorage {
  constructor(namespace = 'reminders') {
    this.namespace = namespace
  }

  async getReminders() {
    const reminders = await AsyncStorage.getItem(this.namespace)
    if (reminders) {
      return JSON.parse(reminders)
    }

    return []
  }

  async addReminder(reminder) {
    reminder.id = uuid.v4()

    const reminders = await this.getReminders()
    reminders.push(reminder)
    await AsyncStorage.setItem(this.namespace, JSON.stringify(reminders))
  }
}

export default ReminderStorage
