import useReminderStorage from '../../hooks/useReminderStorage'
import SizedBox from '../../styles/SizedBox'
import TextButton from '../TextButton'
import ReminderList from './ReminderList'
import { PageContainer } from './style'

const HomePage = () => {
  const reminderStorage = useReminderStorage()

  return (
    <PageContainer>
      <ReminderList />
      <SizedBox height={100} />
      <TextButton onPress={() => reminderStorage.clearReminders()}>
        Clear reminders
      </TextButton>
    </PageContainer>
  )
}

export default HomePage
