import { useEffect, useState } from 'react'
import { View } from 'react-native'
import useReminderStorage from '../../hooks/useReminderStorage'
import ActiveReminder from './ActiveReminder'

const ReminderList = () => {
  const [reminders, setReminders] = useState([])
  const reminderStorage = useReminderStorage()

  const currentDate = new Date()

  useEffect(() => {
    const getReminders = async () => {
      const reminders = await reminderStorage.getReminders()
      setReminders(reminders)
    }
    getReminders()
  }, [])

  return (
    <View>
      {reminders.map((r) => (
        <ActiveReminder key={r.id} reminder={r} currentDate={currentDate} />
      ))}
    </View>
  )
}

export default ReminderList
