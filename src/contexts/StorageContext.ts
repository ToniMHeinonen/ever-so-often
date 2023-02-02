import React from 'react'
import LocalStorage from '../utils/localStorage'
import ReminderStorage from '../utils/reminderStorage'

export interface StorageContextProps {
  local: LocalStorage | null
  reminder: ReminderStorage | null
}

const StorageContext = React.createContext<StorageContextProps>({
  local: null,
  reminder: null,
})

export default StorageContext
