import styled from 'styled-components/native'
import { css } from 'styled-components'
import { TextInput as NativeTextInput } from 'react-native'
import theme from '../components/theme'

const TextInput = styled(NativeTextInput).attrs({
  placeholderTextColor: theme.colors.textSecondary,
})`
  color: ${theme.colors.textPrimary};
  placeholder-text-color: #fff;
  font-size: ${theme.fontSizes.body};
  margin: 5px;
  padding: 5px;
  border-width: 1px;
  border-color: ${theme.colors.borderLight};
  border-radius: ${theme.borders.radiusDefault};

  ${({ error }) =>
    error &&
    css`
      border-color: ${theme.colors.error};
    `}
`

export default TextInput
