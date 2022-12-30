import { StatusBar } from 'expo-status-bar'
import { Route, Routes, Navigate } from 'react-router-native'
import AppBar from '../AppBar'
import { Container } from './style'
import theme from '../theme'
import HomePage from '../HomePage'
import ReminderPage from '../ReminderPage'

const Main = () => {
  return (
    <Container>
      <StatusBar
        backgroundColor={theme.colors.appBarBackground}
        style="light"
      />
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/new-reminder" element={<ReminderPage />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Container>
  )
}

export default Main
