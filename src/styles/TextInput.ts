import styled from 'styled-components/native'
import { TextInput as NativeTextInput, TextInputProps } from 'react-native'
import theme from '../components/theme'
import { customStyle, formFieldBaseStyles } from './fragments'

const TextInput = styled(NativeTextInput).attrs<TextInputProps>({
  placeholderTextColor: theme.colors.textSecondary,
})`
  ${formFieldBaseStyles}
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.body};
  padding-left: 10px;
  padding-right: 10px;

  ${customStyle}
`

export default TextInput
