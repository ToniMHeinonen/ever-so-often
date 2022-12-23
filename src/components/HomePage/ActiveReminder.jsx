import { View } from 'react-native'
import Text from '../../styles/Text'
import { getReminderActiveDay } from '../../utils/reminderHandler'

const ActiveReminder = ({ currentDate, reminder }) => {
  const activeDay = getReminderActiveDay(reminder, currentDate)
  console.log(activeDay)
  console.log(reminder)
  return (
    <View>
      <Text>{reminder.name}</Text>
    </View>
  )
}

export default ActiveReminder
