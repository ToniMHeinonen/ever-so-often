import styled from 'styled-components/native'
import { TextInput as NativeTextInput } from 'react-native'
import theme from '../components/theme'
import { formFieldBaseStyles } from './FormField'

const TextInput = styled(NativeTextInput).attrs({
  placeholderTextColor: theme.colors.textSecondary,
})`
  ${formFieldBaseStyles}
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.body};
`

export default TextInput
