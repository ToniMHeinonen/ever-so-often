import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import initialReminders from '../../../data/initialReminders'
import useLocalStorage from '../../hooks/useLocalStorage'
import useReminderStorage from '../../hooks/useReminderStorage'
import LoadingIcon from '../../styles/LoadingIcon'
import SizedBox from '../../styles/SizedBox'
import constants from '../../utils/constants'
import { splitRemindersByActiveState } from '../../utils/reminderHandler'
import { Reminder } from '../../utils/types'
import DebugButtons from './DebugButtons'
import ReminderList from './ReminderList'
import { PageContainer } from './style'

const HomePage = (): JSX.Element => {
  const [activeReminders, setActiveReminders] = useState<Reminder[]>([])
  const [inactiveReminders, setInactiveReminders] = useState<Reminder[]>([])
  const [loading, setLoading] = useState(true)
  const reminderStorage = useReminderStorage()
  const localStorage = useLocalStorage()

  const currentDate = new Date()

  useFocusEffect(
    useCallback(() => {
      getReminders()
    }, [])
  )

  const getReminders = async (): Promise<void> => {
    const reminders = await reminderStorage.getReminders()

    if (reminders.length == 0 && !(await initialRemindersAdded())) {
      // Refetch reminders after initialReminders have been added
      getReminders()
      return
    }

    const [active, inactive] = splitRemindersByActiveState(
      reminders,
      currentDate
    )
    setActiveReminders(active)
    setInactiveReminders(inactive)
    setLoading(false)
  }

  const initialRemindersAdded = async (): Promise<boolean> => {
    const remindersInitialized = await localStorage.getItem(
      constants.localStorage.initialized,
      false
    )

    if (!remindersInitialized) {
      await reminderStorage.initializeReminders(initialReminders)
      await localStorage.setItem(constants.localStorage.initialized, true)
      return false
    }

    return true
  }

  if (loading) {
    return <LoadingIcon />
  }

  return (
    <ScrollView>
      <PageContainer>
        <ReminderList
          currentDate={currentDate}
          activeReminders={activeReminders}
          inactiveReminders={inactiveReminders}
        />
        {__DEV__ && (
          <>
            <SizedBox height={100} />
            <DebugButtons onChange={getReminders} />
          </>
        )}
      </PageContainer>
    </ScrollView>
  )
}

export default HomePage
