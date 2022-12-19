import styled, { css } from 'styled-components/native'
import Constants from 'expo-constants'
import theme from '../theme'

export const Container = styled.View`
  background-color: ${theme.colors.appBarBackground};
  padding-top: ${Constants.statusBarHeight + 'px'};
  flex-direction: row;
`

export const Tab = styled.View`
  padding: 20px 15px;

  ${({ pressed }) =>
    pressed &&
    css`
      background-color: ${theme.colors.appBackground};
    `}
`
