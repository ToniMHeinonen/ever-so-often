import styled, { css } from 'styled-components/native'
import { pressedContentColor } from '../../styles/fragments'
import theme from '../theme'

export const Container = styled.View`
  flex-direction: row;
`

export const minusButtonStyle = css`
  padding: 7px;
  border-right-width: 2px;
  margin-right: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-color: ${theme.colors.accent};
  border-left-color: ${theme.colors.accent};
  border-bottom-color: ${theme.colors.accent};
  border-right-color: ${theme.colors.appBackground};
  background-color: ${theme.colors.appBarBackground};

  ${pressedContentColor}
`

export const numberInputStyle = css`
  margin-left: 0px;
  margin-right: 0px;
  border-radius: 0px;
  padding-left: 15px;
  padding-right: 15px;
`

export const plusButtonStyle = css`
  padding: 7px;
  border-left-width: 2px;
  margin-left: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-color: ${theme.colors.primary};
  border-right-color: ${theme.colors.primary};
  border-bottom-color: ${theme.colors.primary};
  border-left-color: ${theme.colors.appBackground};
  background-color: ${theme.colors.appBarBackground};

  ${pressedContentColor}
`