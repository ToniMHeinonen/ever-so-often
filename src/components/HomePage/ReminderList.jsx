import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import useReminderStorage from '../../hooks/useReminderStorage'
import Text from '../../styles/Text'
import { splitRemindersByActiveState } from '../../utils/reminderHandler'
import Reminder from './Reminder'
import { ReminderHeader, ReminderSeparator } from './style'

const ReminderList = () => {
  const [activeReminders, setActiveReminders] = useState([])
  const [inactiveReminders, setInactiveReminders] = useState([])
  const reminderStorage = useReminderStorage()

  const currentDate = new Date()

  useEffect(() => {
    const getReminders = async () => {
      const reminders = await reminderStorage.getReminders()
      const [active, inactive] = splitRemindersByActiveState(
        reminders,
        currentDate
      )
      setActiveReminders(active)
      setInactiveReminders(inactive)
    }
    getReminders()
  }, [])

  return (
    <View>
      <FlatList
        data={activeReminders}
        ListHeaderComponent={
          <ReminderHeader title>{"Today's Activities"}</ReminderHeader>
        }
        ItemSeparatorComponent={ReminderSeparator}
        renderItem={({ item }) => (
          <Reminder key={item.id} reminder={item} currentDate={currentDate} />
        )}
      />
      <Text title>Inactive reminders</Text>
      {inactiveReminders.map((r) => (
        <Reminder key={r.id} reminder={r} currentDate={currentDate} />
      ))}
    </View>
  )
}

export default ReminderList
