import { ModalPortal } from 'react-native-modals'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'

const App = () => {
  return (
    <NativeRouter>
      <Main />
      <ModalPortal />
    </NativeRouter>
  )
}

export default App
