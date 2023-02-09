import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import SizedBox from '../../styles/SizedBox'
import Text from '../../styles/Text'
import Reminder from './Reminder'
import {
  ReminderHeader,
  ReminderListContainer,
  ReminderSeparator,
} from './style'
import {
  Reminder as ReminderType,
  Route,
  StackNavigation,
} from '../../utils/types'

interface Props {
  currentDate: Date
  activeReminders: ReminderType[]
  inactiveReminders: ReminderType[]
}

const ReminderList = ({
  currentDate,
  activeReminders,
  inactiveReminders,
}: Props): JSX.Element => {
  const navigation = useNavigation<StackNavigation>()

  const reminderOnPress = (id: string): void => {
    navigation.navigate(Route.Reminder, { id: id })
  }

  return (
    <ReminderListContainer>
      <ReminderHeader title>{"Today's Activities"}</ReminderHeader>
      {activeReminders.length > 0 ? (
        <>
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
        </>
      ) : (
        <Text title center>
          No activities today
        </Text>
      )}

      <SizedBox height={20} />
      {inactiveReminders.length > 0 && (
        <>
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
        </>
      )}
    </ReminderListContainer>
  )
}

export default ReminderList
