import styled from 'styled-components/native'
import theme from '../../utils/theme'
import Constants from 'expo-constants'

export const Container = styled.View`
  background-color: ${theme.colors.appBackground};
  flex-grow: 1;
  flex-shrink: 1;
`

export const StatusBarStyle = styled.View`
  padding-top: ${Constants.statusBarHeight + 'px'};
  border-bottom-width: 1px;
  border-color: ${theme.colors.appBackground};
`
