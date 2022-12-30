import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import useReminderStorage from '../../hooks/useReminderStorage'
import LoadingIcon from '../../styles/LoadingIcon'
import SizedBox from '../../styles/SizedBox'
import { splitRemindersByActiveState } from '../../utils/reminderHandler'
import DebugButtons from './DebugButtons'
import ReminderList from './ReminderList'
import { PageContainer } from './style'

const HomePage = () => {
  const [activeReminders, setActiveReminders] = useState([])
  const [inactiveReminders, setInactiveReminders] = useState([])
  const [loading, setLoading] = useState(true)
  const reminderStorage = useReminderStorage()

  const currentDate = new Date()

  useEffect(() => {
    getReminders()
  }, [])

  const getReminders = async () => {
    const reminders = await reminderStorage.getReminders()
    const [active, inactive] = splitRemindersByActiveState(
      reminders,
      currentDate
    )
    setActiveReminders(active)
    setInactiveReminders(inactive)
    setLoading(false)
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
