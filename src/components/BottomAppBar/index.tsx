import { NavRoutes } from '../../utils/types'
import CenterButton from './CenterButton'
import {
  AppBarRow,
  CenterContainer,
  LeftSideContainer,
  RightSideContainer,
} from './style'

const BottomAppBar = ({ routes }: NavRoutes): JSX.Element | null => {
  return (
    <AppBarRow>
      <LeftSideContainer />
      <CenterContainer>
        <CenterButton pathname={routes[routes.length - 1].name} />
      </CenterContainer>
      <RightSideContainer />
    </AppBarRow>
  )
}

export default BottomAppBar
