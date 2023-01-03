import { ModalPortal } from 'react-native-modals'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import ReminderStorage from './src/utils/reminderStorage'
import ReminderStorageContext from './src/contexts/ReminderStorageContext'
import { StateProvider, reducer } from './src/state'
import LocalStorage from './src/utils/localStorage'
import LocalStorageContext from './src/contexts/LocalStorageContext'

const reminderStorage = new ReminderStorage()
const localStorage = new LocalStorage()

const App = () => {
  return (
    <NativeRouter>
      <ReminderStorageContext.Provider value={reminderStorage}>
        <LocalStorageContext.Provider value={localStorage}>
          <StateProvider reducer={reducer}>
            <Main />
            <ModalPortal />
          </StateProvider>
        </LocalStorageContext.Provider>
      </ReminderStorageContext.Provider>
    </NativeRouter>
  )
}

export default App
