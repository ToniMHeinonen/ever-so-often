import styled from 'styled-components/native'
import { pressedContentColor } from '../../styles/fragments'
import theme from '../theme'

export const Container = styled.View`
  background-color: ${theme.colors.contentBackground};
  padding: 15px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const RemoveButton = styled.View`
  border-width: ${theme.borders.widthDefault};
  border-radius: ${theme.borders.radiusDefault};
  border-color: ${theme.colors.remove};
  background-color: ${theme.colors.appBackground};
  padding: 3px;
  margin-top: 5px;

  ${pressedContentColor};
`
