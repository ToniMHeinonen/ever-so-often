import { ModalPortal } from 'react-native-modals'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import ReminderStorage from './src/utils/reminderStorage'
import ReminderStorageContext from './src/contexts/ReminderStorageContext'
import { StateProvider, reducer } from './src/state'

const reminderStorage = new ReminderStorage()

const App = () => {
  return (
    <NativeRouter>
      <ReminderStorageContext.Provider value={reminderStorage}>
        <StateProvider reducer={reducer}>
          <Main />
          <ModalPortal />
        </StateProvider>
      </ReminderStorageContext.Provider>
    </NativeRouter>
  )
}

export default App
