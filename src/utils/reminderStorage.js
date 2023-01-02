import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import testReminders from '../../data/testReminders'
import _ from 'lodash'

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

  async initializeTestReminders() {
    const reminders = testReminders
    reminders.forEach((r) => (r.id = uuid.v4()))

    await AsyncStorage.setItem(this.namespace, JSON.stringify(reminders))
  }

  async getReminder(id) {
    const reminders = await this.getReminders()

    if (reminders) {
      return reminders.find((r) => r.id === id)
    }

    return null
  }

  async addReminder(reminder) {
    reminder.id = uuid.v4()

    const reminders = await this.getReminders()
    reminders.push(reminder)

    await AsyncStorage.setItem(this.namespace, JSON.stringify(reminders))
  }

  async updateReminder(reminder) {
    const reminders = await this.getReminders()
    const updatedReminders = reminders.map((r) =>
      r.id !== reminder.id ? r : reminder
    )

    await AsyncStorage.setItem(this.namespace, JSON.stringify(updatedReminders))
  }

  async removeReminder(reminder) {
    const reminders = await this.getReminders()
    const updatedReminders = _.remove(reminders, (r) => r.id !== reminder.id)

    await AsyncStorage.setItem(this.namespace, JSON.stringify(updatedReminders))
  }

  async clearReminders() {
    await AsyncStorage.removeItem(this.namespace)
  }
}

export default ReminderStorage
