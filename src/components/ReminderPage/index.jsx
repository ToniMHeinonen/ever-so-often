import useReminderStorage from '../../hooks/useReminderStorage'
import { useNavigate, useParams } from 'react-router-native'
import { ReminderFormContainer } from './ReminderForm'
import { useEffect, useState } from 'react'
import LoadingIcon from '../../styles/LoadingIcon'

const ReminderPage = () => {
  const { id } = useParams()
  const [reminder, setReminder] = useState(undefined)
  const reminderStorage = useReminderStorage()
  const navigate = useNavigate()

  useEffect(() => {
    retrieveReminder()
  }, [])

  const retrieveReminder = async () => {
    if (!id) return

    try {
      const reminder = await reminderStorage.getReminder(id)
      setReminder(reminder)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async (values) => {
    try {
      id
        ? await reminderStorage.addReminder(values)
        : await reminderStorage.updateReminder(values)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  // Do not render ReminderFormContainer before reminder has been retrieved
  // if id is defined, since otherwise it does not function correctly
  if (id && !reminder) {
    return <LoadingIcon />
  }

  return <ReminderFormContainer onSubmit={onSubmit} values={reminder} />
}

export default ReminderPage
