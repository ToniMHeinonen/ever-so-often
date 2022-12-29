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

const ActiveReminder = ({ reminder, activity }) => {
  return (
    <Button component={ActiveContainer}>
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

const InactiveReminder = ({ reminder }) => {
  return (
    <Button component={InactiveContainer}>
      <InactiveTitle title>{reminder.name}</InactiveTitle>
    </Button>
  )
}

const Reminder = ({ reminder, currentDate }) => {
  const activity = getActiveActivity(reminder, currentDate)
  return activity ? (
    <ActiveReminder reminder={reminder} activity={activity} />
  ) : (
    <InactiveReminder reminder={reminder} />
  )
}

export default Reminder
