import { StatusBar } from 'expo-status-bar'
import { Route, Routes, Navigate } from 'react-router-native'
import { Container, StatusBarStyle } from './style'
import theme from '../theme'
import HomePage from '../HomePage'
import ReminderPage from '../ReminderPage'
import AlertDialog from '../AlertDialog'
import BottomAppBar from '../BottomAppBar'

const Main = () => {
  return (
    <Container>
      <StatusBar
        backgroundColor={theme.colors.appBarBackground}
        style="light"
      />
      <StatusBarStyle />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/new-reminder" element={<ReminderPage />} exact />
        <Route path="/:id" element={<ReminderPage />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AlertDialog />
      <BottomAppBar />
    </Container>
  )
}

export default Main
