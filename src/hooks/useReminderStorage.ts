import { useContext } from 'react'
import StorageContext, { StorageContextProps } from '../contexts/StorageContext'
import ReminderStorage from '../utils/reminderStorage'

const useReminderStorage = (): ReminderStorage => {
  const { reminder } = useContext<StorageContextProps>(StorageContext)

  if (!reminder)
    throw Error('Context for ReminderStorage was not initialized correctly!')

  return reminder
}

export default useReminderStorage
