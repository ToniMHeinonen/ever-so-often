import { useContext } from 'react'
import ReminderStorageContext from '../contexts/ReminderStorageContext'

const useReminderStorage = () => {
  return useContext(ReminderStorageContext)
}

export default useReminderStorage
