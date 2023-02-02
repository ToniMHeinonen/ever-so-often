import useReminderStorage from '../../hooks/useReminderStorage'
import { ReminderFormContainer } from './ReminderForm'
import { useEffect, useState } from 'react'
import LoadingIcon from '../../styles/LoadingIcon'
import { setAlert, useStateValue } from '../../state'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Main'
import { Reminder } from '../../utils/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Reminder'>

const ReminderPage: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params
  const [, dispatch] = useStateValue()
  const [reminder, setReminder] = useState<Reminder | undefined>(undefined)
  const reminderStorage = useReminderStorage()

  useEffect(() => {
    retrieveReminder()
  }, [])

  const retrieveReminder = async (): Promise<void> => {
    if (!id) return

    try {
      const reminder = await reminderStorage.getReminder(id)
      setReminder(reminder)
    } catch (error) {
      console.log(error)
    }
  }

  const onRemove = async (): Promise<void> => {
    const removeReminder = async (): Promise<void> => {
      await reminderStorage.removeReminder(reminder)
      navigation.navigate('Home')
    }

    const alert = {
      title: 'Remove Reminder',
      message: `Are you sure you want to remove reminder "${reminder?.name}"?`,
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

  const onSubmit = async (values: Reminder): Promise<void> => {
    try {
      id
        ? await reminderStorage.updateReminder(values)
        : await reminderStorage.addReminder(values)
      navigation.navigate('Home')
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
