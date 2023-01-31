import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import _ from 'lodash'
import { NewReminder, Reminder } from './types'

class ReminderStorage {
  namespace: string

  constructor(namespace = 'reminders') {
    this.namespace = namespace
  }

  async getReminders(): Promise<Reminder[]> {
    const reminders = await AsyncStorage.getItem(this.namespace)

    if (reminders) {
      return JSON.parse(reminders)
    }

    return []
  }

  async initializeReminders(reminders: Reminder[]): Promise<void> {
    reminders.forEach((r) => (r.id = uuid.v4().toString()))

    await AsyncStorage.setItem(this.namespace, JSON.stringify(reminders))
  }

  async getReminder(id: string): Promise<Reminder | undefined> {
    const reminders = await this.getReminders()

    if (reminders) {
      return reminders.find((r: Reminder) => r.id === id)
    }

    return undefined
  }

  async addReminder(newReminder: NewReminder): Promise<void> {
    const reminder = { ...newReminder, id: uuid.v4().toString() }

    const reminders = await this.getReminders()
    reminders.push(reminder)

    await AsyncStorage.setItem(this.namespace, JSON.stringify(reminders))
  }

  async updateReminder(reminder: Reminder): Promise<void> {
    const reminders = await this.getReminders()
    const updatedReminders = reminders.map((r: Reminder) =>
      r.id !== reminder.id ? r : reminder
    )

    await AsyncStorage.setItem(this.namespace, JSON.stringify(updatedReminders))
  }

  async removeReminder(reminder: Reminder): Promise<void> {
    const reminders = await this.getReminders()
    const updatedReminders = _.remove(
      reminders,
      (r: Reminder) => r.id !== reminder.id
    )

    await AsyncStorage.setItem(this.namespace, JSON.stringify(updatedReminders))
  }

  async clearReminders(): Promise<void> {
    await AsyncStorage.removeItem(this.namespace)
  }
}

export default ReminderStorage
