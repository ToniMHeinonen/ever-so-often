import { View } from 'react-native'
import { useNavigate } from 'react-router-native'
import SizedBox from '../../styles/SizedBox'
import Reminder from './Reminder'
import {
  ReminderHeader,
  ReminderListContainer,
  ReminderSeparator,
} from './style'

const ReminderList = ({ currentDate, activeReminders, inactiveReminders }) => {
  const navigate = useNavigate()

  const reminderOnPress = (id) => {
    navigate(`/${id}`)
  }

  return (
    <ReminderListContainer>
      <ReminderHeader title>{"Today's Activities"}</ReminderHeader>
      {activeReminders.map((r, index) => (
        <View key={r.id}>
          <Reminder
            reminder={r}
            currentDate={currentDate}
            onPress={reminderOnPress}
          />
          {index < activeReminders.length - 1 && <ReminderSeparator />}
        </View>
      ))}
      <SizedBox height={20} />
      <ReminderHeader title>{'Other Activities'}</ReminderHeader>
      {inactiveReminders.map((r, index) => (
        <View key={r.id}>
          <Reminder
            reminder={r}
            currentDate={currentDate}
            onPress={reminderOnPress}
          />
          {index < inactiveReminders.length - 1 && <ReminderSeparator />}
        </View>
      ))}
    </ReminderListContainer>
  )
}

export default ReminderList
