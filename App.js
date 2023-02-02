import { ModalPortal } from 'react-native-modals'
import Main from './src/components/Main'
import ReminderStorage from './src/utils/reminderStorage'
import { StateProvider, reducer } from './src/state'
import LocalStorage from './src/utils/localStorage'
import StorageContext from './src/contexts/StorageContext'

const reminderStorage = new ReminderStorage()
const localStorage = new LocalStorage()

const App = () => {
  return (
    <StorageContext.Provider
      value={{ local: localStorage, reminder: reminderStorage }}
    >
      <StateProvider reducer={reducer}>
        <Main />
        <ModalPortal />
      </StateProvider>
    </StorageContext.Provider>
  )
}

export default App
