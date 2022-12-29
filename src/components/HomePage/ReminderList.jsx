import { useEffect, useState } from 'react'
import { View } from 'react-native'
import useReminderStorage from '../../hooks/useReminderStorage'
import SizedBox from '../../styles/SizedBox'
import { splitRemindersByActiveState } from '../../utils/reminderHandler'
import DebugButtons from './DebugButtons'
import Reminder from './Reminder'
import { ReminderHeader, ReminderSeparator } from './style'

const ReminderList = () => {
  const [activeReminders, setActiveReminders] = useState([])
  const [inactiveReminders, setInactiveReminders] = useState([])
  const reminderStorage = useReminderStorage()

  const currentDate = new Date()

  useEffect(() => {
    getReminders()
  }, [])

  const getReminders = async () => {
    const reminders = await reminderStorage.getReminders()
    const [active, inactive] = splitRemindersByActiveState(
      reminders,
      currentDate
    )
    setActiveReminders(active)
    setInactiveReminders(inactive)
  }

  return (
    <View>
      <ReminderHeader title>{"Today's Activities"}</ReminderHeader>
      {activeReminders.map((r, index) => (
        <View key={r.id}>
          <Reminder reminder={r} currentDate={currentDate} />
          {index < activeReminders.length - 1 && <ReminderSeparator />}
        </View>
      ))}
      <SizedBox height={20} />
      <ReminderHeader title>{'Other Activities'}</ReminderHeader>
      {inactiveReminders.map((r, index) => (
        <View key={r.id}>
          <Reminder reminder={r} currentDate={currentDate} />
          {index < inactiveReminders.length - 1 && <ReminderSeparator />}
        </View>
      ))}
      <SizedBox height={100} />
      <DebugButtons onChange={getReminders} />
    </View>
  )
}

export default ReminderList
