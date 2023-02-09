/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components/native'
import {
  formFieldBaseStyles,
  pressedContentColor,
} from '../../styles/fragments'
import Text from '../../styles/Text'
import theme from '../../utils/theme'

export const DateHeaderContainer = styled.View`
  ${formFieldBaseStyles}
  flex-direction: row;
  margin-bottom: 0px;
  padding: 0px;
  margin-right: 30px;
  margin-left: auto;
  background-color: ${theme.colors.appBarBackground};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${theme.colors.appBackground};
  align-items: center;
`

export const DateHeaderClearButton = styled.View`
  padding: 5px;
  border-top-left-radius: ${theme.borders.radiusDefault};
  ${pressedContentColor}
`

export const dateHeaderClearText = css`
  font-size: 15px;
  padding: 0px;
  margin: 0px;
`

export const DateHeaderSeparator = styled(Text)`
  color: ${theme.colors.textSecondary};
  font-size: 20px;
  padding: 0px 5px;
  margin: 0px;
`

export const DateHeaderCloseButton = styled.View`
  padding: 4px;
  border-top-right-radius: ${theme.borders.radiusDefault};
  ${pressedContentColor}
`

export const dateButtonStyle = css`
  margin-top: 0px;
  border-color: ${theme.colors.borderLight};
`

interface DateButtonTextProps {
  placeholder?: string
}

export const DateButtonTextStyle = styled(Text)<DateButtonTextProps>`
  font-size: ${theme.fontSizes.body};
  padding: 4px 0;
  text-align: center;

  ${({ placeholder }) =>
    placeholder &&
    css`
      color: ${theme.colors.textSecondary};
    `}
`
