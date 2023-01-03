import { useLocation } from 'react-router-native'
import CenterButton from './CenterButton'
import {
  AppBarRow,
  CenterContainer,
  LeftSideContainer,
  RightSideContainer,
} from './style'

const BottomAppBar = () => {
  const location = useLocation()

  return (
    <AppBarRow>
      <LeftSideContainer />
      <CenterContainer>
        <CenterButton pathname={location.pathname} />
      </CenterContainer>
      <RightSideContainer />
    </AppBarRow>
  )
}

export default BottomAppBar
