import useReminderStorage from '../../hooks/useReminderStorage'
import { useNavigate } from 'react-router-native'
import { ReminderFormContainer } from './ReminderForm'

const ReminderPage = () => {
  const reminderStorage = useReminderStorage()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      await reminderStorage.addReminder(values)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return <ReminderFormContainer onSubmit={onSubmit} />
}

export default ReminderPage
