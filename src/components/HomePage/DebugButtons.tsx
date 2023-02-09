import { View } from 'react-native'
import testReminders, {
  activeTestReminder,
  inactiveTestReminder,
} from '../../../data/testReminders'
import useReminderStorage from '../../hooks/useReminderStorage'
import Text from '../../styles/Text'
import TextButton from '../TextButton'
import { debugButtonStyle } from './style'

interface Props {
  onChange: () => void
}

const DebugButtons = ({ onChange }: Props): JSX.Element => {
  const reminderStorage = useReminderStorage()

  const addTestReminders = async (): Promise<void> => {
    await reminderStorage.initializeReminders(testReminders)
    await onChange()
  }

  const addActiveTestReminder = async (): Promise<void> => {
    await reminderStorage.addReminder(activeTestReminder)
    await onChange()
  }

  const addInactiveTestReminder = async (): Promise<void> => {
    await reminderStorage.addReminder(inactiveTestReminder)
    await onChange()
  }

  const clearReminders = async (): Promise<void> => {
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
