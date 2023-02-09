import styled, { css } from 'styled-components/native'
import { pressedContentColor } from '../../styles/fragments'
import theme from '../theme'

export const AppBarRow = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0px;
`

const SideContainer = styled.View`
  background-color: ${theme.colors.appBarBackground};
  border-color: ${theme.colors.borderLight};
  border-top-width: ${theme.borders.widthDefault};
  flex: 2;
  height: 30px;
  align-self: flex-end;
`

const borderRadius = '50px'

export const LeftSideContainer = styled(SideContainer)`
  border-right-width: ${theme.borders.widthDefault};
  border-top-right-radius: ${borderRadius};
`

export const RightSideContainer = styled(SideContainer)`
  border-left-width: ${theme.borders.widthDefault};
  border-top-left-radius: ${borderRadius};
  flex: 2;
`

export const CenterContainer = styled.View`
  flex: 1;
`

export const addButtonStyle = css`
  border-radius: 50px;
  background-color: ${theme.colors.appBarBackground};
  ${pressedContentColor}
`
