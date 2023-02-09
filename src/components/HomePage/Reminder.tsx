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
import { Activity, Reminder as ReminderType } from '../../utils/types'

interface ReminderBaseProps {
  reminder: ReminderType
  onPress: (id: string) => void
}

interface ActiveReminderProps extends ReminderBaseProps {
  activity: Activity
}

interface ReminderProps extends ReminderBaseProps {
  currentDate: Date
}

const ActiveReminder = ({
  reminder,
  activity,
  onPress,
}: ActiveReminderProps): JSX.Element => {
  return (
    <Button
      onPress={(): void => onPress(reminder.id)}
      component={ActiveContainer}
    >
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

const InactiveReminder = ({
  reminder,
  onPress,
}: ReminderBaseProps): JSX.Element => {
  return (
    <Button
      onPress={(): void => onPress(reminder.id)}
      component={InactiveContainer}
    >
      <InactiveTitle title>{reminder.name}</InactiveTitle>
    </Button>
  )
}

const Reminder = ({
  reminder,
  currentDate,
  onPress,
}: ReminderProps): JSX.Element => {
  const activity = getActiveActivity(reminder, currentDate)
  return activity ? (
    <ActiveReminder reminder={reminder} activity={activity} onPress={onPress} />
  ) : (
    <InactiveReminder reminder={reminder} onPress={onPress} />
  )
}

export default Reminder
