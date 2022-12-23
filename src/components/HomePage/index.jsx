import { View } from 'react-native'
import useReminderStorage from '../../hooks/useReminderStorage'
import TextButton from '../TextButton'
import ReminderList from './ReminderList'

const HomePage = () => {
  const reminderStorage = useReminderStorage()

  return (
    <View>
      <ReminderList />
      <TextButton onPress={() => reminderStorage.clearReminders()}>
        Clear reminders
      </TextButton>
    </View>
  )
}

export default HomePage
