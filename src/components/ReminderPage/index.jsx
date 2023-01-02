import useReminderStorage from '../../hooks/useReminderStorage'
import { useNavigate, useParams } from 'react-router-native'
import { ReminderFormContainer } from './ReminderForm'
import { useEffect, useState } from 'react'
import LoadingIcon from '../../styles/LoadingIcon'
import { setAlert, useStateValue } from '../../state'

const ReminderPage = () => {
  const { id } = useParams()
  const [, dispatch] = useStateValue()
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

  const onRemove = async () => {
    const removeReminder = async () => {
      await reminderStorage.removeReminder(reminder)
      navigate('/')
    }

    const alert = {
      title: 'Remove Reminder',
      message: `Are you sure you want to remove reminder "${reminder.name}"?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Remove',
          onPress: removeReminder,
          style: 'remove',
        },
      ],
    }

    dispatch(setAlert(alert))
  }

  const onSubmit = async (values) => {
    try {
      id
        ? await reminderStorage.updateReminder(values)
        : await reminderStorage.addReminder(values)
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

  return (
    <ReminderFormContainer
      onSubmit={onSubmit}
      onRemove={onRemove}
      values={reminder}
    />
  )
}

export default ReminderPage
