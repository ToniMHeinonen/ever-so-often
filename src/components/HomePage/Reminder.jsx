import { Row } from '../../styles/layouts'
import { getActiveActivity } from '../../utils/reminderHandler'
import Button from '../Button'
import {
  ActiveContainer,
  ActiveTextContainer,
  ActiveTitle,
  InactiveContainer,
  InactiveTitle,
  ReminderIcon,
} from './style'

const ActiveReminder = ({ reminder, activity, onPress }) => {
  return (
    <Button onPress={() => onPress(reminder.id)} component={ActiveContainer}>
      <Row>
        <ReminderIcon name="calendar" styleComponent={ReminderIcon} size={64} />
        <ActiveTextContainer>
          <ActiveTitle title>{reminder.name}</ActiveTitle>
          <ActiveTitle bold>{activity.name}</ActiveTitle>
        </ActiveTextContainer>
      </Row>
    </Button>
  )
}

const InactiveReminder = ({ reminder, onPress }) => {
  return (
    <Button onPress={() => onPress(reminder.id)} component={InactiveContainer}>
      <InactiveTitle title>{reminder.name}</InactiveTitle>
    </Button>
  )
}

const Reminder = ({ reminder, currentDate, onPress }) => {
  const activity = getActiveActivity(reminder, currentDate)
  return activity ? (
    <ActiveReminder reminder={reminder} activity={activity} onPress={onPress} />
  ) : (
    <InactiveReminder reminder={reminder} onPress={onPress} />
  )
}

export default Reminder
