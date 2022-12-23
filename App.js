import { ModalPortal } from 'react-native-modals'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import ReminderStorage from './src/utils/reminderStorage'
import ReminderStorageContext from './src/contexts/ReminderStorageContext'

const reminderStorage = new ReminderStorage()

const App = () => {
  return (
    <NativeRouter>
      <ReminderStorageContext.Provider value={reminderStorage}>
        <Main />
        <ModalPortal />
      </ReminderStorageContext.Provider>
    </NativeRouter>
  )
}

export default App
