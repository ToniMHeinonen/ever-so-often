import useReminderStorage from '../../hooks/useReminderStorage'
import { NewReminderFormContainer } from './NewReminderForm'
import { useNavigate } from 'react-router-native'

const NewReminder = () => {
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

  return <NewReminderFormContainer onSubmit={onSubmit} />
}

export default NewReminder
