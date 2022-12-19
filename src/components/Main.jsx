import { Route, Routes, Navigate } from 'react-router-native';
import ThisDayPage from './ThisDayPage';

const Main = () => {
  return <Routes>
    <Route path="/" element={<ThisDayPage />} exact />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}

export default Main