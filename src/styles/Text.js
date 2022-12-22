import styled from 'styled-components/native'
import { css } from 'styled-components'
import { Text as NativeText } from 'react-native'
import theme from '../components/theme'

const Text = styled(NativeText)`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.body};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
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
