import { Route, Routes, Navigate } from 'react-router-native'
import AppBar from '../AppBar'
import NewReminder from '../NewReminder'
import ThisDayPage from '../ThisDayPage'
import { Container } from './style'

const Main = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<ThisDayPage />} exact />
        <Route path="/new-reminder" element={<NewReminder />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Container>
  )
}

export default Main
