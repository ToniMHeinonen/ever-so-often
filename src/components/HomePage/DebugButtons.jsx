import { View } from 'react-native'
import {
  activeTestReminder,
  inactiveTestReminder,
} from '../../../data/testReminders'
import useReminderStorage from '../../hooks/useReminderStorage'
import Text from '../../styles/Text'
import TextButton from '../TextButton'
import { debugButtonStyle } from './style'

const DebugButtons = ({ onChange }) => {
  const reminderStorage = useReminderStorage()

  const addTestReminders = async () => {
    await reminderStorage.initializeTestReminders()
    await onChange()
  }

  const addActiveTestReminder = async () => {
    await reminderStorage.addReminder(activeTestReminder)
    await onChange()
  }

  const addInactiveTestReminder = async () => {
    await reminderStorage.addReminder(inactiveTestReminder)
    await onChange()
  }

  const clearReminders = async () => {
    await reminderStorage.clearReminders()
    await onChange()
  }

  return (
    <View>
      <Text center title>
        Debug Buttons
      </Text>
      <TextButton buttonStyle={debugButtonStyle} onPress={addTestReminders}>
        Add test reminders
      </TextButton>
      <TextButton
        buttonStyle={debugButtonStyle}
        onPress={addActiveTestReminder}
      >
        Add active test reminder
      </TextButton>
      <TextButton
        buttonStyle={debugButtonStyle}
        onPress={addInactiveTestReminder}
      >
        Add inactive test reminder
      </TextButton>
      <TextButton buttonStyle={debugButtonStyle} onPress={clearReminders}>
        Clear reminders
      </TextButton>
    </View>
  )
}

export default DebugButtons
