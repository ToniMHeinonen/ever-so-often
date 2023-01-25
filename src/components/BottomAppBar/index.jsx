import CenterButton from './CenterButton'
import {
  AppBarRow,
  CenterContainer,
  LeftSideContainer,
  RightSideContainer,
} from './style'

const BottomAppBar = ({ state }) => {
  if (!state) return null

  return (
    <AppBarRow>
      <LeftSideContainer />
      <CenterContainer>
        <CenterButton pathname={state.routes[state.routes.length - 1].name} />
      </CenterContainer>
      <RightSideContainer />
    </AppBarRow>
  )
}

export default BottomAppBar
