/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components/native'
import { css } from 'styled-components'
import { Text as NativeText } from 'react-native'
import theme from '../utils/theme'

interface Props {
  color?: string
  fontSize?: string
  title?: boolean
  bold?: boolean
  tab?: boolean
  center?: boolean
}

const Text = styled(NativeText)<Props>`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.body};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}

  ${({ title }) =>
    title &&
    css`
      font-size: ${theme.fontSizes.title};
      font-weight: ${theme.fontWeights.bold};
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${theme.fontWeights.bold};
    `}

  ${({ tab }) =>
    tab &&
    css`
      font-size: ${theme.fontSizes.appBarTab};
      font-weight: ${theme.fontWeights.bold};
    `}

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`

export default Text
